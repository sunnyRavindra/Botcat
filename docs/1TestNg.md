---
title: TestNg
---

- ### [Reference Documents](https://testng.org/doc/documentation-main.html)

- ### [TestNG Downloads](https://testng.org/doc/download.html)


- Seperate Thread for all methods
- Support for dataproviders
- Support for Parameters

### TestNG Run
```Bash
java org.testng.TestNG testng1.xml [testng2.xml testng3.xml ...]
```

### TestNG Project
```
mvn archetype:create -DgroupId=org.martingilday -DartifactId=test1 -DarchetypeGroupId=org.martingilday -DarchetypeArtifactId=testng-archetype
  -DarchetypeVersion=1.0-SNAPSHOT -DremoteRepositories=https://www.martingilday.org/repository/
```
