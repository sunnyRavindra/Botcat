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
    component: ComponentCreator('/docs', 'b23'),
    routes: [
      {
        path: '/docs/Automation/Playwright',
        component: ComponentCreator('/docs/Automation/Playwright', 'a76'),
        exact: true,
        sidebar: "AutomationSidebar"
      },
      {
        path: '/docs/ContactMe',
        component: ComponentCreator('/docs/ContactMe', 'fcd'),
        exact: true
      },
      {
        path: '/docs/Docker/',
        component: ComponentCreator('/docs/Docker/', 'a09'),
        exact: true
      },
      {
        path: '/docs/Docker/Build Docker Image',
        component: ComponentCreator('/docs/Docker/Build Docker Image', 'a5e'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker 1',
        component: ComponentCreator('/docs/Docker/Docker 1', 'ba7'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Basics',
        component: ComponentCreator('/docs/Docker/Docker Basics', '551'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Bind Mounts',
        component: ComponentCreator('/docs/Docker/Docker Bind Mounts', '31f'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Compose/',
        component: ComponentCreator('/docs/Docker/Docker Compose/', 'f8a'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker DevEnv Setup',
        component: ComponentCreator('/docs/Docker/Docker DevEnv Setup', 'cca'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Layer Caching',
        component: ComponentCreator('/docs/Docker/Docker Layer Caching', 'c95'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Multi Stage Build',
        component: ComponentCreator('/docs/Docker/Docker Multi Stage Build', '37a'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker MySQL Application',
        component: ComponentCreator('/docs/Docker/Docker MySQL Application', 'dab'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Networking',
        component: ComponentCreator('/docs/Docker/Docker Networking', '6da'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Nextjs Application',
        component: ComponentCreator('/docs/Docker/Docker Nextjs Application', '2ea'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Nicolaka Netshoot',
        component: ComponentCreator('/docs/Docker/Docker Nicolaka Netshoot', '54c'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Secrets',
        component: ComponentCreator('/docs/Docker/Docker Secrets', 'd9b'),
        exact: true
      },
      {
        path: '/docs/Docker/Docker Volumes',
        component: ComponentCreator('/docs/Docker/Docker Volumes', '998'),
        exact: true
      },
      {
        path: '/docs/Docker/DockerFiles/Docker Ignore file',
        component: ComponentCreator('/docs/Docker/DockerFiles/Docker Ignore file', '7f3'),
        exact: true
      },
      {
        path: '/docs/Docker/DockerFiles/DockerFile',
        component: ComponentCreator('/docs/Docker/DockerFiles/DockerFile', '3c1'),
        exact: true
      },
      {
        path: '/docs/Docker/DockerFiles/Nextjs Docker File',
        component: ComponentCreator('/docs/Docker/DockerFiles/Nextjs Docker File', '7b8'),
        exact: true
      },
      {
        path: '/docs/Docker/DockerHub',
        component: ComponentCreator('/docs/Docker/DockerHub', '337'),
        exact: true
      },
      {
        path: '/docs/Docker/My Used Docker Commands',
        component: ComponentCreator('/docs/Docker/My Used Docker Commands', '3a4'),
        exact: true
      },
      {
        path: '/docs/Docker/Run Commonds Inside Container',
        component: ComponentCreator('/docs/Docker/Run Commonds Inside Container', '7a9'),
        exact: true
      },
      {
        path: '/docs/Docker/Start Docker Container',
        component: ComponentCreator('/docs/Docker/Start Docker Container', 'c7c'),
        exact: true
      },
      {
        path: '/docs/ManualTesting/Introduction',
        component: ComponentCreator('/docs/ManualTesting/Introduction', '544'),
        exact: true
      },
      {
        path: '/docs/ManualTesting/QARoadMap.excalidraw',
        component: ComponentCreator('/docs/ManualTesting/QARoadMap.excalidraw', 'a28'),
        exact: true
      },
      {
        path: '/docs/My Social Docs/Banner',
        component: ComponentCreator('/docs/My Social Docs/Banner', 'bf1'),
        exact: true
      },
      {
        path: '/docs/Vocabulary',
        component: ComponentCreator('/docs/Vocabulary', '881'),
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
