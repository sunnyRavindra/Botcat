---
title: SQL Injection
---

SQL injection is a type of cyberattack that occurs when an attacker inserts malicious SQL (Structured Query Language) code into a vulnerable SQL query. SQL is a language used for managing and manipulating relational databases, and SQL injection attacks take advantage of poorly sanitized or unprotected inputs in web applications or software that interact with databases.

Here's how SQL injection works:

1. **Vulnerable Input**: In a web application, user inputs such as text fields, search boxes, or URL parameters are often used in SQL queries without proper validation or sanitization.

2. **Malicious Input**: An attacker submits carefully crafted input that includes SQL code in these vulnerable input fields. For example, they might input something like `' OR 1=1; --`.

3. **Manipulating Queries**: The attacker's input is then concatenated with the original SQL query executed by the application. If the application doesn't properly validate or sanitize the input, the resulting query becomes a combination of the original query and the malicious SQL code.

4. **Execution**: The modified query is sent to the database server, which executes it as if it were a legitimate query. In the example above, `' OR 1=1; --`, the attacker's goal is typically to make the query always return true (1=1), allowing them to bypass authentication or access unauthorized data.

5. **Data Theft or Manipulation**: Depending on the attacker's intentions, they can use SQL injection to steal, manipulate, or delete data from the database, gain unauthorized access, or even take control of the entire application.

SQL injection attacks are a significant security concern and can have severe consequences if not properly mitigated. To prevent SQL injection, developers should use techniques such as parameterized queries or prepared statements, input validation, and output encoding to ensure that user inputs are not treated as executable SQL code. Additionally, regular security testing and code reviews can help identify and address potential vulnerabilities.

1. Check from the list if website can be exploited using SQL injection.
2. try enterting the orderby's with column 8 randomy to know the size of table.
3. try entering incorrect query to understand which sql tool is being used.
4. getting all the userid's
```bash
select * from user where username = tom or 1+1;
https://?tom or 1+1;
```


