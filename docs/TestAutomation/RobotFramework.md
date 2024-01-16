---
title: Robot Framework
---
- [Getting Started guide](https://docs.robotframework.org/docs)
- [Reference Documentation](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html)
### Installation
```Python
cd ~/MyProject
pyenv global 3.10.6 # use specific python version 
pyenv local 3.10.6 
# Create Environment
python -m venv .venv
# Activate Environment
source .venv/bin/activate
# deactivate Environment
source .venv/bin/deactivate
```

### Poetry Maven for Python
- [Introduction](https://python-poetry.org/docs/)
- [Poetry Commands](https://python-poetry.org/docs/cli/)

Poetry is a tool for **dependency management** and **packaging** in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Poetry offers a lockfile to ensure repeatable installs, and can build your project for distribution.

```Python
pipx install poetry # Install Poetry
poetry new poetry-demo # Create Poetry Project
poetry run # runnning files ising poetry 
poetry init # Make a folder poetry project
poetry shell # installs dependencies and activates environment
deactivate # when run in poetry shell deactivates the evironment
exit # Removes the poetry shell
poetry build
```

### UI Libraries
- [Selenium Library](https://github.com/robotframework/SeleniumLibrary/)
	- [explicit locator strategy](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Explicit%20locator%20strategy) or [implicit XPath strategy](https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Implicit%20XPath%20strategy),
	- Chaining locators ie: css:.bar >> [xpath://a](xpath://a)
	
In Robot Framework, which is a keyword-driven test automation framework, you can use SeleniumLibrary to interact with web browsers, and when dealing with web elements, locators play a crucial role. Chaining locators in Robot Framework with SeleniumLibrary allows you to create more specific and flexible locators by combining multiple locator strategies.

Here's an example to illustrate chaining locators in Robot Framework using SeleniumLibrary:

```robot
*** Settings ***
Library           SeleniumLibrary

*** Test Cases ***
Chaining Locators Example
    Open Browser    https://example.com    chrome
    ${element}=    Chain Locators    css:div#container    xpath://a[@id='link']
    Click Element    ${element}
    Capture Page Screenshot
    Close Browser
```

In this example:

1. `Open Browser` opens the Chrome browser and navigates to the specified URL.
2. `Chain Locators` is used to create a more specific locator by chaining two locators together. The first part of the chain is a CSS locator (`css:div#container`), and the second part is an XPath locator (`xpath://a[@id='link']`). The resulting `${element}` will be a combination of these locators.
3. `Click Element` uses the `${element}` locator to click on the specific element on the web page.
4. `Capture Page Screenshot` takes a screenshot for verification purposes.
5. `Close Browser` closes the browser.

This is just a basic example, and you can chain different types of locators based on your needs. Keep in mind that while chaining locators can be powerful, it's essential to ensure that the combined locators uniquely identify the desired element on the web page. Additionally, consider the maintainability of your tests, as overly complex locators can make your test scripts harder to understand and maintain.

- [Browser Library](https://github.com/MarketSquare/robotframework-browser)

### Rest Libraries
- [Requests Library](https://github.com/MarketSquare/robotframework-requests)

### Desktop Libraries 
- [FlaUI](https://github.com/GDATASoftwareAG/robotframework-flaui)
- [Sikuli Library](https://github.com/rainmanwy/robotframework-SikuliLibrary)
- [White Library](https://github.com/Omenia/robotframework-whitelibrary)
- [RPA Framework](https://rpaframework.org/)
- [ImageHorizon Library](https://github.com/eficode/robotframework-imagehorizonlibrary)
- [Zoomba Library](https://github.com/Accruent/robotframework-zoomba)
- [AutoIT Library](https://github.com/nokia/robotframework-autoitlibrary)
- - [RemoteSwing Library](https://github.com/robotframework/remoteswinglibrary)
- [Swing Library](https://github.com/robotframework/SwingLibrary/wiki)
- [Eclipse Library](https://github.com/lcarbonn/robotframework-eclipselibrary)
- [RPA Framework JavaAccessBridge](https://rpaframework.org/libraries/javaaccessbridge/index.html)

### Mobile Libraries
- [Appium Library](https://docs.robotframework.org/docs/different_libraries/appium)

### Database Library
- [Database Library](https://docs.robotframework.org/docs/different_libraries/database)

### Standard Library 
- [Standard Library](https://docs.robotframework.org/docs/different_libraries/standard)

### Project Structure
- `pyproject.toml` - Python dependencies
- `Readme.md` - Project description
- `.gitignore` - Lists files and folders to be ignored by git
- `tests/` - Test Suites folder
     `search.robot` - Test Suite for Search functionality
     `login.robot` - Test Suite for Log In functionality
     `checkout/` - Folder containing Test Suites for Checkout
         `checkout_basic.robot` - Test Suites for standard Checkout
         `checkout_premium.robot` - Test Suites for premium Checkout
- `resources/` - Reusable keywords
     `common.robot` - General Keywords (e.g. Login/Logout, Navigation, ...) are stored here
     `search.robot` - Keywords for searching are stored here
     `utils.py` - Python helper keywords are stored here

### my_project Structure
```bash
├── tests
│   ├── suiteA.robot
│   ├── suiteB.robot
│   ├── ...
│   
├── resources
│   ├── common.resource
│   ├── some_other.resource
│   ├── custom_library.py
│   ├── variables.py
│   ├── ...
│
├── .gitlab-ci.yml
├── .gitignore
├── README.md
├── requirements.txt
```

### Import custom keywords
*** Settings ***
Resource  resources/common.resource
Resource  resources/some_other.resource
Library   resources/custom_library.py
Variables resources/variables.py
...

### Running Python Tests
```Python
robot --pythonpath . tests/suiteA.robot
```
### Using `PYTHONPATH` environment variable
```bash
$ export PYTHONPATH=$PYTHONPATH:.
$ robot tests/suiteA.robot
```

### File and Folders
- A test case file automatically creates a [test suite](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-suites) containing the test cases in that file.
- [Test libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries) containing the lowest-level keywords.
- [Resource files](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-files) with [variables](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables) and higher-level [user keywords](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-user-keywords).
- [Variable files](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-files) to provide more flexible ways to create variables than resource files.

### Robot Documentation using RestructuredText
- .robot, rst extension can be used to create restructured text
```Python
reStructuredText example
------------------------

This text is outside code blocks and thus ignored.

.. code:: robotframework

   *** Settings ***
   Documentation    Example using the reStructuredText format.
   Library          OperatingSystem

   *** Variables ***
   ${MESSAGE}       Hello, world!

   *** Test Cases ***
   My Test
       [Documentation]    Example test.
   Log    ${MESSAGE}
   My Keyword    ${CURDIR}

   Another Test
   Should Be Equal    ${MESSAGE}    Hello, world!

Also this text is outside code blocks and ignored. Code blocks not
containing Robot Framework data are ignored as well.

.. code:: robotframework

   # Both space and pipe separated formats are supported.

   | *** Keywords ***  |                        |         |
   | My Keyword        | [Arguments]            | ${path} |
   |                   | Directory Should Exist | ${path} |

.. code:: python

   # This code block is ignored.
   def example():
       print('Hello, world!')
```

### Variables
_1. **Scalar** (Identifier: $)_ – The most common way to use variables in Robot Framework test data is using the scalar variable syntax like **${var}**. When this syntax is used, the variable name is replaced with its value as-is.

_2. **List** (Identifier: @)_ – If a variable value is a list or list-like, a list variable like **@{EXAMPLE}** is used. In this case, the list is expanded, and individual items are passed in as separate arguments.

_3. **Dictionary** (Identifier: &)_ – A variable containing a Python dictionary or a dictionary-like object can be used as a dictionary variable like **&{EXAMPLE}**. In practice, this means that the dictionary is expanded and individual items are passed as named arguments to the keyword.

_4. **Environment** (Identifier: %)_ – Robot Framework allows using environment variables in the test data using the syntax **%{ENV_VAR_NAME}**. They are limited to string values.
```Python
`*** Variables ***`

`${STRING}           cute name                #Scalar`

`${INT_AS_STRING}`    `1`                     `#Scalar`

`${INT_AS_INT}       ${``1``}                    #Scalar`

`${FLOAT}            ${``3.14``}                   #Scalar`

`@{LIST}             one    two    three`

`&{DICTIONARY}       string=name`    `int``=${``1``}    list=@{LIST}`

`${ENVIRONMENT}      %{PATH}`
```
