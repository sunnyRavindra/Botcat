// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sunny Ravindra',
  tagline: 'Devops approach for Automation Test Engirneers',
  favicon: 'img/Logo.svg',

  // Set the production url of your site here
  url: 'https://botcat.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sunny Ravindra', // Usually your GitHub org/user name.
  projectName: 'Sunny Ravindra', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Sunny Ravindra',
        hideOnScroll: true,
        logo: {
          alt: 'QAOPS Logo',
          src: 'img/Logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'StepFunctionsSidebar',
          //   position: 'left',
          //   label: 'Step Functions',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'APITestingSidebar',
            position: 'left',
            label: 'API Testing',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'SeleniumSidebar',
          //   position: 'left',
          //   label: 'Selenium',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'LeetcodeSidebar',
          //   position: 'left',
          //   label: 'Leetcode',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'FinnishSidebar',
          //   position: 'left',
          //   label: 'Finnish',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'awsSidebar',
          //   position: 'left',
          //   label: 'AWS',
          // },
          {to: '/blog', label: 'QA RoadMap', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/sunnyravindra',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   href: '/aboutme',
          //   label: 'AboutMe',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Devops Approach for Test Automation Engineers.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
