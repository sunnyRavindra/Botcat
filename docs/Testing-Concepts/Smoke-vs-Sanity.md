---
title: Smoke vs Sanity
---
### Smoke Testing
- **Purpose:** Smoke testing, also known as build verification testing, is a preliminary test that checks whether the software build is stable enough for more comprehensive testing. It helps ensure that the critical functionalities of the application work without major issues.
- **Scope:** Smoke tests cover a basic set of test cases that exercise core features and critical paths of the software. These tests do not aim to explore all functionalities but focus on essential functionality.
- **Execution Time:** Smoke tests are quick to execute and are typically run after a new build is deployed. If a build fails the smoke test, it indicates that there are severe defects that need immediate attention.

### Sanity Testing
- **Purpose:** Sanity testing is a subset of regression testing that focuses on verifying that specific code changes or new features have not adversely affected the existing, stable functionalities of the application. It ensures that the recent modifications have not introduced unexpected issues.
- **Scope:** Sanity tests are narrower in scope than comprehensive regression tests. They concentrate on the areas of the application affected by recent changes or enhancements.
- **Execution Time:** Sanity tests are relatively quick and are typically performed during the later stages of the testing cycle, after more extensive testing has taken place.

In summary, both smoke testing and sanity testing are important types of software testing, but they serve different purposes and are conducted at different stages of the testing process. Smoke testing determines whether a newly built application is fit for further testing, while sanity testing verifies that specific changes or new features have not broken the existing, stable parts of the application. Both testing types are designed to catch critical issues early in the development cycle.
