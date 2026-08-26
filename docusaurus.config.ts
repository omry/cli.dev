import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'cli.dev',
  tagline:
    'Tools, products, and experiments for building, deploying, and operating software.',
  url: 'https://cli.dev',
  baseUrl: '/',
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
      disableSwitch: true,
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
