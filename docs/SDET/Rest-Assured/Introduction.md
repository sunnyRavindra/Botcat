---
title: Rest Assured
---

### Getting Started
```Link
https://github.com/rest-assured/rest-assured/wiki/GettingStarted
```

### Dependency
1. Rest Assured dependency includes JsonPath and XmlPath
2. Rest Assured's dependency declaration comes before (JUnit or TestNG) dependency to make sure that the correct version of Hamcrest is used 

   - JsonPath: Used for parsing and extracting data from JSON responses.
   - XmlPath: Used for parsing and manipulating XML responses.
   - Hamcreast is used for assertions.
   - json-schema-validator is used for validating Json Schema

   ```xml
   <dependencies>
       <!-- Rest Assured and its dependencies -->
       <dependency>
           <groupId>io.rest-assured</groupId>
           <artifactId>rest-assured</artifactId>
           <version>4.4.0</version> <!-- Replace with your desired version -->
           <scope>test</scope>
       </dependency>
       <!-- JUnit (or TestNG) for running tests -->
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>5.8.0</version> <!-- Replace with your desired version -->
           <scope>test</scope>
       </dependency>
       <dependency>
            <groupId>io.rest-assured</groupId>
            <artifactId>json-schema-validator</artifactId>
            <version>5.3.2</version>
            <scope>test</scope>
       </dependency>
   </dependencies>
   ```

### Static Imports
```json 
io.restassured.RestAssured.*
io.restassured.matcher.RestAssuredMatchers.*
org.hamcrest.Matchers.*
io.restassured.module.jsv.JsonSchemaValidator.*
```

### 
POST, GET, PUT, DELETE, OPTIONS, PATCH and HEAD
