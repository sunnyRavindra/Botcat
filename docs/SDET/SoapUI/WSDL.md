---
title: SoupUI Basics
---
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

