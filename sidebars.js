/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  StepFunctionsSidebar: [
    'Aws/StepFunctions/Introduction',
    {
      type: 'category',
      label: 'StepFunctions Basics',
      items: [
        'Aws/StepFunctions/Basics/Basics',
        'Aws/StepFunctions/Basics/Workflows',
        'Aws/StepFunctions/Basics/Usecases',
        'Aws/StepFunctions/Basics/Terminology',
      ],
    },
    {
      type: 'category',
      label: 'Card Processing Workflow',
      items: [
        'Aws/StepFunctions/CardProcessWorkflow/Create-State-Machine',
        'Aws/StepFunctions/CardProcessWorkflow/ServiceIntegration',
      ],
    },
  ],

  ManualTestingSidebar: [
    'ManualTesting/Introduction',
  ],

  SeleniumSidebar: [
    'Selenium/Introduction',
  ],

  LeetcodeSidebar: [
    'Leetcode/Introduction',
  ],

  FinnishSidebar: [
    'Finnish/Introduction',
  ],

};

module.exports = sidebars;
