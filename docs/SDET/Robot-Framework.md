---
title: Robot Framework
---

## Docs
- [Getting Started guide](https://docs.robotframework.org/docs)
- [Reference Documentation](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html)

## Installation 
- [Installation Instructions](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#installation-instructions)
- [Robot Libraries](https://docs.robotframework.org/docs/different_libraries/how_to_find_library)


### Selenium Library
- [Selenium Library Reference Documentation](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html)

### Selenium Keywords

- [Open Browser](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Open%20)
<iframe src="https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Open%20Browser" width="100%" height="800px" scrolling="no"></iframe>













## Basics
- [Why Robot Framework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#toc-entry-222)
<iframe src="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#why-robot-framework" width="100%" height="600px" scrolling="no"></iframe>

- [High Level Architecture](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#high-level-architecture)
<iframe src="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#high-level-architecture" width="100%" height="620px" scrolling="no"></iframe>

- [Creating Test Data](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax)

- [Serialize and Deserialise to Json](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#json-format)
<iframe src="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#json-format" width="100%" height="2020px" scrolling="no"></iframe>

- [Escaping](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#escaping)
<iframe src="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#escaping" width="100%" height="1220px" scrolling="no"></iframe>


## Demo
- Demo
<iframe src="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#demonstrations" width="100%" height="490px" scrolling="no"></iframe>


## Environments
```python
    python Env activate and create 
    python -m venv .venv
    source .venv/bin/activate
```
- The virtual environment can be deactivated by typing `source .venv/bin/deactivate.`
- export PATH="$PATH:$HOME/.local/bin"

### Dependency Management
```Shell
poetry init
poetry add robotframework robotframework-browser robotframework-requests
```


### Section 
|Section|Used for|
|---|---|
|Settings|1) Importing [test libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries), [resource files](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-files) and [variable files](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-files).2) Defining metadata for [test suites](http://robot-framework.readthedocs.org/en/master/autodoc/robot.running.html#robot.running.model.TestSuite) and [test cases](http://robot-framework.readthedocs.org/en/master/autodoc/robot.running.html#robot.running.model.TestCase).|
|Variables|Defining [variables](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables) that can be used elsewhere in the test data.|
|Test Cases|[Creating test cases](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-cases) from available keywords.|
|Tasks|[Creating tasks](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-tasks) using available keywords. Single file can only contain either tests or tasks.|
|Keywords|[Creating user keywords](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-user-keywords) from existing lower-level keywords|
|Comments|Additional comments or data. Ignored by Robot Framework.|

![[Pasted image 20231128201030.png]]