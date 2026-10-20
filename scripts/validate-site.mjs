import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const build = path.join(root, 'build');
const origin = 'https://clinic-edge.org';
assert.ok(existsSync(build), 'Run npm run build before validation');
const redirects = JSON.parse(await readFile(path.join(root, 'legacy-redirects.json'), 'utf8'));
const sitemap = await readFile(path.join(build, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length > 37, 'Sitemap is missing site pages');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');

function decode(value) {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&#39;', "'");
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? decode(match[1] ?? match[2] ?? match[3]) : null;
}

function routeFile(route) {
  const relative = decodeURIComponent(route).replace(/^\/+/, '');
  const candidates = route === '/' ? [path.join(build, 'index.html')] : [
    path.join(build, `${relative}.html`),
    path.join(build, relative, 'index.html'),
    path.join(build, relative),
  ];
  for (const candidate of candidates) {
    assert.ok(candidate.startsWith(`${build}/`), `Path escaped build: ${route}`);
    if (existsSync(candidate)) return candidate;
  }
  assert.fail(`Missing built target: ${route}`);
}

const cache = new Map();
async function html(route) {
  const file = routeFile(route);
  if (!cache.has(file)) cache.set(file, await readFile(file, 'utf8'));
  return cache.get(file);
}

const titles = new Set();
const descriptions = new Set();
let links = 0;
let images = 0;
for (const address of urls) {
  const url = new URL(address);
  assert.equal(url.origin, origin, `Wrong sitemap origin: ${address}`);
  const content = await html(url.pathname);
  const canonical = [...content.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag).filter((tag) => attr(tag, 'rel') === 'canonical');
  assert.equal(canonical.length, 1, `Canonical count: ${address}`);
  assert.equal(attr(canonical[0], 'href'), address, `Wrong canonical: ${address}`);
  assert.equal((content.match(/<h1\b/gi) || []).length, 1, `Expected one H1: ${address}`);
  assert.match(content, /<html[^>]*\blang=["']?en\b/, `Missing English language: ${address}`);
  const metas = [...content.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
  assert.ok(!metas.some((tag) => attr(tag, 'name') === 'robots' && /noindex/.test(attr(tag, 'content'))), `Indexable page is noindex: ${address}`);
  const descriptionTags = metas.filter((tag) => attr(tag, 'name') === 'description');
  assert.equal(descriptionTags.length, 1, `Description count: ${address}`);
  const description = attr(descriptionTags[0], 'content');
  const isGuide = url.pathname === '/' || url.pathname.startsWith('/docs/');
  assert.ok(description.length >= (isGuide ? 30 : 1) && description.length <= 250, `Unhelpful description: ${address}`);
  const title = content.match(/<title\b[^>]*>([^<]+)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing/duplicate title: ${address}`);
  titles.add(title);
  if (isGuide) {
    assert.ok(!descriptions.has(description), `Duplicate guide description: ${address}`);
    descriptions.add(description);
  }
  assert.ok(metas.some((tag) => attr(tag, 'property') === 'og:image'), `Missing social image: ${address}`);
  for (const [tag] of content.matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(tag, 'href');
    if (!href || /^(mailto:|tel:)/.test(href)) continue;
    const target = new URL(href, address);
    if (target.origin !== origin) continue;
    const file = routeFile(target.pathname);
    if (target.hash && file.endsWith('.html')) {
      const targetHtml = await html(target.pathname);
      const ids = [...targetHtml.matchAll(/\bid=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
        .map((match) => decode(match[1] ?? match[2] ?? match[3]));
      assert.ok(ids.includes(decodeURIComponent(target.hash.slice(1))), `Broken anchor: ${href} from ${address}`);
    }
    links++;
  }
  for (const [tag] of content.matchAll(/<img\b[^>]*>/gi)) {
    assert.notEqual(attr(tag, 'alt'), null, `Missing image alternative: ${address}`);
    const src = attr(tag, 'src');
    if (!src || src.startsWith('data:')) continue;
    const target = new URL(src, address);
    if (target.origin === origin) routeFile(target.pathname);
    images++;
  }
}

assert.equal(new Set(redirects.map(({from}) => from)).size, redirects.length, 'Duplicate legacy mappings');
for (const {from, to} of redirects) {
  assert.ok(urls.includes(`${origin}${to}`), `Redirect destination is not canonical: ${to}`);
  assert.ok(!urls.includes(`${origin}${from}`), `Legacy URL in sitemap: ${from}`);
  const content = await html(from);
  assert.ok(content.includes(to), `Missing redirect target: ${from}`);
  const canonical = [...content.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag)
    .find((tag) => attr(tag, 'rel') === 'canonical');
  assert.ok(canonical && new URL(attr(canonical, 'href'), origin).pathname === to, `Legacy canonical mismatch: ${from}`);
}
assert.equal(redirects.filter(({from}) => from.startsWith('/docs/')).length, 33, 'Legacy documentation route coverage changed; review the inventory');

const sidebar = await readFile(path.join(root, 'sidebars.js'), 'utf8');
for (const title of ['For IT Administrators', 'For Course Administrators', 'For Course Staff', 'For Students']) {
  assert.ok(sidebar.includes(`label: '${title}'`), `Missing audience: ${title}`);
}
const robots = await readFile(path.join(build, 'robots.txt'), 'utf8');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Robots sitemap mismatch');

async function markdownFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const nested = await Promise.all(entries.map((entry) => entry.isDirectory()
    ? markdownFiles(path.join(directory, entry.name))
    : entry.name.endsWith('.md') ? [path.join(directory, entry.name)] : []));
  return nested.flat();
}
const guides = await markdownFiles(path.join(root, 'docs'));
assert.equal(guides.length, 37, 'Review expected guide coverage after adding/removing pages');
for (const file of guides) {
  const source = await readFile(file, 'utf8');
  assert.match(source, /^description: .+/m, `Missing source description: ${file}`);
  assert.equal((source.match(/^# /gm) || []).length, 1, `Source heading count: ${file}`);
}
const provenance = JSON.parse(await readFile(path.join(root, 'screenshot-provenance.json'), 'utf8'));
for (const image of provenance.screenshots) {
  assert.ok(existsSync(path.join(build, 'img/guides', image.file)), `Missing captured image: ${image.file}`);
}
console.log(`PASS: ${guides.length} guides, ${urls.length} canonical sitemap pages, ${redirects.length} redirects, ${links} internal links/anchors, ${images} image references, ${provenance.screenshots.length} documented screenshots`);
