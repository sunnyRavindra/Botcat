"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[2347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={title:"Robot Framework"},i=void 0,l={unversionedId:"TestAutomation/RobotFramework",id:"TestAutomation/RobotFramework",title:"Robot Framework",description:"- Getting Started guide",source:"@site/docs/TestAutomation/RobotFramework.md",sourceDirName:"TestAutomation",slug:"/TestAutomation/RobotFramework",permalink:"/TestAutomation/RobotFramework",draft:!1,tags:[],version:"current",frontMatter:{title:"Robot Framework"},sidebar:"myAutogeneratedSidebar",previous:{title:"RestAssured",permalink:"/TestAutomation/RestAssured"},next:{title:"Playwright",permalink:"/TestAutomation/PlayWright"}},s={},m=[{value:"Installation",id:"installation",level:3},{value:"Poetry Maven for Python",id:"poetry-maven-for-python",level:3},{value:"UI Libraries",id:"ui-libraries",level:3},{value:"Rest Libraries",id:"rest-libraries",level:3},{value:"Desktop Libraries",id:"desktop-libraries",level:3},{value:"Mobile Libraries",id:"mobile-libraries",level:3},{value:"Database Library",id:"database-library",level:3},{value:"Standard Library",id:"standard-library",level:3},{value:"Project Structure",id:"project-structure",level:3},{value:"my_project Structure",id:"my_project-structure",level:3},{value:"Import custom keywords",id:"import-custom-keywords",level:3},{value:"Running Python Tests",id:"running-python-tests",level:3},{value:"Using <code>PYTHONPATH</code> environment variable",id:"using-pythonpath-environment-variable",level:3},{value:"File and Folders",id:"file-and-folders",level:3},{value:"Robot Documentation using RestructuredText",id:"robot-documentation-using-restructuredtext",level:3},{value:"Variables",id:"variables",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.robotframework.org/docs"},"Getting Started guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html"},"Reference Documentation"))),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"cd ~/MyProject\npyenv global 3.10.6 # use specific python version \npyenv local 3.10.6 \n# Create Environment\npython -m venv .venv\n# Activate Environment\nsource .venv/bin/activate\n# deactivate Environment\nsource .venv/bin/deactivate\n")),(0,n.kt)("h3",{id:"poetry-maven-for-python"},"Poetry Maven for Python"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/"},"Introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/cli/"},"Poetry Commands"))),(0,n.kt)("p",null,"Poetry is a tool for ",(0,n.kt)("strong",{parentName:"p"},"dependency management")," and ",(0,n.kt)("strong",{parentName:"p"},"packaging")," in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Poetry offers a lockfile to ensure repeatable installs, and can build your project for distribution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"pipx install poetry # Install Poetry\npoetry new poetry-demo # Create Poetry Project\npoetry run # runnning files ising poetry \npoetry init # Make a folder poetry project\npoetry shell # installs dependencies and activates environment\ndeactivate # when run in poetry shell deactivates the evironment\nexit # Removes the poetry shell\npoetry build\n")),(0,n.kt)("h3",{id:"ui-libraries"},"UI Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SeleniumLibrary/"},"Selenium Library"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Explicit%20locator%20strategy"},"explicit locator strategy")," or ",(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Implicit%20XPath%20strategy"},"implicit XPath strategy"),","),(0,n.kt)("li",{parentName:"ul"},"Chaining locators ie: css:.bar >> ",(0,n.kt)("a",{parentName:"li",href:"xpath://a"},"xpath://a"))))),(0,n.kt)("p",null,"In Robot Framework, which is a keyword-driven test automation framework, you can use SeleniumLibrary to interact with web browsers, and when dealing with web elements, locators play a crucial role. Chaining locators in Robot Framework with SeleniumLibrary allows you to create more specific and flexible locators by combining multiple locator strategies."),(0,n.kt)("p",null,"Here's an example to illustrate chaining locators in Robot Framework using SeleniumLibrary:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robot"},"*** Settings ***\nLibrary           SeleniumLibrary\n\n*** Test Cases ***\nChaining Locators Example\n    Open Browser    https://example.com    chrome\n    ${element}=    Chain Locators    css:div#container    xpath://a[@id='link']\n    Click Element    ${element}\n    Capture Page Screenshot\n    Close Browser\n")),(0,n.kt)("p",null,"In this example:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Open Browser")," opens the Chrome browser and navigates to the specified URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Chain Locators")," is used to create a more specific locator by chaining two locators together. The first part of the chain is a CSS locator (",(0,n.kt)("inlineCode",{parentName:"li"},"css:div#container"),"), and the second part is an XPath locator (",(0,n.kt)("inlineCode",{parentName:"li"},"xpath://a[@id='link']"),"). The resulting ",(0,n.kt)("inlineCode",{parentName:"li"},"${element}")," will be a combination of these locators."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Click Element")," uses the ",(0,n.kt)("inlineCode",{parentName:"li"},"${element}")," locator to click on the specific element on the web page."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Capture Page Screenshot")," takes a screenshot for verification purposes."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Close Browser")," closes the browser.")),(0,n.kt)("p",null,"This is just a basic example, and you can chain different types of locators based on your needs. Keep in mind that while chaining locators can be powerful, it's essential to ensure that the combined locators uniquely identify the desired element on the web page. Additionally, consider the maintainability of your tests, as overly complex locators can make your test scripts harder to understand and maintain."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MarketSquare/robotframework-browser"},"Browser Library"))),(0,n.kt)("h3",{id:"rest-libraries"},"Rest Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MarketSquare/robotframework-requests"},"Requests Library"))),(0,n.kt)("h3",{id:"desktop-libraries"},"Desktop Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GDATASoftwareAG/robotframework-flaui"},"FlaUI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rainmanwy/robotframework-SikuliLibrary"},"Sikuli Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Omenia/robotframework-whitelibrary"},"White Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rpaframework.org/"},"RPA Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eficode/robotframework-imagehorizonlibrary"},"ImageHorizon Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Accruent/robotframework-zoomba"},"Zoomba Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nokia/robotframework-autoitlibrary"},"AutoIT Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/remoteswinglibrary"},"RemoteSwing Library")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SwingLibrary/wiki"},"Swing Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lcarbonn/robotframework-eclipselibrary"},"Eclipse Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rpaframework.org/libraries/javaaccessbridge/index.html"},"RPA Framework JavaAccessBridge"))),(0,n.kt)("h3",{id:"mobile-libraries"},"Mobile Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.robotframework.org/docs/different_libraries/appium"},"Appium Library"))),(0,n.kt)("h3",{id:"database-library"},"Database Library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.robotframework.org/docs/different_libraries/database"},"Database Library"))),(0,n.kt)("h3",{id:"standard-library"},"Standard Library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.robotframework.org/docs/different_libraries/standard"},"Standard Library"))),(0,n.kt)("h3",{id:"project-structure"},"Project Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," - Python dependencies"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Readme.md")," - Project description"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".gitignore")," - Lists files and folders to be ignored by git"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tests/")," - Test Suites folder\n",(0,n.kt)("inlineCode",{parentName:"li"},"search.robot")," - Test Suite for Search functionality\n",(0,n.kt)("inlineCode",{parentName:"li"},"login.robot")," - Test Suite for Log In functionality\n",(0,n.kt)("inlineCode",{parentName:"li"},"checkout/")," - Folder containing Test Suites for Checkout\n",(0,n.kt)("inlineCode",{parentName:"li"},"checkout_basic.robot")," - Test Suites for standard Checkout\n",(0,n.kt)("inlineCode",{parentName:"li"},"checkout_premium.robot")," - Test Suites for premium Checkout"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"resources/")," - Reusable keywords\n",(0,n.kt)("inlineCode",{parentName:"li"},"common.robot")," - General Keywords (e.g. Login/Logout, Navigation, ...) are stored here\n",(0,n.kt)("inlineCode",{parentName:"li"},"search.robot")," - Keywords for searching are stored here\n",(0,n.kt)("inlineCode",{parentName:"li"},"utils.py")," - Python helper keywords are stored here")),(0,n.kt)("h3",{id:"my_project-structure"},"my_project Structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 tests\n\u2502   \u251c\u2500\u2500 suiteA.robot\n\u2502   \u251c\u2500\u2500 suiteB.robot\n\u2502   \u251c\u2500\u2500 ...\n\u2502   \n\u251c\u2500\u2500 resources\n\u2502   \u251c\u2500\u2500 common.resource\n\u2502   \u251c\u2500\u2500 some_other.resource\n\u2502   \u251c\u2500\u2500 custom_library.py\n\u2502   \u251c\u2500\u2500 variables.py\n\u2502   \u251c\u2500\u2500 ...\n\u2502\n\u251c\u2500\u2500 .gitlab-ci.yml\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 requirements.txt\n")),(0,n.kt)("h3",{id:"import-custom-keywords"},"Import custom keywords"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"}," Settings ")),"\nResource  resources/common.resource\nResource  resources/some_other.resource\nLibrary   resources/custom_library.py\nVariables resources/variables.py\n..."),(0,n.kt)("h3",{id:"running-python-tests"},"Running Python Tests"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"robot --pythonpath . tests/suiteA.robot\n")),(0,n.kt)("h3",{id:"using-pythonpath-environment-variable"},"Using ",(0,n.kt)("inlineCode",{parentName:"h3"},"PYTHONPATH")," environment variable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ export PYTHONPATH=$PYTHONPATH:.\n$ robot tests/suiteA.robot\n")),(0,n.kt)("h3",{id:"file-and-folders"},"File and Folders"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A test case file automatically creates a ",(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-suites"},"test suite")," containing the test cases in that file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries"},"Test libraries")," containing the lowest-level keywords."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-files"},"Resource files")," with ",(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables"},"variables")," and higher-level ",(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-user-keywords"},"user keywords"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-files"},"Variable files")," to provide more flexible ways to create variables than resource files.")),(0,n.kt)("h3",{id:"robot-documentation-using-restructuredtext"},"Robot Documentation using RestructuredText"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},".robot, rst extension can be used to create restructured text")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"reStructuredText example\n------------------------\n\nThis text is outside code blocks and thus ignored.\n\n.. code:: robotframework\n\n   *** Settings ***\n   Documentation    Example using the reStructuredText format.\n   Library          OperatingSystem\n\n   *** Variables ***\n   ${MESSAGE}       Hello, world!\n\n   *** Test Cases ***\n   My Test\n       [Documentation]    Example test.\n   Log    ${MESSAGE}\n   My Keyword    ${CURDIR}\n\n   Another Test\n   Should Be Equal    ${MESSAGE}    Hello, world!\n\nAlso this text is outside code blocks and ignored. Code blocks not\ncontaining Robot Framework data are ignored as well.\n\n.. code:: robotframework\n\n   # Both space and pipe separated formats are supported.\n\n   | *** Keywords ***  |                        |         |\n   | My Keyword        | [Arguments]            | ${path} |\n   |                   | Directory Should Exist | ${path} |\n\n.. code:: python\n\n   # This code block is ignored.\n   def example():\n       print('Hello, world!')\n")),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"1.\xa0",(0,n.kt)("strong",{parentName:"em"},"Scalar"),"\xa0(Identifier: $)")," \u2013 The most common way to use variables in Robot Framework test data is using the scalar variable syntax like\xa0",(0,n.kt)("strong",{parentName:"p"},"${var}"),". When this syntax is used, the variable name is replaced with its value as-is."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"2.\xa0",(0,n.kt)("strong",{parentName:"em"},"List"),"\xa0(Identifier: @)")," \u2013 If a variable value is a list or list-like, a list variable like\xa0",(0,n.kt)("strong",{parentName:"p"},"@{EXAMPLE}"),"\xa0is used. In this case, the list is expanded, and individual items are passed in as separate arguments."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"3.\xa0",(0,n.kt)("strong",{parentName:"em"},"Dictionary"),"\xa0(Identifier: &)")," \u2013 A variable containing a Python dictionary or a dictionary-like object can be used as a dictionary variable like\xa0",(0,n.kt)("strong",{parentName:"p"},"&{EXAMPLE}"),". In practice, this means that the dictionary is expanded and individual items are passed as named arguments to the keyword."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"4.\xa0",(0,n.kt)("strong",{parentName:"em"},"Environment"),"\xa0(Identifier: %)")," \u2013 Robot Framework allows using environment variables in the test data using the syntax\xa0",(0,n.kt)("strong",{parentName:"p"},"%{ENV_VAR_NAME}"),". They are limited to string values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"`*** Variables ***`\n\n`${STRING}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 cute name\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #Scalar`\n\n`${INT_AS_STRING}`\xa0\xa0\xa0 `1`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 `#Scalar`\n\n`${INT_AS_INT}\xa0\xa0\xa0\xa0\xa0\xa0 ${``1``}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #Scalar`\n\n`${FLOAT}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${``3.14``}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #Scalar`\n\n`@{LIST}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 one\xa0\xa0\xa0 two\xa0\xa0\xa0 three`\n\n`&{DICTIONARY}\xa0\xa0\xa0\xa0\xa0\xa0 string=name`\xa0\xa0\xa0 `int``=${``1``}\xa0\xa0\xa0 list=@{LIST}`\n\n`${ENVIRONMENT}\xa0\xa0\xa0\xa0\xa0 %{PATH}`\n")))}c.isMDXComponent=!0}}]);