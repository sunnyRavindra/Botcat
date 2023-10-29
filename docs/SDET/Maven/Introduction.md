---
title: Maven Introduction
---

### POM(Project Object Model)
- Maven builds a project using its project object model (POM) 

### Advantages

- Simple project setup that follows best practices.
- Keeping test source code in a separate and parallel to the main code.
- Using test case naming conventions to locate and execute tests.
- Having test cases setup their environment instead of customizing the build for test preparation.
- Assists in project workflow such as release and issue management.
- Able to easily work with multiple projects at the same time.
- Coherent site of project information
- Dependency management

### Installation
```Bash
brew install maven
````

### Commands
```Maven
mvn verify
mvn clean install
mvn archetype:generate -DgroupId=com.example -DartifactId=my-java-project -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
mvn compile
mvn test
mvn test-compile
mvn package
mvn install
mvn clean
```
### Reference 
![Maven Official site](https://maven.apache.org/)
