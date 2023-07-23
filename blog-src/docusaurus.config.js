// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "Sefaru";
const projectName = "blog-website";

/** @type {import('@docusaurus/types').Config} */

const config = {
	i18n: {
		defaultLocale: 'ru',
		locales: ['ru'],
	},

  title: '@Sefaru',
  tagline: 'Ничего существенного',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sefaru', // Usually your GitHub org/user name.
  projectName: 'blog-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          blogSidebarCount: 'ALL',
					blogSidebarTitle: 'Сообщения',
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
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        additionalLanguages: ['lua'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      navbar: {
        title: '@Sefaru',
        logo: {
          alt: '',
          src: 'img/logo.png',
        },
        
        items: [
          { to: '/blog', label: 'Блог', position: 'left' },
          {
            type: 'doc',
            docId: 'Uncategorized',
            position: 'left',
            label: 'Статьи',
          },
          {
            className: "header-github-link",
            "aria-label": "GitHub repository",
            href: 'https://github.com/Sefaru',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [],
      //   copyright: `© Sefaru, ${new Date().getFullYear()} `,
      // },
    }),
};

module.exports = config;
