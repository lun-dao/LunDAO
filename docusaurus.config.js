// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LunDAO',
  tagline: '鼓勵撰寫與 Ethereum 社群相關的中深度的中文文章',
  url: 'https://lundao.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lun-dao', // Usually your GitHub org/user name.
  projectName: 'LunDAO', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lun-dao/LunDAO/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lun-dao/LunDAO/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'LunDAO',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'publish-guideline',
            position: 'left',
            label: '關於',
          },
          {to: '/blog', label: '文章', position: 'left'},
          {
            href: 'https://github.com/lun-dao/LunDAO',
            label: 'DAO',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
             title: '關於',
             items: [
               {
                 label: '關於 LunDAO',
                 href: 'https://github.com/lun-dao/LunDAO',
               },
               {
                 label: '投稿文章',
                 to: '/docs/publish-guideline',
               },
               {
                 label: '閱讀文章',
                 to: '/blog',
               },
               {
                 label: '文章提案',
                 to: '/docs/request-for-article',
               },
               {
                 label: '社群貢獻指南',
                  href: 'https://github.com/lun-dao/LunDAO/blob/main/CONTRIBUTING.md',
               },
             ],
          },
          {
            title: 'DAO治理',
            items: [
              {
                label: '貢獻投票 (Coordinape)',
                href: 'https://coordinape.com/',
              },
              {
                label: '治理投票 (Snapshot)',
                href: 'https://snapshot.org/#/lundao.eth',
              },
              {
                label: '社群金庫',
                to: '/docs/treasury',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: '討論區',
                href: 'https://github.com/lun-dao/LunDAO/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/9s3RQmajBu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LunDAO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
