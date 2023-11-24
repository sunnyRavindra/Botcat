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

Extract Response as using extract().asString()

HTTPs relaxed https certifications

### OAath 2.0
Access token clinet ID , google sign in 
Grant type(autherisation code and client credentials)

1. Hitting the Access Code URL and getting the access code 
2. Hitting the Access Token URL and getting the Access Token 
3. Hitting the actual request with the access token


![[Pasted image 20231123100710.png]]

TOken in Response 
![[Pasted image 20231123101213.png]]

![[Pasted image 20231123101952.png]]

![[Pasted image 20231123102141.png]]
![[Pasted image 20231123124455.png]]
![[Pasted image 20231123102325.png]]
![[Pasted image 20231123102358.png]]

![[Pasted image 20231123103612.png]]
Access Code

![[Pasted image 20231123123202.png]]

Access Token 

![[Pasted image 20231123123433.png]]

Actual Request
![[Pasted image 20231123123315.png]]


Client Credential 

![[Pasted image 20231123124427.png]]

![[Pasted image 20231123124636.png]]
```Link
https://qaautomation.expert/2023/10/12/rest-assured-tutorials/
```


### Serialisation and Deserialisation using POJO

![[Pasted image 20231123152504.png]]
![[Pasted image 20231123162831.png]]

### Request Response Spec Builder
![[Pasted image 20231123180330.png]]

![[Pasted image 20231123180618.png]]

### JWT token RestAssured 
### Form data 
![[Pasted image 20231123222103.png]]
![[Pasted image 20231123222155.png]]

Using Rest Assured 
![[Pasted image 20231123223410.png]]

![[Pasted image 20231123223744.png]]

Loggig 
![[Pasted image 20231124153450.png]]
### Rest Assured Framework



### Dependency
1. Rest Assured dependency includes JsonPath and XmlPath
2. Rest Assured's dependency declaration comes before (JUnit or TestNG) dependency to make sure that the correct version of Hamcrest is used 

   - JsonPath: Used for parsing and extracting data from JSON responses.
   - XmlPath: Used for parsing and manipulating XML responses.
   - Hamcreast is used for assertions.
   - json-schema-validator is used for validating Json Schema
   Jacson 
   Gson

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

