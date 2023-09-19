import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f97'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '997'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '74f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3b0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '656'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '690'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9a3'),
    exact: true
  },
  {
    path: '/blog/2021/08/26/welcome',
    component: ComponentCreator('/blog/2021/08/26/welcome', 'ffa'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '419'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a94'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ae7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '06d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'de9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '4cf'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f6d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'e62'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '8e8'),
    exact: true
  },
  {
    path: '/docs/tags/excalidraw',
    component: ComponentCreator('/docs/tags/excalidraw', '3a7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bc3'),
    routes: [
      {
        path: '/docs/ContactMe',
        component: ComponentCreator('/docs/ContactMe', 'fcd'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/Banner',
        component: ComponentCreator('/docs/Excalidraw/Banner', '74b'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/QARoadMap.excalidraw',
        component: ComponentCreator('/docs/Excalidraw/QARoadMap.excalidraw', 'f7c'),
        exact: true
      },
      {
        path: '/docs/Linux Namespaces',
        component: ComponentCreator('/docs/Linux Namespaces', 'b5b'),
        exact: true
      },
      {
        path: '/docs/SDET/Docker/Compose',
        component: ComponentCreator('/docs/SDET/Docker/Compose', '4f8'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Docker/ContainerInteractions',
        component: ComponentCreator('/docs/SDET/Docker/ContainerInteractions', 'e4f'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Docker/Docker-Commands',
        component: ComponentCreator('/docs/SDET/Docker/Docker-Commands', 'e41'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Docker/Docker-Introduction',
        component: ComponentCreator('/docs/SDET/Docker/Docker-Introduction', '2e6'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Docker/DockerFiles/Docker Ignore file',
        component: ComponentCreator('/docs/SDET/Docker/DockerFiles/Docker Ignore file', '3bd'),
        exact: true
      },
      {
        path: '/docs/SDET/Docker/DockerFiles/DockerFile',
        component: ComponentCreator('/docs/SDET/Docker/DockerFiles/DockerFile', '030'),
        exact: true
      },
      {
        path: '/docs/SDET/Docker/DockerFiles/Nextjs Docker File',
        component: ComponentCreator('/docs/SDET/Docker/DockerFiles/Nextjs Docker File', '1d6'),
        exact: true
      },
      {
        path: '/docs/SDET/Docker/static/Docker',
        component: ComponentCreator('/docs/SDET/Docker/static/Docker', '2ca'),
        exact: true
      },
      {
        path: '/docs/SDET/Excalidraw/Banner',
        component: ComponentCreator('/docs/SDET/Excalidraw/Banner', '40f'),
        exact: true
      },
      {
        path: '/docs/SDET/Excalidraw/QARoadMap.excalidraw',
        component: ComponentCreator('/docs/SDET/Excalidraw/QARoadMap.excalidraw', '7fe'),
        exact: true
      },
      {
        path: '/docs/SDET/Jackson/Introduction',
        component: ComponentCreator('/docs/SDET/Jackson/Introduction', '47a'),
        exact: true
      },
      {
        path: '/docs/SDET/Java/JavaPackage',
        component: ComponentCreator('/docs/SDET/Java/JavaPackage', '3ba'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Maven/Introduction',
        component: ComponentCreator('/docs/SDET/Maven/Introduction', '686'),
        exact: true
      },
      {
        path: '/docs/SDET/Playwright',
        component: ComponentCreator('/docs/SDET/Playwright', '739'),
        exact: true
      },
      {
        path: '/docs/SDET/Selenium/BrowserOptions',
        component: ComponentCreator('/docs/SDET/Selenium/BrowserOptions', 'f58'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Selenium/Grid',
        component: ComponentCreator('/docs/SDET/Selenium/Grid', '39e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Selenium/Introduction',
        component: ComponentCreator('/docs/SDET/Selenium/Introduction', '7bb'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Selenium/notes',
        component: ComponentCreator('/docs/SDET/Selenium/notes', 'b96'),
        exact: true
      },
      {
        path: '/docs/SDET/Selenium/static/SeleniumExcalidraw',
        component: ComponentCreator('/docs/SDET/Selenium/static/SeleniumExcalidraw', 'a21'),
        exact: true
      },
      {
        path: '/docs/SDET/Selenium/Synchronisation',
        component: ComponentCreator('/docs/SDET/Selenium/Synchronisation', '1ee'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '759'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
