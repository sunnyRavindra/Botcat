---
title: Log4J
---
### Componenets

- _**LogManager**_
- _**Loggers**_
- _**Appenders**_
- _**Layouts**_

Create a new XML file – log4j.xml and place it under the Project root folder and Paste the following code in the log4j.xml file

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">

<log4j:configuration xmlns:log4j="https://jakarta.apache.org/log4j/" debug="false">

<appender name="fileAppender" class="org.apache.log4j.FileAppender">

<param name="Threshold" value="INFO" />

<param name="File" value="logfile.log"/>

<layout class="org.apache.log4j.PatternLayout">

<param name="ConversionPattern" value="%d %-5p [%c{1}] %m %n" />

</layout>

</appender>

<root>

<level value="INFO"/>

<appender-ref ref="fileAppender"/>

</root>

</log4j:configuration>
```

```java
private static Logger Log = Logger.getLogger(Log4j.class.getName());
DOMConfigurator.configure("log4j.xml");
```

### LogManager
- Creates logger and helps get the current instance of logger.
```java
Logger logger1 = LogManager.getLogger("Logger1");
		Logger logger2 = LogManager.getLogger("Logger2");
		Logger logger3 = LogManager.getLogger("Logger3");
		BasicConfigurator.configure();
		logger1.info("This is logger 1");
		logger2.info("This is logger 2");
		logger3.info("This is logger 3");	

		Enumeration loggers = LogManager.getCurrentLoggers();
```

### Appenders

- Appender appends the logs to different destinations 

Types of Appenders
- _FileAppender_
- _ConsoleAppender_
- _JDBCAppender_

### Logger

Levels 
_- Trace_

_- Debug_

_- Info_

_- Warn_

_- Error_

_- Fatal_