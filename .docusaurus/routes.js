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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b29'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '37a'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'b00'),
        exact: true
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', 'df2'),
        exact: true
      },
      {
        path: '/docs/assets/docusaurus-asset-example-banner.png',
        component: ComponentCreator('/docs/assets/docusaurus-asset-example-banner.png', '0d3'),
        exact: true
      },
      {
        path: '/docs/Automation/',
        component: ComponentCreator('/docs/Automation/', 'b33'),
        exact: true
      },
      {
        path: '/docs/Automation/Introduction',
        component: ComponentCreator('/docs/Automation/Introduction', '996'),
        exact: true
      },
      {
        path: '/docs/Aws/',
        component: ComponentCreator('/docs/Aws/', '1b4'),
        exact: true
      },
      {
        path: '/docs/Aws/ Region Selection Criteria',
        component: ComponentCreator('/docs/Aws/ Region Selection Criteria', 'ba8'),
        exact: true
      },
      {
        path: '/docs/Aws/Attribute-based access control (ABAC)',
        component: ComponentCreator('/docs/Aws/Attribute-based access control (ABAC)', '616'),
        exact: true
      },
      {
        path: '/docs/Aws/AWS Account Structure',
        component: ComponentCreator('/docs/Aws/AWS Account Structure', '806'),
        exact: true
      },
      {
        path: '/docs/Aws/AWS Local Zones',
        component: ComponentCreator('/docs/Aws/AWS Local Zones', '212'),
        exact: true
      },
      {
        path: '/docs/Aws/AWS Transit Gateway',
        component: ComponentCreator('/docs/Aws/AWS Transit Gateway', '509'),
        exact: true
      },
      {
        path: '/docs/Aws/AWS World Wide Infrastructure',
        component: ComponentCreator('/docs/Aws/AWS World Wide Infrastructure', '3b7'),
        exact: true
      },
      {
        path: '/docs/Aws/AWSD',
        component: ComponentCreator('/docs/Aws/AWSD', 'ef7'),
        exact: true
      },
      {
        path: '/docs/Aws/Cloud Computing',
        component: ComponentCreator('/docs/Aws/Cloud Computing', '626'),
        exact: true
      },
      {
        path: '/docs/Aws/IAM',
        component: ComponentCreator('/docs/Aws/IAM', '8dd'),
        exact: true
      },
      {
        path: '/docs/Aws/IAM Identity Center',
        component: ComponentCreator('/docs/Aws/IAM Identity Center', 'a89'),
        exact: true
      },
      {
        path: '/docs/Aws/IAM Policy',
        component: ComponentCreator('/docs/Aws/IAM Policy', 'a01'),
        exact: true
      },
      {
        path: '/docs/Aws/IAM Roles',
        component: ComponentCreator('/docs/Aws/IAM Roles', 'be6'),
        exact: true
      },
      {
        path: '/docs/Aws/My AWS Approach',
        component: ComponentCreator('/docs/Aws/My AWS Approach', '026'),
        exact: true
      },
      {
        path: '/docs/Aws/StepFunctions/Basics/',
        component: ComponentCreator('/docs/Aws/StepFunctions/Basics/', '690'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/Basics/Terminology',
        component: ComponentCreator('/docs/Aws/StepFunctions/Basics/Terminology', '353'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/Basics/Usecases',
        component: ComponentCreator('/docs/Aws/StepFunctions/Basics/Usecases', 'd64'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/Basics/Workflows',
        component: ComponentCreator('/docs/Aws/StepFunctions/Basics/Workflows', '54d'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/CardProcessWorkflow/Create-State-Machine',
        component: ComponentCreator('/docs/Aws/StepFunctions/CardProcessWorkflow/Create-State-Machine', 'f70'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/CardProcessWorkflow/ServiceIntegration',
        component: ComponentCreator('/docs/Aws/StepFunctions/CardProcessWorkflow/ServiceIntegration', '47d'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/Introduction',
        component: ComponentCreator('/docs/Aws/StepFunctions/Introduction', '826'),
        exact: true,
        sidebar: "StepFunctionsSidebar"
      },
      {
        path: '/docs/Aws/StepFunctions/StepFunctionsexcalidraw',
        component: ComponentCreator('/docs/Aws/StepFunctions/StepFunctionsexcalidraw', '11a'),
        exact: true
      },
      {
        path: '/docs/Devops/',
        component: ComponentCreator('/docs/Devops/', '5df'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker Compose/',
        component: ComponentCreator('/docs/Devops/Docker Compose/', 'b4a'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/',
        component: ComponentCreator('/docs/Devops/Docker/', 'c15'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Build Docker Image',
        component: ComponentCreator('/docs/Devops/Docker/Build Docker Image', '198'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker 1',
        component: ComponentCreator('/docs/Devops/Docker/Docker 1', '0a9'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Basics',
        component: ComponentCreator('/docs/Devops/Docker/Docker Basics', '790'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Bind Mounts',
        component: ComponentCreator('/docs/Devops/Docker/Docker Bind Mounts', 'c19'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker DevEnv Setup',
        component: ComponentCreator('/docs/Devops/Docker/Docker DevEnv Setup', '01f'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Layer Caching',
        component: ComponentCreator('/docs/Devops/Docker/Docker Layer Caching', 'ada'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Multi Stage Build',
        component: ComponentCreator('/docs/Devops/Docker/Docker Multi Stage Build', '502'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker MySQL Application',
        component: ComponentCreator('/docs/Devops/Docker/Docker MySQL Application', '76f'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Networking',
        component: ComponentCreator('/docs/Devops/Docker/Docker Networking', '4ba'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Nextjs Application',
        component: ComponentCreator('/docs/Devops/Docker/Docker Nextjs Application', 'cbe'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Nicolaka Netshoot',
        component: ComponentCreator('/docs/Devops/Docker/Docker Nicolaka Netshoot', '15f'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Secrets',
        component: ComponentCreator('/docs/Devops/Docker/Docker Secrets', '505'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Docker Volumes',
        component: ComponentCreator('/docs/Devops/Docker/Docker Volumes', '3a0'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/DockerFiles/Docker Ignore file',
        component: ComponentCreator('/docs/Devops/Docker/DockerFiles/Docker Ignore file', '0f2'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/DockerFiles/DockerFile',
        component: ComponentCreator('/docs/Devops/Docker/DockerFiles/DockerFile', '132'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/DockerFiles/Nextjs Docker File',
        component: ComponentCreator('/docs/Devops/Docker/DockerFiles/Nextjs Docker File', '67a'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/DockerHub',
        component: ComponentCreator('/docs/Devops/Docker/DockerHub', '805'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/My Used Docker Commands',
        component: ComponentCreator('/docs/Devops/Docker/My Used Docker Commands', '42e'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Run Commonds Inside Container',
        component: ComponentCreator('/docs/Devops/Docker/Run Commonds Inside Container', 'd58'),
        exact: true
      },
      {
        path: '/docs/Devops/Docker/Start Docker Container',
        component: ComponentCreator('/docs/Devops/Docker/Start Docker Container', '3bf'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/',
        component: ComponentCreator('/docs/Devops/Git/', '673'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git add except __',
        component: ComponentCreator('/docs/Devops/Git/Git add except __', 'fd3'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Commands',
        component: ComponentCreator('/docs/Devops/Git/Git Commands', 'fbd'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Commits list',
        component: ComponentCreator('/docs/Devops/Git/Git Commits list', 'bc3'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Divergent Branch',
        component: ComponentCreator('/docs/Devops/Git/Git Divergent Branch', '90a'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git fast-forward',
        component: ComponentCreator('/docs/Devops/Git/Git fast-forward', '1f8'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Ignore',
        component: ComponentCreator('/docs/Devops/Git/Git Ignore', '77c'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git merge',
        component: ComponentCreator('/docs/Devops/Git/Git merge', '87c'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Previous Commits',
        component: ComponentCreator('/docs/Devops/Git/Git Previous Commits', '80a'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git rebase',
        component: ComponentCreator('/docs/Devops/Git/Git rebase', 'bd3'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Remove Cache',
        component: ComponentCreator('/docs/Devops/Git/Git Remove Cache', '64a'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Show',
        component: ComponentCreator('/docs/Devops/Git/Git Show', 'a7d'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Squashing',
        component: ComponentCreator('/docs/Devops/Git/Git Squashing', '14b'),
        exact: true
      },
      {
        path: '/docs/Devops/Git/Git Unstage All Files',
        component: ComponentCreator('/docs/Devops/Git/Git Unstage All Files', 'ad6'),
        exact: true
      },
      {
        path: '/docs/Devops/Markdown/',
        component: ComponentCreator('/docs/Devops/Markdown/', '39c'),
        exact: true
      },
      {
        path: '/docs/Devops/Markdown/MDX',
        component: ComponentCreator('/docs/Devops/Markdown/MDX', 'ac2'),
        exact: true
      },
      {
        path: '/docs/Every Thing I Know/Everything I Know',
        component: ComponentCreator('/docs/Every Thing I Know/Everything I Know', 'f07'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/Drawing 2023-08-22 10.21.47.excalidraw',
        component: ComponentCreator('/docs/Excalidraw/Drawing 2023-08-22 10.21.47.excalidraw', 'a23'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/Drawing 2023-08-22 10.22.23.excalidraw',
        component: ComponentCreator('/docs/Excalidraw/Drawing 2023-08-22 10.22.23.excalidraw', '8df'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/Drawing 2023-08-23 14.07.32.excalidraw',
        component: ComponentCreator('/docs/Excalidraw/Drawing 2023-08-23 14.07.32.excalidraw', '578'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/QARoadMap.excalidraw',
        component: ComponentCreator('/docs/Excalidraw/QARoadMap.excalidraw', 'f7c'),
        exact: true
      },
      {
        path: '/docs/Excalidraw/Scripts/Downloaded/Elbow connectors',
        component: ComponentCreator('/docs/Excalidraw/Scripts/Downloaded/Elbow connectors', '0f5'),
        exact: true
      },
      {
        path: '/docs/Finnish/Introduction',
        component: ComponentCreator('/docs/Finnish/Introduction', '531'),
        exact: true,
        sidebar: "FinnishSidebar"
      },
      {
        path: '/docs/Frontend/',
        component: ComponentCreator('/docs/Frontend/', 'fde'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Build Tools/Parcel',
        component: ComponentCreator('/docs/Frontend/Frontend Build Tools/Parcel', '44a'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Build Tools/Rollup',
        component: ComponentCreator('/docs/Frontend/Frontend Build Tools/Rollup', 'e7b'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Build Tools/Vite',
        component: ComponentCreator('/docs/Frontend/Frontend Build Tools/Vite', 'c09'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Build Tools/webpack',
        component: ComponentCreator('/docs/Frontend/Frontend Build Tools/webpack', '678'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Concepts/ES modules',
        component: ComponentCreator('/docs/Frontend/Frontend Concepts/ES modules', 'fa4'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Extra Tools/Algolia',
        component: ComponentCreator('/docs/Frontend/Frontend Extra Tools/Algolia', 'aa8'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Extra Tools/Eslint',
        component: ComponentCreator('/docs/Frontend/Frontend Extra Tools/Eslint', '974'),
        exact: true
      },
      {
        path: '/docs/Frontend/Frontend Extra Tools/Prettier',
        component: ComponentCreator('/docs/Frontend/Frontend Extra Tools/Prettier', '0bb'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/',
        component: ComponentCreator('/docs/Frontend/Nextjs/', 'bda'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Client Components',
        component: ComponentCreator('/docs/Frontend/Nextjs/Client Components', 'b1f'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Create Nextjs App',
        component: ComponentCreator('/docs/Frontend/Nextjs/Create Nextjs App', '638'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/My Nextjs Approach',
        component: ComponentCreator('/docs/Frontend/Nextjs/My Nextjs Approach', 'f5b'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Application Guide',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Application Guide', '2c4'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Application Structure',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Application Structure', 'bab'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Basic Concepts',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Basic Concepts', '54c'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Client Components',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Client Components', '699'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Project Structure',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Project Structure', '1c3'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Server Components',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Server Components', '5e3'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs Thinking in Server Components',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs Thinking in Server Components', 'c89'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs to ghpages',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs to ghpages', 'ea2'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextjs vs Remix',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextjs vs Remix', '695'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Nextra',
        component: ComponentCreator('/docs/Frontend/Nextjs/Nextra', '803'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/NpmIgnore file',
        component: ComponentCreator('/docs/Frontend/Nextjs/NpmIgnore file', '0eb'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Remix',
        component: ComponentCreator('/docs/Frontend/Nextjs/Remix', '033'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Run Nextjs App',
        component: ComponentCreator('/docs/Frontend/Nextjs/Run Nextjs App', '344'),
        exact: true
      },
      {
        path: '/docs/Frontend/Nextjs/Server Components',
        component: ComponentCreator('/docs/Frontend/Nextjs/Server Components', 'ab8'),
        exact: true
      },
      {
        path: '/docs/Frontend/React/',
        component: ComponentCreator('/docs/Frontend/React/', 'c10'),
        exact: true
      },
      {
        path: '/docs/Frontend/React/My React Approach',
        component: ComponentCreator('/docs/Frontend/React/My React Approach', '89e'),
        exact: true
      },
      {
        path: '/docs/Frontend/React/React Native',
        component: ComponentCreator('/docs/Frontend/React/React Native', '897'),
        exact: true
      },
      {
        path: '/docs/Frontend/React/React Quick Start',
        component: ComponentCreator('/docs/Frontend/React/React Quick Start', '157'),
        exact: true
      },
      {
        path: '/docs/Frontend/Vercel/Deploy Nextjs to Vercel',
        component: ComponentCreator('/docs/Frontend/Vercel/Deploy Nextjs to Vercel', '186'),
        exact: true
      },
      {
        path: '/docs/Frontend/Vercel/Vercel Introuction',
        component: ComponentCreator('/docs/Frontend/Vercel/Vercel Introuction', '23a'),
        exact: true
      },
      {
        path: '/docs/IDE/Emacs/',
        component: ComponentCreator('/docs/IDE/Emacs/', '3a1'),
        exact: true
      },
      {
        path: '/docs/Language/Vocabulary/',
        component: ComponentCreator('/docs/Language/Vocabulary/', 'b7e'),
        exact: true
      },
      {
        path: '/docs/Leetcode/Introduction',
        component: ComponentCreator('/docs/Leetcode/Introduction', 'fa5'),
        exact: true,
        sidebar: "LeetcodeSidebar"
      },
      {
        path: '/docs/Linux/',
        component: ComponentCreator('/docs/Linux/', '33a'),
        exact: true
      },
      {
        path: '/docs/Linux/Bash Script/Bash',
        component: ComponentCreator('/docs/Linux/Bash Script/Bash', '830'),
        exact: true
      },
      {
        path: '/docs/Linux/Bash Script/Bash Commands',
        component: ComponentCreator('/docs/Linux/Bash Script/Bash Commands', '10b'),
        exact: true
      },
      {
        path: '/docs/Linux/Bash Script/Bash vs Sh',
        component: ComponentCreator('/docs/Linux/Bash Script/Bash vs Sh', 'b80'),
        exact: true
      },
      {
        path: '/docs/Linux/Bash Script/Passing Parameters In Bash',
        component: ComponentCreator('/docs/Linux/Bash Script/Passing Parameters In Bash', 'cb8'),
        exact: true
      },
      {
        path: '/docs/Linux/Chroot',
        component: ComponentCreator('/docs/Linux/Chroot', '2ba'),
        exact: true
      },
      {
        path: '/docs/Linux/Linux Namespaces',
        component: ComponentCreator('/docs/Linux/Linux Namespaces', 'c6d'),
        exact: true
      },
      {
        path: '/docs/Linux/My Arch Rice/',
        component: ComponentCreator('/docs/Linux/My Arch Rice/', '24c'),
        exact: true
      },
      {
        path: '/docs/Linux/My Arch Rice/Asahi Linux Setup',
        component: ComponentCreator('/docs/Linux/My Arch Rice/Asahi Linux Setup', 'c90'),
        exact: true
      },
      {
        path: '/docs/Linux/My Arch Rice/Install Docker on Arch Linux',
        component: ComponentCreator('/docs/Linux/My Arch Rice/Install Docker on Arch Linux', 'a2d'),
        exact: true
      },
      {
        path: '/docs/Linux/My Arch Rice/Install Touch pad config',
        component: ComponentCreator('/docs/Linux/My Arch Rice/Install Touch pad config', 'b06'),
        exact: true
      },
      {
        path: '/docs/Linux/My Arch Rice/Install Yay',
        component: ComponentCreator('/docs/Linux/My Arch Rice/Install Yay', '92d'),
        exact: true
      },
      {
        path: '/docs/Linux/zsh/Sub Shell Output',
        component: ComponentCreator('/docs/Linux/zsh/Sub Shell Output', 'f73'),
        exact: true
      },
      {
        path: '/docs/Linux/zsh/zshrc',
        component: ComponentCreator('/docs/Linux/zsh/zshrc', '730'),
        exact: true
      },
      {
        path: '/docs/ManualTesting/Drawing 2023-08-24 20.24.52.excalidraw',
        component: ComponentCreator('/docs/ManualTesting/Drawing 2023-08-24 20.24.52.excalidraw', '622'),
        exact: true
      },
      {
        path: '/docs/ManualTesting/Introduction',
        component: ComponentCreator('/docs/ManualTesting/Introduction', '2ab'),
        exact: true,
        sidebar: "ApiTestingSidebar"
      },
      {
        path: '/docs/ManualTesting/Testing Types',
        component: ComponentCreator('/docs/ManualTesting/Testing Types', 'c04'),
        exact: true
      },
      {
        path: '/docs/Mermaid/',
        component: ComponentCreator('/docs/Mermaid/', '4af'),
        exact: true
      },
      {
        path: '/docs/My Certifications/',
        component: ComponentCreator('/docs/My Certifications/', 'abd'),
        exact: true
      },
      {
        path: '/docs/My Certifications/Certified AWS Solutions Architect Professional',
        component: ComponentCreator('/docs/My Certifications/Certified AWS Solutions Architect Professional', '37b'),
        exact: true
      },
      {
        path: '/docs/My Social Docs/Banner',
        component: ComponentCreator('/docs/My Social Docs/Banner', 'bf1'),
        exact: true
      },
      {
        path: '/docs/My Social Docs/Main',
        component: ComponentCreator('/docs/My Social Docs/Main', '8d8'),
        exact: true
      },
      {
        path: '/docs/Obsidian/',
        component: ComponentCreator('/docs/Obsidian/', '6d1'),
        exact: true
      },
      {
        path: '/docs/Obsidian/Organizing notes in Obsidian',
        component: ComponentCreator('/docs/Obsidian/Organizing notes in Obsidian', 'e46'),
        exact: true
      },
      {
        path: '/docs/Obsidian/Zettelkasten Approach',
        component: ComponentCreator('/docs/Obsidian/Zettelkasten Approach', '6ba'),
        exact: true
      },
      {
        path: '/docs/Selenium/Introduction',
        component: ComponentCreator('/docs/Selenium/Introduction', '7f7'),
        exact: true,
        sidebar: "SeleniumSidebar"
      },
      {
        path: '/docs/Skills/My Skills',
        component: ComponentCreator('/docs/Skills/My Skills', 'e72'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '7ef'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '2c8'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f0d'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'ca5'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '508'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f90'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'd64'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '16a'),
        exact: true
      },
      {
        path: '/docs/Untitled',
        component: ComponentCreator('/docs/Untitled', 'c2d'),
        exact: true
      },
      {
        path: '/docs/Untitled 1',
        component: ComponentCreator('/docs/Untitled 1', '550'),
        exact: true
      },
      {
        path: '/docs/Visual Personal Knowledge Management/Drawing 2023-07-30 10.05.42.excalidraw',
        component: ComponentCreator('/docs/Visual Personal Knowledge Management/Drawing 2023-07-30 10.05.42.excalidraw', 'eea'),
        exact: true
      },
      {
        path: '/docs/Visual Personal Knowledge Management/Excalidraw',
        component: ComponentCreator('/docs/Visual Personal Knowledge Management/Excalidraw', 'd3c'),
        exact: true
      },
      {
        path: '/docs/Visual Personal Knowledge Management/MidJourney/',
        component: ComponentCreator('/docs/Visual Personal Knowledge Management/MidJourney/', 'b5e'),
        exact: true
      },
      {
        path: '/docs/Work in Progress/Elastic Search',
        component: ComponentCreator('/docs/Work in Progress/Elastic Search', 'c47'),
        exact: true
      },
      {
        path: '/docs/Work in Progress/Observibility',
        component: ComponentCreator('/docs/Work in Progress/Observibility', 'b25'),
        exact: true
      },
      {
        path: '/docs/Xassets/docusaurus-asset-example-banner.png',
        component: ComponentCreator('/docs/Xassets/docusaurus-asset-example-banner.png', 'eed'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
