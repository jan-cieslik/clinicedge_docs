import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {readFile} from 'node:fs/promises';
import {createServer} from 'node:net';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
assert.ok(process.env.PLAYWRIGHT_MODULE && path.isAbsolute(process.env.PLAYWRIGHT_MODULE), 'Set PLAYWRIGHT_MODULE to the existing Playwright index.mjs');
const {chromium} = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
const listener = createServer();
await new Promise((resolve, reject) => {
  listener.once('error', reject);
  listener.listen(0, '127.0.0.1', resolve);
});
const port = listener.address().port;
await new Promise((resolve) => listener.close(resolve));
const origin = `http://127.0.0.1:${port}`;
const child = spawn(process.execPath, ['node_modules/@docusaurus/core/bin/docusaurus.mjs', 'serve', '--host', '127.0.0.1', '--port', String(port), '--no-open'], {
  cwd: root,
  env: {...process.env, BROWSER: 'none'},
  stdio: ['ignore', 'pipe', 'pipe'],
});
let serverLog = '';
for (const stream of [child.stdout, child.stderr]) stream.on('data', (chunk) => { serverLog = (serverLog + chunk).slice(-6000); });
let spawnError;
child.once('error', (error) => { spawnError = error; });
let browser;
try {
  let ready = false;
  let lastFailure;
  for (let attempt = 0; attempt < 100; attempt++) {
    assert.ok(!spawnError && child.exitCode === null, `Preview exited: ${spawnError?.message || serverLog}`);
    ready = await fetch(origin).then((response) => response.ok, (error) => { lastFailure = error.message; return false; });
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, `Preview did not become ready: ${lastFailure || serverLog}`);
  browser = await chromium.launch({
    ...(process.env.SEMINAR_BROWSER_LIBS ? {env: {...process.env, LD_LIBRARY_PATH: process.env.SEMINAR_BROWSER_LIBS}} : {}),
  });
  const errors = [];
  const routes = [
    '/',
    '/docs/overview',
    '/docs/it-administrators',
    '/docs/course-administrators',
    '/docs/course-staff',
    '/docs/students',
    '/docs/it-administrators/architecture',
    '/docs/it-administrators/configuration',
    ...['access-registration', 'assessments', 'cases', 'classrooms', 'learning-classes', 'permissions', 'publication', 'reference-content', 'results-support', 'seminar-authoring', 'sequences', 'studies']
      .map((guide) => `/docs/course-administrators/${guide}`),
    ...['group-seminars', 'projection', 'supervision', 'test-presentation']
      .map((guide) => `/docs/course-staff/${guide}`),
    '/docs/students/group-seminars',
    '/blog',
    '/blog/roadmap-2026',
    '/impressum',
  ];
  for (const width of [1440, 375]) {
    const context = await browser.newContext({baseURL: origin, viewport: {width, height: 1000}});
    const page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(route);
      assert.equal(response.status(), 200, route);
      await page.locator('h1').waitFor();
      assert.equal(await page.locator('h1').count(), 1, `Heading count: ${route}`);
      await page.evaluate(async () => {
        await document.fonts.ready;
        for (const image of document.images) image.loading = 'eager';
        let timeout;
        try {
          await Promise.race([
            Promise.all([...document.images].map((image) => image.decode())),
            new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Image decoding timed out')), 15000); }),
          ]);
        } finally {
          clearTimeout(timeout);
        }
      });
      const dimensions = await page.evaluate(() => ({
        width: innerWidth,
        content: document.documentElement.scrollWidth,
        text: document.body.innerText.length,
      }));
      assert.ok(dimensions.content <= dimensions.width + 1, `Horizontal overflow at ${width}: ${route}`);
      assert.ok(dimensions.text > 100, `Blank page: ${route}`);
      console.log(`PASS ${width}px ${route}: rendered, images decoded, no overflow`);
    }
    await page.goto('/docs/students');
    if (width === 375) {
      await page.getByRole('button', {name: 'Toggle navigation bar'}).click();
      await page.getByRole('link', {name: 'Documentation', exact: true}).first().waitFor({state: 'visible'});
      await page.getByRole('button', {name: 'Close navigation bar'}).click();
    } else {
      const toggle = page.getByRole('button', {name: /Switch between dark and light mode/});
      await toggle.click();
      await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark');
      await toggle.click();
      await page.waitForFunction(() => document.documentElement.dataset.theme === 'light');
    }
    await context.close();
  }
  const context = await browser.newContext({baseURL: origin});
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  const redirects = JSON.parse(await readFile(path.join(root, 'legacy-redirects.json'), 'utf8'));
  for (const {from, to} of redirects) {
    await page.goto(from);
    await page.waitForURL(`${origin}${to}`);
    await page.locator('h1').waitFor();
  }
  await page.goto('/docs/it-administrators/architecture');
  await page.locator('.docusaurus-mermaid-container svg').waitFor();
  await page.goto('/');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to main content');
  await context.close();
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log(`PASS ${routes.length * 2} responsive page checks, mobile menu, color modes, keyboard skip link, Mermaid diagram, and ${redirects.length} browser redirects`);
} finally {
  await browser?.close();
  if (child.exitCode === null && !spawnError) {
    const exited = once(child, 'exit');
    child.kill('SIGTERM');
    const force = setTimeout(() => child.kill('SIGKILL'), 5000);
    await exited;
    clearTimeout(force);
  }
}
