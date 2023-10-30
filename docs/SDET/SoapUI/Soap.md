---
title: SoupUI Basics
---
### Structure of a SOAP Message

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

![soapmsg.gif](./static/soapmsg.gif)
