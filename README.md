# cli.dev

[![ecosystem: cli.dev](https://cli.dev/img/badges/cli-dev-ecosystem.svg)](https://cli.dev)

The lightweight umbrella portal for the cli.dev ecosystem. It provides one
directory of projects while each project keeps its own site, documentation,
identity, and release lifecycle.

## Tooling

The JavaScript toolchain follows the Hydra website:

- Node.js 24, declared in `.nvmrc`
- pnpm 11.21.0 through Corepack, pinned in `package.json`
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

Run the required checks before review. This runs the security patch regression
test, TypeScript checks, and production build:

```sh
corepack pnpm run check
```

The production site is written to `build/`.

## Dependency maintenance

[Shared Docusaurus workflows](https://github.com/hydra-ecosystem/github-actions/blob/main/docs/docusaurus.md)
audit dependencies, attempt security fixes, and propose routine upgrades in one
maintenance PR. `.github/docusaurus.json` selects this repository's root project,
declared tools, and `check` script. Routine upgrades can include major versions;
security fixes are handled separately.

The audit runs on January 30 at 02:00 UTC. To run it sooner, dispatch
**Docusaurus dependency audit** from `main` in GitHub Actions. Change the schedule
in both `.github/docusaurus.json` and `.github/workflows/dependency-audit.yml`.

Before the first run, enable **Allow GitHub Actions to create and approve pull
requests** under **Settings → Actions → General → Workflow permissions**.
When the default `GITHUB_TOKEN` creates a PR, a maintainer may need to approve
the PR workflows. The maintenance workflow does not deploy the website.

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
