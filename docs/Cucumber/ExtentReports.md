---
title: Cucumber Reports
---
### ExtentReports Cucumber7 Adapter
```
https://ghchirp.site/3196/
```

### extent.properties
```
extent.reporter.spark.start=true
extent.reporter.spark.out=target/extentReport/report.html
```

### Spark-config.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<extentreports>
	<configuration>
		<!-- report theme -->
		<!-- standard, dark -->
		<theme>dark</theme>

		<!-- document encoding -->
		<!-- defaults to UTF-8 -->
		<encoding>UTF-8</encoding>

		<!-- protocol for script and stylesheets -->
		<!-- defaults to https -->
		<protocol>https</protocol>

		<!-- title of the document -->
		<documentTitle>Basic Test</documentTitle>

		<!-- report name - displayed at top-nav -->
		<reportName>Report Name</reportName>

		<!-- view report without internet -->
		<offlineMode>false</offlineMode>

		<thumbnailForBase64>true</thumbnailForBase64>

		<!-- custom javascript -->
		<js></js>

		<!-- custom styles -->
		<css></css>
	</configuration>
</extentreports>
```

### Take ScreenShots on failure
```java
	@AfterStep
	public void takeScreenShots(Scenario scenario) throws IOException {
		if(scenario.isFailed()) {
			//Take Screenshot
			byte[] screenshotFile = ((TakesScreenshot)contextManager.driverManager.getDriver()).getScreenshotAs(OutputType.BYTES);
			//Attach to Extent report
			scenario.attach(screenshotFile, "image/png", "image");
		}
	}
```