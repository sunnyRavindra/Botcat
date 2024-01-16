---
title: Playwright
---
### Resilient • No flaky tests

**Auto-wait.** Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - the primary cause of flaky tests.

**Web-first assertions.** Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.

**Multiple everything.** Test scenarios that span multiple **tabs**, multiple **origins** and multiple **users**. Create scenarios with different contexts for different users and run them against your server, all in one test.

**Test frames, pierce Shadow DOM.** Playwright selectors pierce shadow DOM and allow entering frames seamlessly.

**Log in once.** Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.

### Powerful Tooling

**[Codegen.](https://playwright.dev/docs/codegen)** Generate tests by recording your actions. Save them into any language.

**[Playwright inspector.](https://playwright.dev/docs/debug#playwright-inspector)** Inspect page, generate selectors, step through the test execution, see click points, explore execution logs.

**[Trace Viewer.](https://playwright.dev/docs/trace-viewer-intro)** Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.

### Important Commands
```
yarn create playwright // Create Project
yarn playwright test // Run Test
yarn playwright show-report // Run Report Server
yarn playwright test --ui // Debut test in UI mode
yarn playwright test --project webkit --project firefox # Overrride Browser
yarn playwright test tests/todo-page/ tests/landing-page/ # Run Specific tests
yarn playwright test landing login # run test containing landing and login in its name
npx playwright test --debug
npx playwright test example.spec.ts:10 --debug # Debug from a specific line
```

### Basic Test 
```Typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {  
await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {  
await page.goto('https://playwright.dev/');
await page.getByRole('link', { name: 'Get started' }).click();
await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

### Locator Actions
|Action|Description|
|---|---|
|[locator.check()](https://playwright.dev/docs/api/class-locator#locator-check)|Check the input checkbox|
|[locator.click()](https://playwright.dev/docs/api/class-locator#locator-click)|Click the element|
|[locator.uncheck()](https://playwright.dev/docs/api/class-locator#locator-uncheck)|Uncheck the input checkbox|
|[locator.hover()](https://playwright.dev/docs/api/class-locator#locator-hover)|Hover mouse over the element|
|[locator.fill()](https://playwright.dev/docs/api/class-locator#locator-fill)|Fill the form field, input text|
|[locator.focus()](https://playwright.dev/docs/api/class-locator#locator-focus)|Focus the element|
|[locator.press()](https://playwright.dev/docs/api/class-locator#locator-press)|Press single key|
|[locator.setInputFiles()](https://playwright.dev/docs/api/class-locator#locator-set-input-files)|Pick files to upload|
|[locator.selectOption()](https://playwright.dev/docs/api/class-locator#locator-select-option)|Select option in the drop down|

### Code 
```
expect(success).toBeTruthy(); # `toEqual`, `toContain`, `toBeTruthy`
await expect(page).toHaveTitle(/Playwright/);
```

|Assertion|Description|
|---|---|
|[expect(locator).toBeChecked()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-checked)|Checkbox is checked|
|[expect(locator).toBeEnabled()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)|Control is enabled|
|[expect(locator).toBeVisible()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible)|Element is visible|
|[expect(locator).toContainText()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-contain-text)|Element contains text|
|[expect(locator).toHaveAttribute()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-attribute)|Element has attribute|
|[expect(locator).toHaveCount()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-count)|List of elements has given length|
|[expect(locator).toHaveText()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-text)|Element matches text|
|[expect(locator).toHaveValue()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-value)|Input element has value|
|[expect(page).toHaveTitle()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-title)|Page has title|
|[expect(page).toHaveURL()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-url)|Page has URL|
### Hooks 
`test.beforeEach` and `test.afterEach` which are executed before/after each test. Other hooks include the `test.beforeAll` and `test.afterAll`

### Codegen
```
npx playwright codegen demo.playwright.dev/todomvc
```

### Trace Viewer
```
npx playwright test --trace on
```

### Test Configuration
```Typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:3000',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

|Option|Description|
|---|---|
|[testConfig.forbidOnly](https://playwright.dev/docs/api/class-testconfig#test-config-forbid-only)|Whether to exit with an error if any tests are marked as `test.only`. Useful on CI.|
|[testConfig.fullyParallel](https://playwright.dev/docs/api/class-testconfig#test-config-fully-parallel)|have all tests in all files to run in parallel. See [/Parallelism and sharding](https://playwright.dev/docs/test-parallel) for more details.|
|[testConfig.projects](https://playwright.dev/docs/api/class-testconfig#test-config-projects)|Run tests in multiple configurations or on multiple browsers|
|[testConfig.reporter](https://playwright.dev/docs/api/class-testconfig#test-config-reporter)|Reporter to use. See [Test Reporters](https://playwright.dev/docs/test-reporters) to learn more about which reporters are available.|
|[testConfig.retries](https://playwright.dev/docs/api/class-testconfig#test-config-retries)|The maximum number of retry attempts per test. See [Test Retries](https://playwright.dev/docs/test-retries) to learn more about retries.|
|[testConfig.testDir](https://playwright.dev/docs/api/class-testconfig#test-config-test-dir)|Directory with the test files.|
|[testConfig.use](https://playwright.dev/docs/api/class-testconfig#test-config-use)|Options with `use{}`|
|[testConfig.webServer](https://playwright.dev/docs/api/class-testconfig#test-config-web-server)|To launch a server during the tests, use the `webServer` option|
|[testConfig.workers](https://playwright.dev/docs/api/class-testconfig#test-config-workers)|The maximum number of concurrent worker processes to use for parallelizing tests. Can also be set as percentage of logical CPU cores, e.g. `'50%'.`. See [/Parallelism and sharding](https://playwright.dev/docs/test-parallel) for more details.|

### Save Authentication state
https://playwright.dev/docs/auth

### Annotation 
```
test.only('focus this test', async ({ page }) => {  // Run only focused tests in the entire project.});
```

```
test.skip('skip this test', async ({ page }) => {  // This test is not run});
```

```
test('skip this test', async ({ page, browserName }) => {  test.skip(browserName === 'firefox', 'Still working on it');});
```

```
test('skip this test', async ({ page, browserName }) => {  test.skip(browserName === 'firefox', 'Still working on it');});
```

### Groups
```
import { test, expect } from '@playwright/test';test.describe('two tests', () => {  test('one', async ({ page }) => {    // ...  });  test('two', async ({ page }) => {    // ...  });});
```

### Tags
```
import { test, expect } from '@playwright/test';test('Test login page @fast', async ({ page }) => {  // ...});test('Test full report @slow', async ({ page }) => {  // ...});
```

```
npx playwright test --grep @fast
npx playwright test --grep-invert @slow
npx playwright test --grep "@fast|@slow"
```

### Conditional running tests