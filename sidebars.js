const sidebars = {
  SDETSidebar: [
    {
      type: 'category',
      label: 'Selenium',
      items: [
        'SDET/Selenium/Selenium',
        'SDET/Selenium/Grid',
        'SDET/Selenium/BrowserOptions',
        {
          type: 'category',
          label: 'Reference',
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
        'SDET/Docker/Introduction',
        {
          type: 'category',
          label: 'Reference',
          items: [
          {
            type: 'link',
            label: 'Selenium Official', 
            href: 'https://www.selenium.dev/'
          },
          ],
        },
      ],
    }
  ],
};

module.exports = sidebars;
