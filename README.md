# cli.dev

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

## Content

Project names and destinations live in `src/data/projects.ts`. OmegaConf
currently links to its Read the Docs site.

The portal is a single custom homepage. Docusaurus docs, blog, search,
documentation versioning, and additional locales are not enabled.

## Deployment

Pushes to `main` publish the portal to
`https://omry.github.io/cli.dev/` through GitHub Pages. The deployment workflow
builds with `DEPLOY_TARGET=github-pages`, which selects the GitHub project-site
URL and `/cli.dev/` base path.

Normal local and production builds continue to target `https://cli.dev` at the
root path. The GitHub Pages setup does not configure a custom domain or change
DNS.
