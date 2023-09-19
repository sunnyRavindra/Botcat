const sidebars = {
  SDETSidebar: [
    {
      type: 'category',
      label: 'Selenium',
      items: [
        'SDET/Selenium/Introduction',
        'SDET/Selenium/Grid',
        'SDET/Selenium/BrowserOptions',
        {
          type: 'category',
          label: 'Selenium Reference',
          items: [
          {
            type: 'link',
            label: 'Selenium Official', 
            href: 'https://www.selenium.dev/'
          },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Docker',
      items: [
        'SDET/Docker/Docker-Introduction',
        'SDET/Docker/Docker-Commands',
        'SDET/Docker/ContainerInteractions',
        'SDET/Docker/Compose',
        {
          type: 'category',
          label: 'Reference',
          items: [
          {
            type: 'link',
            label: 'Docker Official', 
            href: 'https://www.selenium.dev/'
          },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Java',
      items: [
        'SDET/Java/JavaPackage',
        {
          type: 'category',
          label: 'Reference',
          items: [
          {
            type: 'link',
            label: 'Java Official', 
            href: 'https://www.selenium.dev/'
          },
          ],
        },
      ],
    }
  ],
};

module.exports = sidebars;
