---
title: WSDL
---
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