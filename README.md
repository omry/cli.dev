# cli.dev

[![ecosystem: cli.dev](https://cli.dev/img/badges/cli-dev-ecosystem.svg)](https://cli.dev)

The lightweight umbrella portal for the cli.dev ecosystem. It provides one
directory of projects while each project keeps its own site, documentation,
identity, and release lifecycle.

## Tooling

The JavaScript toolchain follows the Hydra website:

- Node.js 24 or newer
- pnpm 11.21 through Corepack
- Docusaurus 3.10 with its v4 future flags and Faster toolchain enabled
- React 19 and TypeScript

The pnpm workspace also applies Hydra's dependency controls: a minimum package
release age, restricted dependency build scripts, targeted security overrides,
and a patched `image-size` package with a regression test. The SWC build script
is explicitly allowed because Docusaurus Faster requires its native compiler.

## Local development

Install dependencies and start the development server:

```sh
corepack pnpm install
corepack pnpm start
```

The development site is available at `http://localhost:9987`.

Run the required checks before review:

```sh
corepack pnpm run test:security-patches
corepack pnpm run typecheck
corepack pnpm run build
```

The production site is written to `build/`.

## Dependency maintenance

[Node dependency maintenance](https://github.com/hydra-ecosystem/github-actions/blob/main/docs/node-maintenance.md)
checks this website using `.github/node-maintenance.json` and the pinned
`.github/workflows/dependency-audit.yml` caller. It inherits
[shared defaults](https://github.com/hydra-ecosystem/github-actions/blob/main/defaults/node-maintenance.json):
Node 24, pnpm 11.21.0, a ten-day release cooldown, weekly security checks,
and quarterly routine upgrades.

Open **Actions → Node dependency audit → Run workflow** on `main` and choose
**security** to check for compatible security fixes, or **upgrades** to include
routine upgrades. The `check` script runs security patch tests, TypeScript checks,
and the production build before dependency changes are proposed in one PR.
Nothing merges automatically.

The existing Node and pnpm versions, dependency policies, and deployment workflow
are preserved. A toolchain or schedule conflict fails the audit and updates one
**Node audit configuration** issue. Correct the reported setup and rerun; a
successful preflight closes that issue. Shared defaults never rewrite project
declarations. If inherited schedules change, update the caller's cron entries too.

Built-in PR creation is enabled in this repository, with default token permissions
remaining read-only. PRs created by the built-in token do not trigger other
workflows automatically; the audit itself runs the configured checks.

## Content

Project names and destinations live in `src/data/projects.ts`. OmegaConf
links to its documentation site at `https://omegaconf.cli.dev/`.

The portal is a single custom homepage. Docusaurus docs, blog, search,
documentation versioning, and additional locales are not enabled.

## Deployment

Pushes to `main` publish the portal to `https://cli.dev/` through GitHub Pages.
The deployment workflow builds the site for the custom domain at the root path.

GitHub Pages owns the `cli.dev` custom-domain configuration. The apex DNS
records must point directly to GitHub Pages, and `www.cli.dev` should be a CNAME
to `omry.github.io`.
