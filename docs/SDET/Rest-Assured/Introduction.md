---
title: RestAssured
---

[RestAssured Documentation](https://github.com/rest-assured/rest-assured/wiki/GettingStarted)

### Jira Practice Api's

[Jira Api's for practice](https://developer.atlassian.com/server/jira/platform/rest-apis/)

[Jira Docker Image](https://hub.docker.com/r/atlassian/jira-software)

[Cookie-based authentication Api](https://developer.atlassian.com/server/jira/platform/cookie-based-authentication/)

[API Reference](https://docs.atlassian.com/jira-software/REST/9.11.0/)


Session Filter explanation 

Attachment and Multipart upload 


```Link
https://qaautomation.expert/2023/10/12/rest-assured-tutorials/
```



### Dependency
1. Rest Assured dependency includes JsonPath and XmlPath
2. Rest Assured's dependency declaration comes before (JUnit or TestNG) dependency to make sure that the correct version of Hamcrest is used 

   - JsonPath: Used for parsing and extracting data from JSON responses.
   - XmlPath: Used for parsing and manipulating XML responses.
   - Hamcreast is used for assertions.
   - json-schema-validator is used for validating Json Schema

### POM dependency
```xml
	<dependencies>
		<!-- https://mvnrepository.com/artifact/io.rest-assured/rest-assured -->
		<dependency>
			<groupId>io.rest-assured</groupId>
			<artifactId>rest-assured</artifactId>
			<version>5.3.2</version>
			<scope>test</scope>
		</dependency>

		<!--
		https://mvnrepository.com/artifact/io.rest-assured/json-schema-validator -->
		<dependency>
			<groupId>io.rest-assured</groupId>
			<artifactId>json-schema-validator</artifactId>
			<version>5.3.2</version>
		</dependency>

		<!-- https://mvnrepository.com/artifact/org.testng/testng -->
		<dependency>
			<groupId>org.testng</groupId>
			<artifactId>testng</artifactId>
			<version>7.8.0</version>
			<scope>test</scope>
		</dependency>

	</dependencies>
```

### Static Imports
```Java
import io.restassured.RestAssured.*;
import io.restassured.matcher.RestAssuredMatchers.*;
import org.hamcrest.Matchers.*;
import io.restassured.module.jsv.JsonSchemaValidator.*;

```
1. Introduction 
https://qaautomation.expert/2021/05/16/introduction-to-rest-assured/
2. Get Request
https://qaautomation.expert/2023/10/12/how-to-test-get-request-using-rest-assured/

