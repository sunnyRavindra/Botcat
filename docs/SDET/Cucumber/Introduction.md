---
title: Cucumber Intro
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
plugin = {"pretty", "html:target/cucumber.html" }
)

public class smokeRunner extends AbstractTestNGCucumberTests {}
```

### Tags 

```Cucumber@
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

