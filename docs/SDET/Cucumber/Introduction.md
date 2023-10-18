---
title: Cucumber Intro
---

Cucumber is the BDD Framework for running automated tests. Cucumber does not Automate your testcases!

When my tests are already automated and can run, what cucumber does? 
Data driven, Parameterization, Execution controls, Hooks, Reports, Automation utilities and many more….
When you say automated tests, what type of Automation testcases does cucumber Support?
Any Test (Web, Mobile, API, Unit Testing) which is written in Java/Ruby supported by Cucumber

How cucumber is unique and Best from other Test Frameworks (Keyword, Datadriven,Hybrid) in the Market?
Because Testcases/Requirements are defined with on BDD methodology (Gherkin syntax)
No coding is required to implement Framework functionalities


### Gherkin
a Business Readable, Domain Specific Language  that lets you describe software's behavior.
Example: Pop up messaged is displayed when buttons are clicked and errors are gone

### Cucumber Terminologies:

Keywords Used in Cucumber: Scenario, Feature, Feature file, Scenario outline, Step Definition

Scenarios:
In Cucumber Testcases are represented as Scenarios.
Scenarios contain Steps which are equivalent to test Steps and use the following keywords (Gherkin syntax) to denote them: Given, When, Then, But, and And (case sensitive).
	•	Given: Preconditions are mentioned in the Given keyword
	•	When: The purpose of the When Steps is to describe the user action.
	•	Then: The purpose of Then Steps is to observe the expected output. The observations should be related to the business value/benefit of your Feature description.

When we specify a business requirement, sometimes there are multiple pre-conditions, user actions, and expected outcomes

we are going to add one more Scenario and will use the And and But keywords:

	•	And: This is used for statements that are an addition to the previous Steps and represent positive statements.
	•	But: This is used for statements that are an addition to previous Steps and represent negative statements.





Feature and Feature File:
Feature represents Business requirement.
Feature File acts as a Test Suite which consists of all Scenarios.

In Cucumber, Feature files contain Scenarios. We can simply create feature file with. feature extension
Scenarios belonging to specific area of Application will be grouped into one Feature file

The text that immediately follows the Feature keyword, and is in the same line, is the Title of the Feature file
 Feature file should contain either Scenario or Scenario Outline. The naming conventions for Feature files should be lowercase with. feature extension 

 Feature: Credit card payment
  In order to test Credit Card Payment functionality
  As a CC user
  I want to complete the payment through online

  Scenario: Make Minimum Due payment 
    Given user is on Pay credit card page
    Then user fills all details and select Minimum amount option
    And User clicks on Pay button
Then Credit Card confirmation page is displayed

  Scenario: Pay Statement Balance 
    Given user is on Pay credit card page
    Then user fills all details and select Statement Balance option
    And User clicks on Pay button
Then Credit Card confirmation page is displayed


  Scenario: Enter another Amount as 0
    Given user is on Pay credit card page
    Then user fills all details and select other Amount and enter 0
    And User clicks on Pay button
Then Credit Card confirmation page is not displayed
But error message is displayed


