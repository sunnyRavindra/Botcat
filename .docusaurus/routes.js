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
    component: ComponentCreator('/docs', 'a9d'),
    routes: [
      {
        path: '/docs/ContactMe',
        component: ComponentCreator('/docs/ContactMe', 'fcd'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/',
        component: ComponentCreator('/docs/DevOps/Docker/', 'f9e'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Build Docker Image',
        component: ComponentCreator('/docs/DevOps/Docker/Build Docker Image', '297'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker 1',
        component: ComponentCreator('/docs/DevOps/Docker/Docker 1', '4bf'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Basics',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Basics', '91c'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Bind Mounts',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Bind Mounts', '74b'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Compose/',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Compose/', 'b48'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker DevEnv Setup',
        component: ComponentCreator('/docs/DevOps/Docker/Docker DevEnv Setup', 'f4f'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Layer Caching',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Layer Caching', 'e99'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Multi Stage Build',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Multi Stage Build', '70e'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker MySQL Application',
        component: ComponentCreator('/docs/DevOps/Docker/Docker MySQL Application', '57e'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Networking',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Networking', 'f49'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Nextjs Application',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Nextjs Application', 'b6d'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Nicolaka Netshoot',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Nicolaka Netshoot', '9dc'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Secrets',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Secrets', '7ef'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Docker Volumes',
        component: ComponentCreator('/docs/DevOps/Docker/Docker Volumes', '41f'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/DockerFiles/Docker Ignore file',
        component: ComponentCreator('/docs/DevOps/Docker/DockerFiles/Docker Ignore file', 'dfd'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/DockerFiles/DockerFile',
        component: ComponentCreator('/docs/DevOps/Docker/DockerFiles/DockerFile', 'a30'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/DockerFiles/Nextjs Docker File',
        component: ComponentCreator('/docs/DevOps/Docker/DockerFiles/Nextjs Docker File', 'dde'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/DockerHub',
        component: ComponentCreator('/docs/DevOps/Docker/DockerHub', '625'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/My Used Docker Commands',
        component: ComponentCreator('/docs/DevOps/Docker/My Used Docker Commands', 'a47'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Run Commonds Inside Container',
        component: ComponentCreator('/docs/DevOps/Docker/Run Commonds Inside Container', '41f'),
        exact: true
      },
      {
        path: '/docs/DevOps/Docker/Start Docker Container',
        component: ComponentCreator('/docs/DevOps/Docker/Start Docker Container', 'a7c'),
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
        path: '/docs/SDET/Docker/Introduction',
        component: ComponentCreator('/docs/SDET/Docker/Introduction', '425'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/docs/SDET/Playwright',
        component: ComponentCreator('/docs/SDET/Playwright', '739'),
        exact: true
      },
      {
        path: '/docs/SDET/Selenium/',
        component: ComponentCreator('/docs/SDET/Selenium/', 'b71'),
        exact: true,
        sidebar: "SDETSidebar"
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
