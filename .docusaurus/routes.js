import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/',
    component: ComponentCreator('/', '759'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8af'),
    routes: [
      {
        path: '/1AutomationFramework',
        component: ComponentCreator('/1AutomationFramework', 'df3'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/1Selenium',
        component: ComponentCreator('/1Selenium', '1c9'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/1TestNg',
        component: ComponentCreator('/1TestNg', '354'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2Cucumber',
        component: ComponentCreator('/2Cucumber', '8a3'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2Docker',
        component: ComponentCreator('/2Docker', 'cc0'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2Grid',
        component: ComponentCreator('/2Grid', '4c4'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2Log4J',
        component: ComponentCreator('/2Log4J', '973'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2Maven',
        component: ComponentCreator('/2Maven', '83c'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/2RestAssured',
        component: ComponentCreator('/2RestAssured', '8a9'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/3Java',
        component: ComponentCreator('/3Java', '7f5'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/3Jira',
        component: ComponentCreator('/3Jira', '27f'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/DSA',
        component: ComponentCreator('/DSA', '656'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/python',
        component: ComponentCreator('/python', 'f94'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/RobotFramework',
        component: ComponentCreator('/RobotFramework', 'e00'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/SoapUI',
        component: ComponentCreator('/SoapUI', '0ed'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/Testing',
        component: ComponentCreator('/Testing', '9b8'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/Xray',
        component: ComponentCreator('/Xray', 'ca7'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      },
      {
        path: '/Zephyr',
        component: ComponentCreator('/Zephyr', '477'),
        exact: true,
        sidebar: "myAutogeneratedSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
