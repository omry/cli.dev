import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

const config: Config = {
  title: 'cli.dev',
  tagline: 'Independent tools, one ecosystem.',
  url: isGitHubPages ? 'https://omry.github.io' : 'https://cli.dev',
  baseUrl: isGitHubPages ? '/cli.dev/' : '/',
  organizationName: 'omry',
  projectName: 'cli.dev',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'cli.dev',
      hideOnScroll: true,
      items: [],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} cli.dev`,
    },
  } satisfies ThemeConfig,
};

export default config;
