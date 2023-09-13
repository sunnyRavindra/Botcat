---
title : Playwright
---

Reference `https://playwright.dev/`

1. Cross-browser,Cross-platform, Mobile, Web and API's automation using TypeScript, JavaScript, Python, .NET and Java.
2. Supports Auto-wait, Assertions for Dynammic pages (like react pages), Tracing using Test retry stratagy and ditching Same origin policy.
3. Multipple Tabs multiple orrigins and multiple users with multiple test data simulation, Dorect interation interaction the browser by piercing the shadow DOM.
4. Seperate browser context for each test, Saving authentication state,

Tools:
1. Codegen -> Record tests.
2.Playwright inspector. -> Inspect pages.
3. Trace Viewer. Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.

Installation Guide: https://playwright.dev/docs/intro#installing-playwright

```Javascript
npx playwright test //Run tests
npx playwright test --ui //Run tests with debugging
npx playwright show-report //Show test resuts
```

#### 
```JavaScript
import { test, expect } from '@playwright/test'; //Basic import

```

```Test
test('This is the first test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
```
