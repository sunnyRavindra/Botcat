---
title: Cucumber Basics
---

Cucumber is the BDD Framework for running automated tests. Cucumber does not Automate your testcases!

### Gherkin
a Business Readable, Domain Specific Language  that lets you describe software's behavior.

### Cucumber Terminology 
- Scenario
- Feature
- Feature file
- Scenario outline
- Step Definition

### Feature
```Cucumber

Background:
  Start Browser

Feature: Test Suite 
  Scenario: test case
    Given step with int 1
    When step with string "two"
    Then step three
    And step four
    Then step five
    But step six

### Step Defination
```Cucumber
	@Given("step with int {int}")
	public void step_with_int(Integer int1) {
		System.out.println("Step 1");
	}

	@When("step with string {string}")
	public void step_with_string(String string) {
		System.out.println("Step 2");
	}

	@Then("step three")
	public void step_three() {
		System.out.println("Step 3");
	}

	@Then("step four")
	public void step_four() {
		System.out.println("Step 4");
	}

	@Then("step five")
	public void step_five() {
		System.out.println("Step 5");
	}

	@Then("step six")
	public void step_six() {
		System.out.println("Step 6");
	}
```

### Runner File
```Java
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
features = "src/test/java/features",
glue = "stepDefination",
monochrome = true,
tags = "@Smoke",
dryrun = true,
plugin = {"pretty", "html:target/cucumber.html","json:target/cucumber.json" }
)

public class smokeRunner extends AbstractTestNGCucumberTests {}
```

### Tags 

```Cucumber@
	@Prod
	Feature: Test Suite

  @Smoke
  Scenario: test case
    Given step with int 1

  @Regression
  Scenario: test case
    Given step with int 1

  @Smoke @Regression
  Scenario: test case
    Given step with int 1

# Runner Params
tags = "@Smoke"
tags = "@Smoke and @Regression"
tags = "@Smoke or @Regression"
tags = "not @Smoke"
```


### Hooks

```java
public class Hooks {

	@BeforeAll
	public static void beforeAll() {
		System.out.println("------------------");
		System.out.println("Before all");
		System.out.println("------------------");
	}

	@AfterAll
	public static void afterAll() {
		System.out.println("------------------");
		System.out.println("Before all");
		System.out.println("------------------");
	}

	@Before
	public void before_normal() {
		System.out.println("------------------");
		System.out.println("Before normal");
		System.out.println("------------------");
	}

	@After
	public void after_normal() {
		System.out.println("------------------");
		System.out.println("After normal");
		System.out.println("------------------");
	}

	@Before(order=0)
	public void before_normal_0() {
		System.out.println("------------------");
		System.out.println("Before normal 0");
		System.out.println("------------------");
	}

	@After(order=0)
	public void after_normal_0() {
		System.out.println("------------------");
		System.out.println("After normal 0");
		System.out.println("------------------");
	}

	@Before(order=1)
	public void before_normal_1() {
		System.out.println("------------------");
		System.out.println("Before normal 1");
		System.out.println("------------------");
	}

	@After(order=1)
	public void after_normal_1() {
		System.out.println("------------------");
		System.out.println("After normal 1");
		System.out.println("------------------");
	}

	@Before("@Smoke")
	public void beforeAllSmoke() {
		System.out.println("------------------");
		System.out.println("Before smoke");
		System.out.println("------------------");
	}

	@After("@Smoke")
	public void afterAllSmoke() {
		System.out.println("------------------");
		System.out.println("After smoke");
		System.out.println("------------------");
	}

		@AfterStep
	public void afterStep() {
		System.out.println("------------------");
		System.out.println("After step");
		System.out.println("------------------");
	}

	@BeforeStep
	public void beforeStep() {
		System.out.println("------------------");
		System.out.println("Before step");
		System.out.println("------------------");
	}
}
```

Running Failed steps in Cucuber

Running from Terminal 

Running from Terminal with Cucumber Options


