
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sunny Ravindra',
  tagline: 'Devops approach for Automation Test Engirneers',
  favicon: 'img/Logo.svg',
  url: 'https://botcat.org',
  baseUrl: '/',
  organizationName: 'Sunny Ravindra', // Usually your GitHub org/user name.
  projectName: 'Sunny Ravindra', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
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
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
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
          {
            type: 'docSidebar',
            sidebarId: 'SDETSidebar',
            position: 'left',
            label: 'SDET Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/docs/ContactMe', label: 'Contact Me', position: 'right' },
          {
            type: 'html',
            position: 'right',
            value: '<a href="/resume/SunnyRavindra_Resume.pdf" download>Resume</a>',
          },
          { to: 'https://www.linkedin.com/in/sunnybharne/', label: 'LinkedIn', position: 'right' },
          { to: 'https://github.com/sunnyRavindra', label: 'Github', position: 'right' },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/sunnyravindra',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   href: '/aboutme',
          //   label: 'AboutMe',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
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
        // copyright: `Copyright © ${new Date().getFullYear()}. Developer Sunny Ravindra Bharne.`,
        copyright: `Sunny Ravindra Bharne`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
