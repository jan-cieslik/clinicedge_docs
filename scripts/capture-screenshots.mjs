import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {execFileSync} from 'node:child_process';
import {cp, mkdir, mkdtemp, readFile, realpath, rm, symlink, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const docs = fileURLToPath(new URL('../', import.meta.url));
for (const key of ['CLINICEDGE_APP', 'POCKETBASE_TEST_BINARY', 'PLAYWRIGHT_MODULE']) {
  assert.ok(process.env[key] && path.isAbsolute(process.env[key]), `Set ${key} to an absolute local path`);
}
const source = await realpath(process.env.CLINICEDGE_APP);
const require = createRequire(path.join(source, 'package.json'));
const sharp = require('sharp');
const directory = await mkdtemp(path.join(tmpdir(), 'clinicedge-docs-capture-'));
const app = path.join(directory, 'app');
const output = path.join(docs, 'static/img/guides');
const provenance = [];
let active;

function run(script, env) {
  return new Promise((resolve, reject) => {
    active = spawn(process.execPath, [script], {cwd: app, env, stdio: ['ignore', 'pipe', 'pipe']});
    let log = '';
    active.stdout.on('data', (chunk) => { log += chunk; });
    active.stderr.on('data', (chunk) => { log += chunk; });
    active.once('error', (error) => { active = undefined; reject(error); });
    active.once('exit', (code, signal) => {
      active = undefined;
      if (code === 0) resolve(log);
      else reject(new Error(`${script} failed (${signal || code}). ${log.slice(-6000)}`));
    });
  });
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    if (active) active.kill(signal);
    else process.exitCode = 1;
  });
}

try {
  await mkdir(app);
  for (const name of ['src', 'public', 'content', 'package.json', 'next.config.mjs', 'jsconfig.json', 'postcss.config.mjs', 'tailwind.config.js']) {
    await cp(path.join(source, name), path.join(app, name), {recursive: true});
  }
  for (const name of ['pb/pb_hooks', 'pb/pb_migrations']) {
    await cp(path.join(source, name), path.join(app, name), {recursive: true});
  }
  await cp(path.join(source, 'tests'), path.join(app, 'tests'), {
    recursive: true,
    filter: (entry) => !path.extname(entry) || entry.endsWith('.mjs'),
  });
  await symlink(path.join(source, 'node_modules'), path.join(app, 'node_modules'), 'dir');
  const seminarRunner = path.join(app, 'tests/browser_seminar_integration.mjs');
  let seminarSource = await readFile(seminarRunner, 'utf8');
  for (const anchor of [
    'await pages.supervisor.getByRole("button", { name: "Open seminar", exact: true }).click();',
    'const row = pages.supervisor.getByRole("navigation", { name: "Custom items" })',
  ]) {
    assert.ok(seminarSource.includes(anchor), 'Seminar fixture changed; review the Live-tab capture adapter');
    seminarSource = seminarSource.replace(anchor, `await pages.supervisor.getByRole("tab", { name: "Live", exact: true }).click();\n      ${anchor}`);
  }
  await writeFile(seminarRunner, seminarSource);
  await mkdir(output, {recursive: true});
  const env = {
    PATH: process.env.PATH,
    HOME: process.env.HOME,
    NEXT_TELEMETRY_DISABLED: '1',
    POCKETBASE_TEST_BINARY: process.env.POCKETBASE_TEST_BINARY,
    PLAYWRIGHT_MODULE: process.env.PLAYWRIGHT_MODULE,
    ...(process.env.SEMINAR_BROWSER_LIBS ? {
      SEMINAR_BROWSER_LIBS: process.env.SEMINAR_BROWSER_LIBS,
      LD_LIBRARY_PATH: process.env.SEMINAR_BROWSER_LIBS,
    } : {}),
  };
  const jobs = [
    {
      script: 'tests/browser_admin_consolidation.mjs',
      variable: 'ADMIN_BROWSER_ARTIFACTS',
      files: ['admin-settings-desktop', 'admin-settings-mobile'],
    },
    {
      script: 'tests/browser_seminar_integration.mjs',
      variable: 'SEMINAR_INTEGRATION_ARTIFACTS',
      files: ['supervisor-1280', 'desktop-1280', 'mobile-375', 'supervisor-375', 'display-1280', 'display-375'],
    },
  ];
  for (const job of jobs) {
    const artifacts = path.join(directory, job.variable);
    console.log(`Running ${job.script} against disposable services`);
    await run(job.script, {...env, [job.variable]: artifacts});
    for (const name of job.files) {
      const image = sharp(path.join(artifacts, `${name}.png`));
      const metadata = await image.metadata();
      assert.ok(metadata.width >= 375 && metadata.height > 100, `Invalid capture: ${name}`);
      const cropHeight = name === 'admin-settings-desktop' ? 1140 : name === 'admin-settings-mobile' ? 1400 : metadata.height;
      await image.extract({left: 0, top: 0, width: metadata.width, height: cropHeight})
        .resize({width: Math.min(metadata.width, 1440), withoutEnlargement: true})
        .webp({quality: 82}).toFile(path.join(output, `${name}.webp`));
      provenance.push({file: `${name}.webp`, fixture: job.script, runtime: 'real application and disposable PocketBase', ...(job.variable === 'SEMINAR_INTEGRATION_ARTIFACTS' ? {adapter: 'Reselect Live tab before open/release after development refresh; assertions unchanged.'} : {}), width: metadata.width, height: cropHeight});
    }
    console.log(`PASS ${job.script}: ${job.files.length} optimized captures`);
  }
  const revision = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  const dirty = Boolean(execFileSync('git', ['-C', source, 'status', '--porcelain'], {encoding: 'utf8'}).trim());
  await writeFile(path.join(docs, 'screenshot-provenance.json'), `${JSON.stringify({
    applicationRevision: revision,
    applicationHadLocalChanges: dirty,
    language: 'en',
    data: 'Synthetic fixtures only. No .env, database files, or existing build output copied.',
    screenshots: provenance,
  }, null, 2)}\n`);
  console.log('Captures generated. Review images for secrets and relevance before publishing.');
} finally {
  assert.ok(!active, 'A screenshot runner is still active');
  await rm(directory, {recursive: true, force: true});
}
