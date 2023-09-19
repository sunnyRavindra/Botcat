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
    path: '/tags',
    component: ComponentCreator('/tags', 'e49'),
    exact: true
  },
  {
    path: '/tags/excalidraw',
    component: ComponentCreator('/tags/excalidraw', 'faa'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '759'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '739'),
    routes: [
      {
        path: '/ContactMe',
        component: ComponentCreator('/ContactMe', '42b'),
        exact: true
      },
      {
        path: '/Excalidraw/Banner',
        component: ComponentCreator('/Excalidraw/Banner', 'ddb'),
        exact: true
      },
      {
        path: '/Excalidraw/QARoadMap.excalidraw',
        component: ComponentCreator('/Excalidraw/QARoadMap.excalidraw', '33a'),
        exact: true
      },
      {
        path: '/SDET/API-Automation/Introduction',
        component: ComponentCreator('/SDET/API-Automation/Introduction', '1f2'),
        exact: true
      },
      {
        path: '/SDET/Docker/Compose',
        component: ComponentCreator('/SDET/Docker/Compose', 'f37'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Docker/ContainerInteractions',
        component: ComponentCreator('/SDET/Docker/ContainerInteractions', '44d'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Docker/Docker-Commands',
        component: ComponentCreator('/SDET/Docker/Docker-Commands', '229'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Docker/Docker-Introduction',
        component: ComponentCreator('/SDET/Docker/Docker-Introduction', '91f'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Docker/DockerFiles/Docker Ignore file',
        component: ComponentCreator('/SDET/Docker/DockerFiles/Docker Ignore file', 'd93'),
        exact: true
      },
      {
        path: '/SDET/Docker/DockerFiles/DockerFile',
        component: ComponentCreator('/SDET/Docker/DockerFiles/DockerFile', 'e35'),
        exact: true
      },
      {
        path: '/SDET/Docker/DockerFiles/Nextjs Docker File',
        component: ComponentCreator('/SDET/Docker/DockerFiles/Nextjs Docker File', '4e9'),
        exact: true
      },
      {
        path: '/SDET/Docker/static/Docker',
        component: ComponentCreator('/SDET/Docker/static/Docker', '5f5'),
        exact: true
      },
      {
        path: '/SDET/Excalidraw/Banner',
        component: ComponentCreator('/SDET/Excalidraw/Banner', 'e18'),
        exact: true
      },
      {
        path: '/SDET/Excalidraw/QARoadMap.excalidraw',
        component: ComponentCreator('/SDET/Excalidraw/QARoadMap.excalidraw', '409'),
        exact: true
      },
      {
        path: '/SDET/Jackson/Introduction',
        component: ComponentCreator('/SDET/Jackson/Introduction', '486'),
        exact: true
      },
      {
        path: '/SDET/Java/JavaPackage',
        component: ComponentCreator('/SDET/Java/JavaPackage', 'd17'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Maven/Introduction',
        component: ComponentCreator('/SDET/Maven/Introduction', '159'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Playwright/Introduction',
        component: ComponentCreator('/SDET/Playwright/Introduction', '1e0'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Selenium/BrowserOptions',
        component: ComponentCreator('/SDET/Selenium/BrowserOptions', '90f'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Selenium/Grid',
        component: ComponentCreator('/SDET/Selenium/Grid', '8f1'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Selenium/Introduction',
        component: ComponentCreator('/SDET/Selenium/Introduction', 'dc4'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Selenium/notes',
        component: ComponentCreator('/SDET/Selenium/notes', 'f01'),
        exact: true
      },
      {
        path: '/SDET/Selenium/static/SeleniumExcalidraw',
        component: ComponentCreator('/SDET/Selenium/static/SeleniumExcalidraw', 'add'),
        exact: true
      },
      {
        path: '/SDET/Selenium/Synchronisation',
        component: ComponentCreator('/SDET/Selenium/Synchronisation', '178'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
