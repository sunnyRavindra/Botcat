---
title: SoupUI Basics
---
### Properties in SoapUI

### Types of Properties

1. **Test Case Properties**: These properties are specific to a particular test case and are used to store data or values that are needed within that test case. Test case properties can be set and accessed only within the scope of that test case.

![[Pasted image 20231030145159.png]]
2. **Test Suite Properties**: Test suite properties are at the test suite level and can be accessed by all the test cases within the same test suite. They are valuable for sharing data among test cases within a specific test suite.
![[Pasted image 20231030145435.png]]
3. **Project Properties**: Project properties are accessible to all test cases within a project, making them suitable for storing data that needs to be shared across multiple test cases within the same project.
![[Pasted image 20231030145624.png]]
4. **Test Step Properties**: Test step properties are specific to an individual test step within a test case. They are used to store data or values required for a particular test step's operation.
![[Pasted image 20231030150401.png]]
### Common Uses of Properties

- **Data-Driven Testing**: You can use properties to parameterize test data, making it easy to run the same test with different input values.

- **Dynamic Endpoints**: When testing services with variable endpoints, properties allow you to change the endpoint dynamically based on the test case's requirements.

- **Assertions and Validation**: Properties are useful for storing expected values to compare with actual responses during test execution.

- **Environment Configuration**: You can store environment-specific configurations, such as server URLs or authentication credentials, as properties.

### Property Expansion

- SoapUI supports property expansion, which allows you to reference and use property values within various parts of your test steps, request parameters, and response assertions.

- Property expansion is done by enclosing the property name in double curly braces, like `${#TestCase#Property}` or `${#Project#Property}`.

- For example, you can use property expansion to inject dynamic data into a request or to specify the expected outcome in an assertion.

### Property Transfer

- Property transfer is a feature in SoapUI that allows you to extract data from one part of a response and store it in a property for later use in the test case.

- It's commonly used to capture values from a response (e.g., an authentication token) and reuse them in subsequent requests.

### Scripting and Properties

- Properties can be manipulated using Groovy or JavaScript scripting within SoapUI. This allows you to perform dynamic operations on property values during test execution.

### Property Steps

- SoapUI provides specific test steps, such as "Property Transfer" and "Property Loop," to work with properties efficiently.

- "Property Transfer" steps allow you to extract and set property values.

- "Property Loop" steps enable you to iterate over a range of property values, making it easy to repeat test steps multiple times with different data.

Properties in SoapUI are a powerful tool for building flexible and data-driven test cases, enhancing the reusability and efficiency of your API and web service testing efforts.
