// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cheatsheet',
  tagline: 'Referência rápida de comandos para DevOps e Segurança da Informação',
  favicon: 'img/favicon.ico',

  url: 'https://joaovbr0.github.io',
  baseUrl: '/cheatsheet/',

  organizationName: 'joaovbr0',
  projectName: 'cheatsheet',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cheatsheet',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cheatsheetSidebar',
            position: 'left',
            label: 'Comandos',
          },
          {
            href: 'https://github.com/joaovbr0/cheatsheet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Referências',
            items: [
              { label: 'Nmap Docs', href: 'https://nmap.org/book/man.html' },
              { label: 'Docker Docs', href: 'https://docs.docker.com' },
              { label: 'kubectl Cheatsheet', href: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/' },
            ],
          },
          {
            title: 'Links',
            items: [
              { label: 'GitHub', href: 'https://github.com/joaovbr0/cheatsheet' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cheatsheet. Feito com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'docker'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
