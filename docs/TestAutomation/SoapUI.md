---
title: SoupUI
---

### SoupUI

![API Basics.png](/API.png)
![API Basics.png](/APIBasics.png)


### API (Application Programming Interface) Basic Concepts

APIs, or Application Programming Interfaces, are essential components of software and system development, enabling applications to communicate and interact with each other. Here are some fundamental concepts related to APIs:

### What is an API?

- An API is a set of rules and protocols that allows different software applications to communicate and interact with each other.

- It defines the methods and data formats that applications can use to request and exchange information.

- APIs can be used to access functionality or data from services, libraries, or external systems.

### Types of APIs

1. **Web APIs**: Web APIs, often referred to as REST or SOAP APIs, are accessed over the internet using standard HTTP methods. They allow applications to communicate over the web.

2. **Library APIs**: Library APIs are sets of functions and procedures that developers can use to perform specific tasks or operations within a program.

3. **Operating System APIs**: These APIs provide access to the underlying functions and services of an operating system, such as file management, hardware control, and process management.

4. **Database APIs**: Database APIs enable applications to interact with databases, allowing data retrieval, modification, and management.

### Key Concepts

- **Endpoints**: Endpoints are specific URLs or URIs that represent different functionalities or resources provided by a web API. Each endpoint corresponds to a specific action.

- **HTTP Methods**: APIs use HTTP methods (e.g., GET, POST, PUT, DELETE) to perform operations on resources. For example, GET retrieves data, while POST creates new data.

- **Request and Response**: An API request is made by a client to access a resource, and the server responds with data or the result of the requested operation.

- **Authentication**: Many APIs require authentication, ensuring that only authorized users or applications can access the data or services.

- **Rate Limiting**: APIs may have rate limits to control the number of requests a client can make within a specific time frame to prevent abuse.

- **Versioning**: API versions are used to maintain compatibility. When changes are made, older versions can still be used by existing clients.

## Use Cases

- **Integration**: APIs are crucial for integrating services and systems, allowing them to work together and share data.

- **Third-Party Services**: Developers use APIs to access services and data provided by external organizations, such as social media platforms or payment gateways.

- **Mobile Apps**: Mobile apps often use APIs to access server-side functionality, such as retrieving data from a remote server.

- **Automation**: APIs are used for automating tasks, enabling software to interact with other software without manual intervention.

- **Data Access**: APIs provide structured access to data, making it easier to retrieve and manipulate information.

APIs are the building blocks of modern software development, enabling interoperability and data exchange between a wide range of applications and systems.

### Structure of a SOAP message

A SOAP message is encoded as an XML document, consisting of an "Envelope" element, which contains an optional "Header" element, and a mandatory "Body" element. The "Fault" element, contained in the "Body", is used for reporting errors.

### 1 Envelope

The SOAP "Envelope" is the root element in every SOAP message. It contains two child elements, an optional "Header", and a mandatory "Body".

### 2 Header

The SOAP "Header" is an optional subelement of the SOAP envelope. It is used to pass application-related information that is to be processed by SOAP nodes along the message path.

### 3 Body

The SOAP "Body" is a mandatory subelement of the SOAP envelope. It contains information intended for the ultimate recipient of the message.

### 4 Fault

The SOAP "Fault" is a subelement of the SOAP body, which is used for reporting errors.

With the exception of the "Fault" element, which is contained in the "Body" of a SOAP message, XML elements in the "Header" and the "Body" are defined by the applications that make use of them. However, the SOAP specification imposes some constraints on their structure.

### Structure of a SOAP message

<!-- ![soapmsg.gif](/soapmsg.gif) -->

### example of a SOAP message

```soap
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
   <soap:Header/>
   <soap:Body>
      <tem:Add>
         <tem:a>7</tem:a>
         <tem:b>6</tem:b>
      </tem:Add>
   </soap:Body>
</soap:Envelope>
```

```soap
<?xml version='1.0' ?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"> 
 <env:Header>
  <m:reservation xmlns:m="http://travelcompany.example.org/reservation" 
          env:role="http://www.w3.org/2003/05/soap-envelope/role/next"
           env:mustUnderstand="true">
   <m:reference>uuid:093a2da1-q345-739r-ba5d-pqff98fe8j7d</m:reference>
   <m:dateAndTime>2001-11-29T13:20:00.000-05:00</m:dateAndTime>
  </m:reservation>
  <n:passenger xmlns:n="http://mycompany.example.com/employees"
          env:role="http://www.w3.org/2003/05/soap-envelope/role/next"
           env:mustUnderstand="true">
   <n:name>Åke Jógvan Øyvind</n:name>
  </n:passenger>
 </env:Header>
 <env:Body>
  <p:itinerary
    xmlns:p="http://travelcompany.example.org/reservation/travel">
   <p:departure>
     <p:departing>New York</p:departing>
     <p:arriving>Los Angeles</p:arriving>
     <p:departureDate>2001-12-14</p:departureDate>
     <p:departureTime>late afternoon</p:departureTime>
     <p:seatPreference>aisle</p:seatPreference>
   </p:departure>
   <p:return>
     <p:departing>Los Angeles</p:departing>
     <p:arriving>New York</p:arriving>
     <p:departureDate>2001-12-20</p:departureDate>
     <p:departureTime>mid-morning</p:departureTime>
     <p:seatPreference/>
   </p:return>
  </p:itinerary>
  <q:lodging
   xmlns:q="http://travelcompany.example.org/reservation/hotels">
   <q:preference>none</q:preference>
  </q:lodging>
 </env:Body>
</env:Envelope>
```


### WSDL (Web Services Description Language)

WSDL is an XML-based language used to describe web services and their functionality.

- **Service**: Describes the service's name and location (URL).

- **Ports**: Define the endpoints for the service.

- **Operations**: Specify the functions or methods that can be called on the service.

- **Messages**: Describe the data exchanged between the client and the service.

- **Data Types**: Define the data structures used by the service.

### WSDL Purpose

- WSDL is essential in web service development for integrating different systems and allowing them to communicate over a network.

- It defines the contract between service providers and consumers, ensuring both parties understand how to interact.

- When used with SOAP (Simple Object Access Protocol), it creates platform-independent web services.

### Example WSDL Structure

```xml
<definitions name="MyService"
    targetNamespace="http://example.com/myservice.wsdl"
    xmlns="http://schemas.xmlsoap.org/wsdl/"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:tns="http://example.com/myservice.wsdl">
    
    <service name="MyService">
        <port name="MyServicePort" binding="tns:MyServiceBinding">
            <soap:address location="http://example.com/myservice"/>
        </port>
    </service>
    
    <binding name="MyServiceBinding" type="tns:MyServicePortType">
        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
        <operation name="doSomething">
            <soap:operation soapAction="http://example.com/myservice#doSomething"/>
            <input>
                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </input>
            <output>
                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </output>
        </operation>
    </binding>
    
    <portType name="MyServicePortType">
        <operation name="doSomething">
            <input message="tns:doSomethingIn"/>
            <output message="tns:doSomethingOut"/>
        </operation>
    </portType>
    
    <message name="doSomethingIn">
        <part name="parameters" element="tns:doSomething"/>
    </message>
    
    <message name="doSomethingOut">
        <part name="parameters" element="tns:doSomethingResponse"/>
    </message>
    
    <element name="doSomething" type="xsd:string"/>
    
    <element name="doSomethingResponse" type="xsd:string"/>
</definitions>
```

### WSDL Usage

- WSDL files can be used to generate client code (proxy classes) or server code (skeleton classes) in various programming languages to interact with web services.

- They play a crucial role in enabling the interoperability of web services in a standardized way.

WSDL is fundamental in building and accessing web services in a structured and consistent manner. Understanding its structure and usage is essential for web service development and integration.


### Message Structure 

SOAP (Simple Object Access Protocol) is a protocol used for exchanging structured information in the implementation of web services. A SOAP message consists of several key elements that define its structure:

### Envelope

- The `<Envelope>` element is the root element of a SOAP message.

- It encapsulates the entire SOAP message and defines the XML namespace for SOAP.

```xml
<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:web="http://www.example.com/webservice">
    <!-- Body and Header elements go here -->
</soapenv:Envelope>
```

### Header

- The optional `<Header>` element contains additional metadata about the SOAP message.

- It can include information like authentication credentials, routing instructions, or application-specific data.

```xml
<soapenv:Header>
    <!-- Header data goes here -->
</soapenv:Header>
```

### Body

- The `<Body>` element contains the actual content of the SOAP message.

- It defines the payload, which typically includes the request or response data for a web service operation.

```xml
<soapenv:Body>
    <!-- Request or response data goes here -->
</soapenv:Body>
```

### Fault

- In the event of an error or exception, a SOAP message may contain a `<Fault>` element within the `<Body>`.

- The `<Fault>` element provides information about the error, including a fault code, fault string, and optional details.

```xml
<soapenv:Fault>
    <faultcode>soapenv:Server</faultcode>
    <faultstring>Invalid input</faultstring>
    <detail>
        <!-- Error details go here -->
    </detail>
</soapenv:Fault>
```

### Namespace Prefixes

- SOAP messages typically use namespace prefixes to define namespaces and reference elements.

- Commonly used prefixes include `soapenv` for the SOAP envelope and `web` for the web service namespace.

### Example SOAP Message

Here's an example of a simple SOAP message structure:

```xml
<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:web="http://www.example.com/webservice">
    <soapenv:Header>
        <!-- Header data goes here -->
    </soapenv:Header>
    <soapenv:Body>
        <!-- Request or response data goes here -->
    </soapenv:Body>
</soapenv:Envelope>
```

The structure of a SOAP message is well-defined and allows for the exchange of structured data in a standardized manner, making it a key technology for web service communication.

### Structure of a SOAP message

![soapmsg.gif](/soapmsg.gif)

### Properties


### Types of Properties

1. **Test Case Properties**: These properties are specific to a particular test case and are used to store data or values that are needed within that test case. Test case properties can be set and accessed only within the scope of that test case.
2. **Test Suite Properties**: Test suite properties are at the test suite level and can be accessed by all the test cases within the same test suite. They are valuable for sharing data among test cases within a specific test suite.
3. **Project Properties**: Project properties are accessible to all test cases within a project, making them suitable for storing data that needs to be shared across multiple test cases within the same project.
4. **Test Step Properties**: Test step properties are specific to an individual test step within a test case. They are used to store data or values required for a particular test step's operation.

![PropertyFile.png](/PropertyFile.png)

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

### Assertions  


Assertions in SoapUI are used to validate the responses and behavior of web services during testing. They help ensure that the service meets the expected criteria.

### Types of Assertions

SoapUI supports various types of assertions, including:

### Response Assertion
Compares the response against expected values, status codes, or patterns.
![Assertion1.png](/Assertion1.png)

2. **XPath Assertion**: Validates elements or attributes in XML responses using XPath expressions.

![Pasted image 20231030120541.png](/Pasted image 20231030120541.png)
### Tag existence 
![Pasted image 20231030121534.png](/Pasted image 20231030121534.png)
### Tag Counts
![Pasted image 20231030121736.png](/Pasted image 20231030121736.png)

### Entire XML validation
![Pasted image 20231030124104.png](/Pasted image 20231030124104.png)
### Allow Wildcards in Xpath
![Pasted image 20231030124205.png](/Pasted image 20231030124205.png)
3. **Script Assertion**: Allows you to write custom scripts (e.g., Groovy scripts) to define complex validation logic.

4. **JSONPath Assertion**: Similar to XPath but for JSON responses, it uses JSONPath expressions for validation.
### SLA Assertion
![Pasted image 20231030114954.png](/Pasted image 20231030114954.png)
### Status Code Assertion
![Pasted image 20231030114645.png](/Pasted image 20231030114645.png)
### Contains Assertion
![Pasted image 20231030112811.png](/Pasted image 20231030112811.png)

### Token validation
![Pasted image 20231030115352.png](/Pasted image 20231030115352.png)
### Not Contains Assertion
![Pasted image 20231030114050.png](/Pasted image 20231030114050.png)
8. **Length Assertion**: Verifies the length of the response content.

9. **SOAP Fault Assertion**: Ensures that a response contains a SOAP fault when expected.

### Using Assertions

To use assertions in SoapUI:

1. Create a test step in your test case (e.g., a REST or SOAP request).

2. Open the test step and navigate to the "Assertions" tab.

3. Add the desired assertion type based on what you want to validate.

4. Configure the assertion's settings, such as expected values or patterns.

5. Run the test case, and SoapUI will report whether the assertions pass or fail.

### Importance of Assertions

- Assertions help automate the validation process, making it easier to detect issues and changes in web service behavior.

- They play a critical role in regression testing, ensuring that new updates don't break existing functionality.

- By specifying expected outcomes, assertions provide clear pass/fail criteria for testing.

- They improve the reliability and accuracy of testing by reducing manual verification efforts.

- Assertions are an essential part of SoapUI's functionality, making it a powerful tool for testing and quality assurance.

Using assertions in SoapUI is crucial for robust testing of web services, enabling thorough verification of expected results and service behavior.

### WSDL

### WSDL (Web Services Description Language)

WSDL is an XML-based language used to describe web services and their functionality.

- **Service**: Describes the service's name and location (URL).

- **Ports**: Define the endpoints for the service.

- **Operations**: Specify the functions or methods that can be called on the service.

- **Messages**: Describe the data exchanged between the client and the service.

- **Data Types**: Define the data structures used by the service.

### WSDL Purpose

- WSDL is essential in web service development for integrating different systems and allowing them to communicate over a network.

- It defines the contract between service providers and consumers, ensuring both parties understand how to interact.

- When used with SOAP (Simple Object Access Protocol), it creates platform-independent web services.

### Example WSDL Structure

```xml
<definitions name="MyService"
    targetNamespace="http://example.com/myservice.wsdl"
    xmlns="http://schemas.xmlsoap.org/wsdl/"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:tns="http://example.com/myservice.wsdl">
    
    <service name="MyService">
        <port name="MyServicePort" binding="tns:MyServiceBinding">
            <soap:address location="http://example.com/myservice"/>
        </port>
    </service>
    
    <binding name="MyServiceBinding" type="tns:MyServicePortType">
        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
        <operation name="doSomething">
            <soap:operation soapAction="http://example.com/myservice#doSomething"/>
            <input>
                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </input>
            <output>
                <soap:body use="encoded" namespace="urn:example" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
            </output>
        </operation>
    </binding>
    
    <portType name="MyServicePortType">
        <operation name="doSomething">
            <input message="tns:doSomethingIn"/>
            <output message="tns:doSomethingOut"/>
        </operation>
    </portType>
    
    <message name="doSomethingIn">
        <part name="parameters" element="tns:doSomething"/>
    </message>
    
    <message name="doSomethingOut">
        <part name="parameters" element="tns:doSomethingResponse"/>
    </message>
    
    <element name="doSomething" type="xsd:string"/>
    
    <element name="doSomethingResponse" type="xsd:string"/>
</definitions>
```

### WSDL Usage

- WSDL files can be used to generate client code (proxy classes) or server code (skeleton classes) in various programming languages to interact with web services.

- They play a crucial role in enabling the interoperability of web services in a standardized way.

WSDL is fundamental in building and accessing web services in a structured and consistent manner. Understanding its structure and usage is essential for web service development and integration.

### WSDL

### 1. Creating a Test Case and Making a Request

```groovy
// Create a new Test Case
def testCase = testRunner.testCase.createTestStep("MyTestCase")

// Create a new Test Request
def testRequest = testCase.addTestRequest("MyTestRequest")

// Set the endpoint URL
def endpoint = "https://api.example.com"
testRequest.setPropertyValue("Endpoint", endpoint)

// Set the request body
def requestBody = """
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com">
    <soapenv:Header/>
    <soapenv:Body>
        <web:MyRequest>
            <web:Parameter1>Value1</web:Parameter1>
            <web:Parameter2>Value2</web:Parameter2>
        </web:MyRequest>
    </soapenv:Body>
</soapenv:Envelope>
"""
testRequest.setRequestContent(requestBody)

// Execute the request
def response = testRequest.run(null, true)
log.info("Response: " + response.getResponseContent())
```

### 2. Data-Driven Testing

```groovy
import com.eviware.soapui.support.GroovyUtils

// Load data from an external source (e.g., CSV file)
def csvFile = "data.csv"
def data = new GroovyUtils(context).getXmlHolder(csvFile)

// Loop through the data rows and execute requests for each row
while (data["//row"]) {
    def parameter1 = data.getNodeValues("Parameter1").join()
    def parameter2 = data.getNodeValues("Parameter2").join()

    // Create a new Test Case for each data row
    def testCase = testRunner.testCase.createTestStep("Data-Driven-Test")

    // Create a new Test Request
    def testRequest = testCase.addTestRequest("Data-Driven-Request")

    // Set the endpoint URL
    def endpoint = "https://api.example.com"
    testRequest.setPropertyValue("Endpoint", endpoint)

    // Set the request body with parameters from the data source
    def requestBody = """
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com">
        <soapenv:Header/>
        <soapenv:Body>
            <web:MyRequest>
                <web:Parameter1>${parameter1}</web:Parameter1>
                <web:Parameter2>${parameter2}</web:Parameter2>
            </web:MyRequest>
        </soapenv:Body>
    </soapenv:Envelope>
    """
    testRequest.setRequestContent(requestBody)

    // Execute the request and log the response
    def response = testRequest.run(null, true)
    log.info("Response for Parameter1: ${parameter1}, Parameter2: ${parameter2}: " + response.getResponseContent())
    
    // Move to the next row in the data source
    data = data.getNextSibling()
}
```

### 3. Adding Assertions

```groovy
// Create a new Test Case
def testCase = testRunner.testCase.createTestStep("Assertions-Test")

// Create a new Test Request
def testRequest = testCase.addTestRequest("Assertions-Request")

// Set the endpoint URL
def endpoint = "https://api.example.com"
testRequest.setPropertyValue("Endpoint", endpoint)

// Set the request body
def requestBody = """
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com">
    <soapenv:Header/>
    <soapenv:Body>
        <web:MyRequest>
            <web:Parameter1>Value1</web:Parameter1>
            <web:Parameter2>Value2</web:Parameter2>
        </web:MyRequest>
    </soapenv:Body>
</soapenv:Envelope>
"""
testRequest.setRequestContent(requestBody)

// Execute the request
def response = testRequest.run(null, true)
def responseContent = response.getResponseContent()

// Add an assertion to check if a specific element exists in the response
def assertion = testRequest.addAssertion("Response Contains")
assertion.setConfiguration("<XPath Match='//web:SomeElement'/>")
assertion.setMessageContent(responseContent)

// Execute the assertion
assertion.assertResponse()
```

These code examples provide a practical demonstration of creating test cases, making requests, performing data-driven testing, and adding assertions in SoapUI using Groovy scripting. You can adapt and expand these examples to suit your specific testing needs.

### Project

### Service Description(Wsdl)
```wsdl
http://216.10.245.166:8080/axis2/services/EmployeeManagementService?wsdl
```

![WSDL1.png](/WSDL1.png)


![WSDL2.png](/WSDL2.png)

![WSDL3.png](/WSDL3.png)









