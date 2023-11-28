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
    component: ComponentCreator('/', '5e0'),
    routes: [
      {
        path: '/docs/ContactMe',
        component: ComponentCreator('/docs/ContactMe', 'fcd'),
        exact: true
      },
      {
        path: '/SDET/API-Testing-Concepts/API Basics',
        component: ComponentCreator('/SDET/API-Testing-Concepts/API Basics', 'f06'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/API-Testing-Concepts/HTTP Basics',
        component: ComponentCreator('/SDET/API-Testing-Concepts/HTTP Basics', 'bbc'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/API-Testing-Concepts/static/API',
        component: ComponentCreator('/SDET/API-Testing-Concepts/static/API', '0d3'),
        exact: true
      },
      {
        path: '/SDET/API-Testing-Concepts/static/APITesting',
        component: ComponentCreator('/SDET/API-Testing-Concepts/static/APITesting', '542'),
        exact: true
      },
      {
        path: '/SDET/Appium/Intro',
        component: ComponentCreator('/SDET/Appium/Intro', '28e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Cucumber/Architecture',
        component: ComponentCreator('/SDET/Cucumber/Architecture', '783'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Cucumber/Dependency-Injection',
        component: ComponentCreator('/SDET/Cucumber/Dependency-Injection', '408'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Cucumber/ExtentReports',
        component: ComponentCreator('/SDET/Cucumber/ExtentReports', '9a3'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Cucumber/Introduction',
        component: ComponentCreator('/SDET/Cucumber/Introduction', 'c56'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Cucumber/static/Cucumber',
        component: ComponentCreator('/SDET/Cucumber/static/Cucumber', '6be'),
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
        path: '/SDET/Java/Basics',
        component: ComponentCreator('/SDET/Java/Basics', 'ff4'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Java/exception',
        component: ComponentCreator('/SDET/Java/exception', '6c2'),
        exact: true
      },
      {
        path: '/SDET/Java/InnerClass',
        component: ComponentCreator('/SDET/Java/InnerClass', '7ed'),
        exact: true
      },
      {
        path: '/SDET/Java/IO',
        component: ComponentCreator('/SDET/Java/IO', '09f'),
        exact: true
      },
      {
        path: '/SDET/Java/Multithreading',
        component: ComponentCreator('/SDET/Java/Multithreading', 'd93'),
        exact: true
      },
      {
        path: '/SDET/Java/static/Java',
        component: ComponentCreator('/SDET/Java/static/Java', 'ebf'),
        exact: true
      },
      {
        path: '/SDET/Jira/Agile-Project',
        component: ComponentCreator('/SDET/Jira/Agile-Project', '94e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Jira/static/Agile',
        component: ComponentCreator('/SDET/Jira/static/Agile', '453'),
        exact: true
      },
      {
        path: '/SDET/Jira/WaterFall-Project',
        component: ComponentCreator('/SDET/Jira/WaterFall-Project', 'b17'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Kafka/Intro',
        component: ComponentCreator('/SDET/Kafka/Intro', 'fd8'),
        exact: true
      },
      {
        path: '/SDET/Maven/Introduction',
        component: ComponentCreator('/SDET/Maven/Introduction', '159'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Microservices/Introduction',
        component: ComponentCreator('/SDET/Microservices/Introduction', '6a9'),
        exact: true
      },
      {
        path: '/SDET/Pasila',
        component: ComponentCreator('/SDET/Pasila', 'f4f'),
        exact: true
      },
      {
        path: '/SDET/Playwright/Introduction',
        component: ComponentCreator('/SDET/Playwright/Introduction', '1e0'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/PostMan/Introduction',
        component: ComponentCreator('/SDET/PostMan/Introduction', '448'),
        exact: true
      },
      {
        path: '/SDET/Practice-Sites/Practice',
        component: ComponentCreator('/SDET/Practice-Sites/Practice', '424'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Rest-Assured/Introduction',
        component: ComponentCreator('/SDET/Rest-Assured/Introduction', '958'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Robot-Framework',
        component: ComponentCreator('/SDET/Robot-Framework', 'a4e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Security-Testing/Browser-Cookies',
        component: ComponentCreator('/SDET/Security-Testing/Browser-Cookies', 'fcf'),
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
        path: '/SDET/Servlet/Introduction',
        component: ComponentCreator('/SDET/Servlet/Introduction', '3e4'),
        exact: true
      },
      {
        path: '/SDET/Skills',
        component: ComponentCreator('/SDET/Skills', '3e7'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/Assertions',
        component: ComponentCreator('/SDET/SoapUI/Assertions', 'aa1'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/Intro',
        component: ComponentCreator('/SDET/SoapUI/Intro', '005'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/project',
        component: ComponentCreator('/SDET/SoapUI/project', '506'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/Properties',
        component: ComponentCreator('/SDET/SoapUI/Properties', '141'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/Soap',
        component: ComponentCreator('/SDET/SoapUI/Soap', '383'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/SoapUI/SoapAutomation',
        component: ComponentCreator('/SDET/SoapUI/SoapAutomation', '3e4'),
        exact: true
      },
      {
        path: '/SDET/SoapUI/static/SoapUI',
        component: ComponentCreator('/SDET/SoapUI/static/SoapUI', '2c5'),
        exact: true
      },
      {
        path: '/SDET/SoapUI/WSDL',
        component: ComponentCreator('/SDET/SoapUI/WSDL', '95e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Adhoc-vs-Exploretory',
        component: ComponentCreator('/SDET/Testing-Concepts/Adhoc-vs-Exploretory', '6be'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Blackbox-vs-Whitebox',
        component: ComponentCreator('/SDET/Testing-Concepts/Blackbox-vs-Whitebox', '8c9'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Component-vs-Integration-Testing',
        component: ComponentCreator('/SDET/Testing-Concepts/Component-vs-Integration-Testing', '685'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Defect-LifeCycle',
        component: ComponentCreator('/SDET/Testing-Concepts/Defect-LifeCycle', 'f6c'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Functional-vs-NonFunctional',
        component: ComponentCreator('/SDET/Testing-Concepts/Functional-vs-NonFunctional', '515'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Load-vs-Stress-Testing',
        component: ComponentCreator('/SDET/Testing-Concepts/Load-vs-Stress-Testing', 'fb3'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Priority-vs-severity',
        component: ComponentCreator('/SDET/Testing-Concepts/Priority-vs-severity', 'b2c'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Retesting-vs-Regression',
        component: ComponentCreator('/SDET/Testing-Concepts/Retesting-vs-Regression', '4b0'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/SDLC-vs-STLC',
        component: ComponentCreator('/SDET/Testing-Concepts/SDLC-vs-STLC', '66e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Smoke-vs-Sanity',
        component: ComponentCreator('/SDET/Testing-Concepts/Smoke-vs-Sanity', '9b6'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Test-Cases',
        component: ComponentCreator('/SDET/Testing-Concepts/Test-Cases', '769'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Test-Pyramid',
        component: ComponentCreator('/SDET/Testing-Concepts/Test-Pyramid', '4aa'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/TestCase',
        component: ComponentCreator('/SDET/Testing-Concepts/TestCase', '02c'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Testing-levels',
        component: ComponentCreator('/SDET/Testing-Concepts/Testing-levels', 'a1f'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/TestPlan',
        component: ComponentCreator('/SDET/Testing-Concepts/TestPlan', '2bd'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Traceability-Matrix',
        component: ComponentCreator('/SDET/Testing-Concepts/Traceability-Matrix', 'd93'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Testing-Concepts/Verification-vs-Validation',
        component: ComponentCreator('/SDET/Testing-Concepts/Verification-vs-Validation', '4e9'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Workout/plan',
        component: ComponentCreator('/SDET/Workout/plan', '323'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/',
        component: ComponentCreator('/SDET/Xray/', '19e'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/static/Xray',
        component: ComponentCreator('/SDET/Xray/static/Xray', 'ddb'),
        exact: true
      },
      {
        path: '/SDET/Xray/Terminology',
        component: ComponentCreator('/SDET/Xray/Terminology', '822'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/TestCase',
        component: ComponentCreator('/SDET/Xray/TestCase', '484'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/TestCoverage',
        component: ComponentCreator('/SDET/Xray/TestCoverage', '224'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/TestExecution',
        component: ComponentCreator('/SDET/Xray/TestExecution', '99b'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/TestPlan',
        component: ComponentCreator('/SDET/Xray/TestPlan', 'c3f'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Xray/XrayReports',
        component: ComponentCreator('/SDET/Xray/XrayReports', '32d'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Zephyr/',
        component: ComponentCreator('/SDET/Zephyr/', 'a00'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Zephyr/Zephyr-Reports',
        component: ComponentCreator('/SDET/Zephyr/Zephyr-Reports', '9ef'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Zephyr/Zephyr-TestCase',
        component: ComponentCreator('/SDET/Zephyr/Zephyr-TestCase', 'd8a'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Zephyr/Zephyr-TestCycle',
        component: ComponentCreator('/SDET/Zephyr/Zephyr-TestCycle', 'e13'),
        exact: true,
        sidebar: "SDETSidebar"
      },
      {
        path: '/SDET/Zephyr/Zephyr-TestPlan',
        component: ComponentCreator('/SDET/Zephyr/Zephyr-TestPlan', '58e'),
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
