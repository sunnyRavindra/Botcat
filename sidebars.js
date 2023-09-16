const sidebars = {
  SDETSidebar: [
    {
      type: 'category',
      label: 'Selenium',
      // link: {type: 'doc', id: 'SDET/Selenium/Selenium'},
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
  ],
};

module.exports = sidebars;
