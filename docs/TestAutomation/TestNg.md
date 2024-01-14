---
title: TestNg
---
### TestNG Basics

- [Guru99](https://www.guru99.com/introduction-to-selenium.html)

- [TestNG Docs](https://testng.org/doc/documentation-main.html)

- Separate Thread for all methods
- Support for data providers
- Support for Parameters

### Execute TestNG file
```Bash
java org.testng.TestNG testng1.xml [testng2.xml testng3.xml ...]
```

### Create TestNG Project
```
mvn archetype:create -DgroupId=org.martingilday -DartifactId=test1 -DarchetypeGroupId=org.martingilday -DarchetypeArtifactId=testng-archetype
  -DarchetypeVersion=1.0-SNAPSHOT -DremoteRepositories=https://www.martingilday.org/repository/
```

### TestNG.xml example 
```TestNG
		<classes>
			<class name="testNG.Utils" />
			<class name="testNG.TestNG">
				<methods>
					<include name="test2" />
				</methods>
			</class>
		</classes>
```

### Parellel Execution

![Parelell.png](/Parelell.png)

![Parellel Execution](https://www.guru99.com/images/jsp/030116_0948_TestNGExecu2.png)

### TestNG Reporter Class
```Java
Reporter.log("Logs that you want to be visible in TestNG report")
```

### WebDriverListener
<iframe src="https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/support/events/EventFiringDecorator.html" width="100%" height="4920px" scrolling="no"></iframe>

### WebDriver Listener code example 
```Java 

import org.openqa.selenium.*;

import java.util.Arrays;

public class MyListener implements WebDriverEventListener {

    @Override
    public void beforeNavigateTo(String url, WebDriver driver) {
        System.out.println(“Before navigating to: ‘” + url + “‘”);
    }

    @Override
    public void afterNavigateTo(String url, WebDriver driver) {
        System.out.println(“Navigated to:'” + url + “‘”);
    }

    @Override
    public void beforeClickOn(WebElement element, WebDriver driver) {
        System.out.println(“Trying to click on: ” + element.toString());
    }

    @Override
    public void afterClickOn(WebElement element, WebDriver driver) {
        System.out.println(“Clicked on: ” + element.toString());
    }

    @Override
    public void beforeNavigateBack(WebDriver driver) {
        System.out.println(“Navigating back to previous page”);
    }

    @Override
    public void afterNavigateBack(WebDriver driver) {
        System.out.println(“Navigated back to previous page”);
    }

    @Override
    public void beforeNavigateForward(WebDriver driver) {
        System.out.println(“Navigating forward to next page”);
    }

    @Override
    public void afterNavigateForward(WebDriver driver) {
        System.out.println(“Navigated forward to next page”);
    }

    @Override
    public void onException(Throwable error, WebDriver driver) {
        System.out.println(“Exception occured: ” + error);
    }

    @Override
    public <X> void beforeGetScreenshotAs(OutputType<X> outputType) {

    }

    @Override
    public <X> void afterGetScreenshotAs(OutputType<X> outputType, X x) {

    }

    @Override
    public void beforeFindBy(By by, WebElement element, WebDriver driver) {
        System.out.println(“Trying to find Element By : ” + by.toString());
    }

    @Override
    public void afterFindBy(By by, WebElement element, WebDriver driver) {
        System.out.println(“Found Element By : ” + by.toString());
    }

    /*
     * non overridden methods of WebListener class
     */

    @Override
    public void beforeScript(String script, WebDriver driver) {
    }

    @Override
    public void afterScript(String script, WebDriver driver) {
    }

    @Override
    public void beforeAlertAccept(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void afterAlertAccept(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void afterAlertDismiss(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void beforeAlertDismiss(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void beforeNavigateRefresh(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void afterNavigateRefresh(WebDriver driver) {
        // TODO Auto-generated method stub

    }

    @Override
    public void beforeChangeValueOf(WebElement element, WebDriver driver, CharSequence[] keysToSend) {
        // TODO Auto-generated method stub

    }

    @Override
    public void afterChangeValueOf(WebElement element, WebDriver driver, CharSequence[] keysToSend) {
        System.out.println(“Element value changed to: ” + element.toString() + ” using keys: ” + Arrays.toString(keysToSend));
    }

    @Override
    public void beforeSwitchToWindow(String windowName, WebDriver driver) {
        System.out.println(“Before switching to window: ” + windowName);
    }

    @Override
    public void afterSwitchToWindow(String windowName, WebDriver driver) {
        System.out.println(“Switched to window: ” + windowName);
    }

    @Override
    public void beforeGetText(WebElement element, WebDriver driver) {
        System.out.println(“Before getting text of element: ” + element.toString());
    }

    @Override
    public void afterGetText(WebElement element, WebDriver driver, String text) {
        System.out.println(“Text of element: ” + element.toString() + ” is: ” + text);
    }
}

```

```Java

WebDriver driver = new ChromeDriver();
EventFiringWebDriver eDriver = new EventFiringWebDriver(driver);

MyListener eventListener = new MyListener();
eDriver.register(eventListener);
Use the EventFiringWebDriver instance to drive the browser instead of the original WebDriver instance.

eDriver.get(“https://www.google.com”);

Driver.unregister(eventListener);

```

### TestNG Listeners

- [Basics](https://www.browserstack.com/guide/testng-listeners)

Below are the few TestNG listeners:
- IAnnotationTransformer 
- IAnnotationTransformer2 
- IConfigurable 
- IConfigurationListener 
- IExecutionListener
- IHookable 
- IInvokedMethodListener 
- IInvokedMethodListener2 
- IMethodInterceptor 
- IReporter
- ISuiteListener
- ITestListener 
### ItestListener Listener

```Java
public class Listeners implements ITestListener {

@Override
public void onStart(ITestContext context) {

System.out.println("Test Started : ###########Started###########" + context.getName());

}

@Override

public void onFinish(ITestContext context) {
System.out.println("Test Ends : ##########Ended######### :-->" + context.getName());
}

@Override

public void onTestFailure(ITestResult results) {

System.out.println("Test Results Status : " + results.getStatus());
}

@Override

public void onTestSuccess(ITestResult result) {
System.out.println("Test sucessfuly completed " + result.getName() );
	}

@Override

public void onTestSkipped(ITestResult result) {

System.out.println("Test sucessfuly completed " + result.getName() );
	}
}
```

### IReporter Listener

```Java
@Override

public void generateReport(List<XmlSuite> xmlSuite, List<ISuite> iSuite, String outputDirectory) {

for (ISuite isuite : iSuite) {
Map<String, ISuiteResult> results = isuite.getResults();
Set<String> keys = results.keySet();

for (String key : keys) {
ITestContext context = results.get(key).getTestContext();

System.out.println("Suite Name->" + context.getName()
+ "::Report output Ditectory->" + context.getOutputDirectory()
+ "::Suite Name->" + context.getSuite().getName()
+ "::Start Date Time for execution->" + context.getStartDate()
+ "::End Date Time for execution->" + context.getEndDate());

IResultMap resultMap = context.getFailedTests();

Collection<ITestNGMethod> failedMethods = resultMap.getAllMethods();

System.out.println("--------FAILED TEST CASE---------");
for (ITestNGMethod iTestNGMethod : failedMethods) {
// Print failed test cases detail
System.out.println("TESTCASE NAME->" + iTestNGMethod.getMethodName()
+ "\nDescription->" + iTestNGMethod.getDescription()
+ "\nPriority->" + iTestNGMethod.getPriority()
+ "\n:Date->" + new Date(iTestNGMethod.getDate()));

			}
		}
	}
}
```

```Java
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.testng.IReporter;
import org.testng.IResultMap;
import org.testng.ISuite;
import org.testng.ISuiteListener;
import org.testng.ISuiteResult;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestNGMethod;
import org.testng.ITestResult;
import org.testng.xml.XmlSuite;

public class MyListener implements IReporter {

@Override
public void generateReport(List<XmlSuite> xmlSuites, List<ISuite> suites, String outputDirectory) {
// TODO Auto-generated method stub
ISuite suite = suites.get(0);
Map<String, Collection<ITestNGMethod>> methodsByGroup = suite.getMethodsByGroups();
Map<String, ISuiteResult> tests = suite.getResults();
for (String key : tests.keySet()) {
System.out.println("Key: " + key + ", Value: " + tests.get(key));
}
Collection<ISuiteResult> suiteResults = tests.values();
ISuiteResult suiteResult = suiteResults.iterator().next();
ITestContext testContext = suiteResult.getTestContext();
Collection<ITestNGMethod> perfMethods = methodsByGroup.get("smoke");
IResultMap failedTests = testContext.getFailedTests();
for (ITestNGMethod perfMethod : perfMethods) {
Set<ITestResult> testResultSet = failedTests.getResults(perfMethod);
for (ITestResult testResult : testResultSet) {
System.out.println("Test " + testResult.getName() + " failed, error " + testResult.getThrowable());
}
}
IResultMap passedTests = testContext.getPassedTests();
for (ITestNGMethod perfMethod : perfMethods) {
Set<ITestResult> testResultSet = passedTests.getResults(perfMethod);
for (ITestResult testResult : testResultSet) {
System.out.println("Test " + testResult.getName() + " passed, time took " +
(testResult.getEndMillis() - testResult.getStartMillis()));
}
}

}

}
```
###  IAnnotationTransformer
```Java
import org.testng.annotations.Test;
public class IAnnotationTransformerWithExample {

MyListener obj=new MyListener();
@Test(invocationCount=5)
public void changeInvocationCountOfMethod()
{
System.out.println("This method have invocation count set to 5 but at run time it shall become "+ obj.counter);
}

}
```

```Java
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

import org.testng.IAnnotationTransformer;
import org.testng.annotations.ITestAnnotation;

public class MyListener implements IAnnotationTransformer {

int counter=3;

@Override
public void transform(ITestAnnotation testAnnotation, Class testClass, Constructor testConstrutor, Method testMethod)
{
if (testMethod.getName().equals("ChangeInvocationCountOfMethod")) {
System.out.println("Changing invocation for the following method: " + testMethod.getName());
testAnnotation.setInvocationCount(counter);

}

}
}
```

### IExecutionListener Listener
As the name suggests, it monitors the beginning and end of TestNG execution. This listener is mainly used to start/stop the server while starting or ending code execution. It may also inform respective stakeholders via email that execution shall start or when it ends. It has two methods:

- **onExecutionStart()** – invoked before TestNG starts executing the suites
- **onExecutionFinish()** – invoked after all TestNG suites have finished execution
```Java
import java.sql.Time;

import org.testng.IExecutionListener;

public class MyListener implements IExecutionListener {

@Override
public void onExecutionFinish() {
long endTime= System.currentTimeMillis();
System.out.println("Inform all the suite have finished execution at"+ endTime);

}

@Override
public void onExecutionStart() {
long startTime= System.currentTimeMillis();
System.out.println("Inform all the suite have started execution at"+ startTime);

}

}
```

### IHookable Listener
If a class implements this interface, its run method will be invoked instead of each test method. Using the IHookCallBack parameter’s callback method, the test method’s invocation can be performed. It has a single method name run, which accepts two parameters.run(IHookCallBack callBack, ITestResult testResult).

```Java
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class IHookableListenerWithExample {

@Test(dataProvider="parametersToBeSent")
public void t(String parameter) {
System.out.println("test method to be called with the following parameter is " + parameter);
}

@DataProvider
public Object[][] parametersToBeSent() {
return new Object[][]{{"parameter 1"}, {"parameter 2"}, {"parameter 3"}};
}
}
```

```Java
import org.testng.IHookCallBack;
import org.testng.IHookable;
import org.testng.ITestResult;

public class MyListener implements IHookable {

@Override
public void run(IHookCallBack callBack, ITestResult testResult) {

Object[] parameterValues = callBack.getParameters();
if (parameterValues[0].equals("parameter 3")) {
System.out.println("Skip the required parameter");
} else {
callBack.runTestMethod(testResult);
}

}

}
```

### IInvokedMethodListener Listener
This listener gets invoked before and after a method in TestNG. These methods constitute both test and other configuration methods. These listeners help set up configuration or other cleanup activities. It contains two methods:

1. **beforeInvocation()**: this method gets invoked before every method
2. **afterInvocation():** this method gets invoked after every method

```Java
import org.testng.IInvokedMethod;
import org.testng.IInvokedMethodListener;
import org.testng.ITestResult;
public class MyListener implements IInvokedMethodListener {

@Override
public void afterInvocation(IInvokedMethod method, ITestResult result) {
System.out.println("This method is invoked after every config method - " + method.getTestMethod().getMethodName());

}

@Override
public void beforeInvocation(IInvokedMethod method, ITestResult result) {
System.out.println("This method is invoked before every config method - " + method.getTestMethod().getMethodName());

}

}
```

### IMethodInterceptor Listeners

This listener helps to alter the methods that TestNG is supposed to run. It gets invoked just before TestNG invokes the methods. It just has one method, **intercept,** that returns an altered list of methods. Let’s look at an example.

```Java
import java.util.ArrayList;
import java.util.List;

import org.testng.IMethodInstance;
import org.testng.IMethodInterceptor;
import org.testng.ITestContext;
import org.testng.annotations.Test;

public class MyListener implements IMethodInterceptor {

@Override
public List<IMethodInstance> intercept(List<IMethodInstance> methodsInstance, ITestContext testContext) {
List<IMethodInstance> result = new ArrayList<IMethodInstance>();
for (IMethodInstance method : methodsInstance) {
Test testMethod = method.getMethod().getConstructorOrMethod().getMethod().getAnnotation(Test.class);
if (testMethod.priority() == 1) {
result.add(method);
}
}
return result;
}

}
```

### ISuiteListener Listeners
As the name suggests, this listener works at the suite level. It listens and runs before the start and end of suite execution. It contains two methods:

1. **onStart**: invoked before test suite execution starts
2. **onFinish:** invoked after test suite execution finishes.

```Java
import org.testng.ISuite;
import org.testng.ISuiteListener;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class MyListener implements ISuiteListener {

@Override
public void onFinish(ISuite suite1) {
System.out.println("onFinish function started of ISuiteListener " );

}

@Override
public void onStart(ISuite suite2) {
System.out.println("onStart function started of ISuiteListener " );

}

}
```
### Connecting the Listeners

- Call the Listener in your class
```Java
@Listeners(utils.Listeners.class)

public class LoginTest {
```

- Instead add the tag in TestNG.xml
```Java
<listeners>

<listener class-name="afw.listeners.TestListener"></listener>

<listener class-name="afw.listeners.ReporterListener"></listener>

<listener class-name="afw.listeners.ExecutionListener"></listener>

<listener class-name="afw.listeners.InvokedMethodListener"></listener>

<listener class-name="afw.listeners.SuiteListener"></listener>

</listeners>
```

### PDF Report Generation
- [IText Core](https://mvnrepository.com/artifact/com.itextpdf/itextpdf/5.5.13.3) Java API
```Maven 
<!-- https://mvnrepository.com/artifact/com.itextpdf/itextpdf -->
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itextpdf</artifactId>
    <version>5.5.13.3</version>
</dependency>
```

```Java
public class CreatePDFReport {

  

Document docu;

  

public void openPdfPath() throws FileNotFoundException, DocumentException {

String fileName = new File("").getAbsoluteFile().toString() + "/test-output/pdfReport" + System.currentTimeMillis()

+ ".pdf";

FileOutputStream fos = new FileOutputStream(fileName);

docu = new Document();

PdfWriter.getInstance(docu, fos);

docu.open();

}

  

public void addData(String authorName, String title, String description) {

docu.addAuthor(authorName);

docu.addTitle(title);

docu.addSubject(description);

}

  

public void addParagraph(String text) throws DocumentException {

docu.add(new Paragraph(text));

}

  

public void closePdf() {

docu.close();

}

}
```

- Call the above in the IReporter Listener
```Java
public class ReporterListener extends CreatePDFReport implements IReporter {

  

@Override

public void generateReport(List<XmlSuite> xmlSuites, List<ISuite> suites, String outputDirectory) {

for (ISuite ist : suites) {

try {

  

openPdfPath();

// *************//

Map<String, ISuiteResult> resultSuiteMap = ist.getResults();

Set<String> key = resultSuiteMap.keySet();

for (String k : key) {

ITestContext context = resultSuiteMap.get(k).getTestContext();

System.out.println("Suite Name- " + context.getName() + "\n Report output Directory- "

+ context.getOutputDirectory() + "\n Suite Name- " + context.getSuite().getName()

+ "\n Start Date Time for Execution- " + context.getStartDate()

+ "\n End Date Time for Execution- " + context.getEndDate());

  

addParagraph("Suite Name- " + context.getName() + "\n Report output Directory- "

+ context.getOutputDirectory() + "\n Suite Name- " + context.getSuite().getName()

+ "\n Start Date Time for Execution- " + context.getStartDate()

+ "\n End Date Time for Execution- " + context.getEndDate());

IResultMap resultMap = context.getFailedTests();

  

Collection<ITestNGMethod> failedMethods = resultMap.getAllMethods();

System.out.println("------Failed Test Case-----");

  

for (ITestNGMethod imd : failedMethods) {

System.out.println(

"Test Case Name- " + imd.getMethodName() + "\n Description- " + imd.getDescription()

+ "\n Priority- " + imd.getPriority() + "\n Date- " + new Date(imd.getDate()));

  

addParagraph(

"Test Case Name- " + imd.getMethodName() + "\n Description- " + imd.getDescription()

+ "\n Priority- " + imd.getPriority() + "\n Date- " + new Date(imd.getDate()));

}

  

IResultMap passedTest = context.getPassedTests();

Collection<ITestNGMethod> passedMethods = passedTest.getAllMethods();

System.out.println("------Passed Test Case-----");

for (ITestNGMethod imd1 : passedMethods) {

System.out.println("Test Case Name- " + imd1.getMethodName() + "\n Description- "

+ imd1.getDescription() + "\n Priority- " + imd1.getPriority() + "\n Date- "

+ new Date(imd1.getDate()));

  

addParagraph("Test Case Name- " + imd1.getMethodName() + "\n Description- "

+ imd1.getDescription() + "\n Priority- " + imd1.getPriority() + "\n Date- "

+ new Date(imd1.getDate()));

}

}

// Closing PDF file

closePdf();

} catch (Exception e) {

e.printStackTrace();

}

}

}
```


### Retry Failed Steps 
```java
public class RetryAnalyzer implements IRetryAnalyzer {

	int counter = 0;
	int retryLimit = 4;
	/*
	 * (non-Javadoc)
	 * @see org.testng.IRetryAnalyzer#retry(org.testng.ITestResult)
	 * 
	 * This method decides how many times a test needs to be rerun.
	 * TestNg will call this method every time a test fails. So we 
	 * can put some code in here to decide when to rerun the test.
	 * 
	 * Note: This method will return true if a tests needs to be retried
	 * and false it not.
	 *
	 */

	@Override
	public boolean retry(ITestResult result) {

		if(counter < retryLimit)
		{
			counter++;
			return true;
		}
		return false;
	}
}
```

```java
public class Test001 {

	@Test(retryAnalyzer = Tests.RetryAnalyzer.class)
	public void Test1()
	{
		Assert.assertEquals(false, true);
	}

	@Test
	public void Test2()
	{
		Assert.assertEquals(false, true);
	}
}
```
