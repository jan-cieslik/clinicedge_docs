# ClinicEdge documentation

English user and operator documentation for [ClinicEdge](https://github.com/jan-cieslik/clinicedge), published at **https://clinic-edge.org**.

## Develop and validate

Use Node.js **22.12.0 or later** and npm; [.node-version](.node-version) pins the tested build runtime to **22.23.3**. The Docusaurus runtime, themes, plugins, and type packages are aligned on **3.10.2**; React/React DOM use the compatible 19.3 series.

```bash
npm ci
npm start
npm run build
npm run validate
npm run serve -- --host 127.0.0.1 --port 3001
```

The build fails on broken internal/Markdown links. Validation checks the rendered canonical pages, unique guide metadata, headings, links/anchors, images, sitemap, legacy routes and screenshot provenance. Preview the production build, not just the development server, when verifying redirects.

With the existing Playwright prerequisites below, `PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs npm run test:browser` starts and stops its own production preview and checks desktop/mobile pages, menus, color modes, images, diagrams, keyboard navigation, and every legacy redirect. Set `SEMINAR_BROWSER_LIBS` as well if needed.

## Content structure

The overview introduces four main chapters:

- [For IT Administrators](docs/it-administrators/index.md)
- [For Course Administrators](docs/course-administrators/index.md)
- [For Course Staff](docs/course-staff/index.md)
- [For Students](docs/students/index.md)

These are audiences, not newly introduced application roles. Use actual UI labels and permission checks. Put technical instructions only where an administrator needs them. Prefer panel workflows over direct collection/source editing.

Every guide needs a unique title and description, one top-level heading, a stable readable URL, access prerequisites, expected behavior, and useful cross-links. New pages also need explicit ordering in [sidebars.js](sidebars.js) and updated coverage expectations in the validation script.

The blog is retained with refreshed current links and explicit update/historical notices. Do not rewrite an old submission announcement into a claim of accepted peer review, or present an old roadmap as a release guarantee.

## Verify against the application

The course-administrator and course-staff guides were refreshed against application **v0.9.3**, revision `b853bbdefbf41f8f9939727db9f34b5002b1a7c1`, on 2026-10-25. The refresh covers classroom introductions, separate viewing/management grants, questionnaire correction operations and timers, Stats, projection-link management, and the complete sequence/seminar teaching workflow. See [screenshot provenance](screenshot-provenance.json) for the exact capture revision and worktree state.

Use implementation and tests as the final authority; even the application's README can contain outdated references.

| Documentation area | Primary application evidence |
| --- | --- |
| Deployment/configuration/backup | `run.sh`, `compose.yaml`, `deploy/.env.example`, `docs/deployment.md` |
| Accounts and privileges | `src/utils/auth`, `src/utils/moderation/access.js`, `workflow.js`, panel navigation |
| Authoring and medical references | Moderation forms/services, standard-values and reference-catalog clients |
| Courses/assessments/learning classes | Classroom and assessment editors, `docs/classroom-sequences.md`, sequence hooks/tests |
| ID/PIN, signup, schedules | Access-code/signup UI, durable hooks, `docs/access-code-learning.md`, signup/schedule tests |
| Supervision/seminars/displays | Supervision/seminar UI and policies, real browser integration fixtures |
| Studies/attendance/retention | Study UI/services/hooks, operator scripts, application consent/retention/attendance docs |

Do not document unsupported behavior based only on a roadmap or visible button. Especially verify publication effects, access restrictions, expiry, consent decisions, timer semantics, exports, and destructive operations.

## Reproduce screenshots safely

Screenshots reuse the application's existing real-browser checks with synthetic accounts/content and isolated PocketBase/Next.js services. No production database, `.env` file, credentials, or existing `.next` output is copied.

Prerequisites:

- A trusted local application checkout with its dependencies installed.
- A PocketBase **0.40.4** executable.
- Playwright with Chromium and its required system libraries.
- Sufficient local resources for disposable Next.js servers.

```bash
CLINICEDGE_APP=/absolute/path/to/clinicedge \
POCKETBASE_TEST_BINARY=/absolute/path/to/pocketbase \
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
npm run screenshots
```

If Chromium requires a separate library bundle, additionally set `SEMINAR_BROWSER_LIBS` to its absolute library directory. No workstation-specific helper path is embedded in the capture command.

The runner snapshots application source/configuration, only backend hooks/migrations, and JavaScript test fixtures into a unique temporary directory. It does not copy existing database files. Child test runners allocate loopback ports and temporary data; they stop their services on completion. Raw artifacts are removed after processing.

Two source fixtures are reused:

- `tests/browser_admin_consolidation.mjs`: native account/security checks and settings screenshots.
- `tests/browser_seminar_integration.mjs`: real API/browser seminar publication, student/staff/display flows and responsive checks.

The disposable seminar test copy explicitly reselects **Live** before opening/releasing content because development refresh can reset the tab during compilation of other routes. It also captures the real authoring form, published revisions, learner sequence overview/waiting/continuation, private clinical documentation, supervised-run history, and attendance correction. Capture adapters assert unique source anchors and fail explicitly if the upstream fixture changes. Production application and original test files are unchanged; all assertions remain. These development-runtime tests are not production application-build verification.

Selected captures become compressed WebP files in [static/img/guides](static/img/guides). Settings and seminar-authoring captures are cropped to the relevant controls. [screenshot-provenance.json](screenshot-provenance.json) records the revision, worktree state, capture timestamp, fixtures, adapter, and output dimensions.

**Review every image before publishing.** Never publish login PINs, recovery codes, OTP QR/setup secrets, bearer links, private keys, real identities, or clinical records. Even synthetic usable credentials must stay out. Do not copy raw runner reports/logs into public static assets. Development indicators and generic fixture titles may be visible; captions identify the synthetic content.

## URLs, SEO, and deployment

[legacy-redirects.json](legacy-redirects.json) maps all 31 former guide URLs, two category URLs, and the removed sample page. The inventory was checked against the existing public sitemap. Keep old routes mapped when reorganizing content; do not redirect unrelated topics indiscriminately to the homepage.

Docusaurus's static redirect pages use JavaScript/meta refresh and a canonical destination. They are **not HTTP 301/308 responses**. Hosts supporting HTTP redirects can use the same mapping to configure permanent server-side redirects. Fragment forwarding is preserved, but old headings that no longer exist cannot always be mapped to equivalent anchors.

The canonical origin is configured in [docusaurus.config.js](docusaurus.config.js); [static/robots.txt](static/robots.txt) points to its generated sitemap. Update both and the validator if the host changes. Page/social metadata, role entry points, descriptive text and optimized images support SEO without adding analytics or search.

Deploy the generated `build/` directory to the existing static host. With `trailingSlash: false`, normal pages are emitted as `.html` files and legacy redirects as directory indexes: configure the host to resolve extensionless URLs, or use a compatible static host such as the existing GitHub Pages deployment. Test deep links and redirects on the actual host.

If using Docusaurus's GitHub Pages deploy workflow, review repository permissions and credentials locally, then run `npm run deploy`. Building this repository does not deploy the ClinicEdge application. Never put a GitHub token in this README or commit runtime credentials.

### Cloudflare Pages

Use these Git-connected Pages build settings:

- **Root directory:** the documentation repository root (leave blank when it is the whole repository).
- **Build command:** `npm run build`.
- **Build output directory:** `build`.
- **Node.js:** the committed `.node-version` selects **22.23.3**. If a `NODE_VERSION` environment variable is configured, remove an older override or set it to `22.23.3` for both Production and Preview.

Cloudflare's v2 build image defaults to Node.js 18.17.1, which cannot build this site. Docusaurus requires at least Node 20, but the locked Mermaid/Commander dependencies require at least **22.12.0**; Node 20 is therefore not sufficient. The `package.json` engine requirement alone is not a reliable Cloudflare runtime selector; keep `.node-version` committed.

After pushing the runtime configuration, retry the deployment and confirm the build log detects Node.js **22.23.3** before dependency installation. If it still detects Node 18, check the configured root directory, deployed commit, and Production/Preview `NODE_VERSION` overrides. No Wrangler configuration or Workers runtime is needed for this static Pages site.

## Dependency advisory status

The stack and compatible transitive dependencies were refreshed together. `npm audit` still reports upstream build/development-tool advisories through packages including `tinypool`, `braces`, `serialize-javascript`, an older selector parser, and SockJS's `uuid`. Their dependency chains are selected by the latest stable Docusaurus stack; audit's suggested older Docusaurus version is not a safe automatic upgrade.

Do not run `npm audit fix --force` or impose untested major transitive overrides. Recheck advisories and upstream compatible releases before publishing/building untrusted content. The deployed output is static, but build-tool advisories still matter to the maintainer environment.
