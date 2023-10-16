---
title: Terminology
---
### Terminology

|Xray|ISTQB|Description|   |
|---|---|---|---|
|**Test**|Test|A test case. It may either be manual or automated, composed of multiple steps, actions and expected results.|test case, test scenario, test template|
|**Precondition**|Pre-Condition|Initial conditions that must be assured before the execution of the Test's own steps. A Pre-Condition may be used by multiple Tests.||
|**Test Set**|Test Set|A group of tests, organized in some logical way. A test may belong to multiple Test Sets.|test group, test suite|
|**Test Plan**|Test Plan|A "formal" plan of the tests intended to be executed for a given version.||
|**Test Execution**|Test Execution|An assignable, "schedulable" task to execute one or more tests for a given version/revision along with its results.|test cycle|
|**Sub-Test Execution**|Sub-Test Execution|A Sub-Test Execution has the same functionalities as the [Test Execution](http://confluence.xpand-addons.com/display/XRAY/Test+Execution) issue type. The difference between them is that the Sub-Test Execution is a sub-task and can be created in a requirement's context. Creating a Test Execution as a sub-task from within the requirement issue screen will provide the user the ability to track executions on the Agile board.||
|**Test Run**|-|A specific run of a test. An instance of the test containing the execution status and a snapshot of the test specification. Whenever a user adds a Test to a Test Execution, a test run is created internally within the Test Execution context. A test may have multiple test runs.||
|**Coverable Issue**|Story, requirement, Bug, ....|All issues whose Issue Type is configured as being a Coverable Issue Type in [Project Settings: Test Coverage](https://docs.getxray.app/display/XRAYCLOUD/Project+Settings%3A+Test+Coverage).||
|**Test Status**|-|The calculated test coverage status of a Test, for some scope (e.g., version/test plan). In the context of a Test Execution, the recorded status of a Test Run.|..|
|**Requirement**|Story, Requirement, ....|Something that you expect from the system; a feature. A good requirement explains how the system should behave and its purpose.||
|**Test Repository**|-|The full list of tests within a project. In Xray, the test repository is simply composed of all Test issues.||
|**Test Strategy**|-|The requirements you want to validate, how to validate them, use of either manual or automated tests, the resource allocation, etc.||
|**Testing Lifecycle**|-|After requirement specification and revision, the testing lifecyce involves test **planning**, test **designing**, test **execution** and test **reporting.**||