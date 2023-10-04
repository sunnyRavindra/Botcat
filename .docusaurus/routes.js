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
    component: ComponentCreator('/', '102'),
    routes: [
      {
        path: '/docs/ContactMe',
        component: ComponentCreator('/docs/ContactMe', 'fcd'),
        exact: true
      },
      {
        path: '/SDET/API-Automation/Fiddler',
        component: ComponentCreator('/SDET/API-Automation/Fiddler', '0ef'),
        exact: true
      },
      {
        path: '/SDET/API-Automation/Introduction',
        component: ComponentCreator('/SDET/API-Automation/Introduction', '42b'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/API-Automation/static/API',
        component: ComponentCreator('/SDET/API-Automation/static/API', 'de0'),
        exact: true
      },
      {
        path: '/SDET/API-Automation/static/APITesting',
        component: ComponentCreator('/SDET/API-Automation/static/APITesting', '0d7'),
        exact: true
      },
      {
        path: '/SDET/Cucumber/Introduction',
        component: ComponentCreator('/SDET/Cucumber/Introduction', 'c56'),
        exact: true,
        sidebar: "SDETSidebar"
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
        path: '/SDET/DSA/Introduction',
        component: ComponentCreator('/SDET/DSA/Introduction', '1c8'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Jackson/Introduction',
        component: ComponentCreator('/SDET/Jackson/Introduction', '486'),
        exact: true
      },
      {
        path: '/SDET/Java/Data Types',
        component: ComponentCreator('/SDET/Java/Data Types', '7aa'),
        exact: true
      },
      {
        path: '/SDET/Java/JavaPackage',
        component: ComponentCreator('/SDET/Java/JavaPackage', 'd17'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Java/static/Java',
        component: ComponentCreator('/SDET/Java/static/Java', 'ebf'),
        exact: true
      },
      {
        path: '/SDET/Jira/Introduction',
        component: ComponentCreator('/SDET/Jira/Introduction', '40a'),
        exact: true
      },
      {
        path: '/SDET/JobApplications/AppliedJobsDetails',
        component: ComponentCreator('/SDET/JobApplications/AppliedJobsDetails', '665'),
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
        path: '/SDET/Overview',
        component: ComponentCreator('/SDET/Overview', 'b6e'),
        exact: true
      },
      {
        path: '/SDET/Playwright/Introduction',
        component: ComponentCreator('/SDET/Playwright/Introduction', '1e0'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Rest-Assured/Introduction',
        component: ComponentCreator('/SDET/Rest-Assured/Introduction', '7be'),
        exact: true
      },
      {
        path: '/SDET/Security-Testing/SQL-Basics',
        component: ComponentCreator('/SDET/Security-Testing/SQL-Basics', '494'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/SQL-Data-Manupulation',
        component: ComponentCreator('/SDET/Security-Testing/SQL-Data-Manupulation', '224'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/SQL-DataTypes',
        component: ComponentCreator('/SDET/Security-Testing/SQL-DataTypes', '770'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/SQL-Injection',
        component: ComponentCreator('/SDET/Security-Testing/SQL-Injection', 'a3a'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/SQL-Operators',
        component: ComponentCreator('/SDET/Security-Testing/SQL-Operators', '144'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/SQL-References',
        component: ComponentCreator('/SDET/Security-Testing/SQL-References', 'dd7'),
        exact: true
      },
      {
        path: '/SDET/Security-Testing/XSS-Attack',
        component: ComponentCreator('/SDET/Security-Testing/XSS-Attack', 'dc2'),
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
      },
      {
        path: '/SDET/Workout/plan',
        component: ComponentCreator('/SDET/Workout/plan', '323'),
        exact: true,
        sidebar: "SDETSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
