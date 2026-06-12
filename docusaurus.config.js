// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dolu',
  tagline: 'Dolu mods are cool',
  url: 'https://dolutattoo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'dolutattoo', // Usually your GitHub org/user name.
  projectName: 'dolutattoo.github.io', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dolu/dolu.github.io/tree/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Dolu Mods',
        logo: {
          alt: 'Dolu Logo',
          src: 'img/logo_dolu.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://dolu.tebex.io/',
            label: 'Store',
            position: 'right',
          },
          {
            href: 'https://discord.gg/ZQn2m2A',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/dolutattoo/',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;
