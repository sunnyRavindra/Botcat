---
title: Basics
---

### Java used for developing
- Standalone Application(Windows based applications) using AWT and Swing.
- Web Applications using Servlet, JSP, Struts, Spring, Hibernate, JSF
- Java SE (Java Standard Edition) - OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc
- Java EE (Java Enterprise Edition) - Servlet, JSP, Web Services, EJB, JPA, etc.

### Garbage Collector 
programmers can’t delete the objects. To delete or recollect that memory JVM has a program called Garbage Collector. Garbage Collectors can recollect the objects that are not referenced.

### Secure
In java, we don’t have pointers, so we cannot access out-of-bound arrays i.e it shows ArrayIndexOutOfBound Exception if we try to do so. That’s why several security flaws like stack corruption or buffer overflow are impossible to exploit in Java. 

### JDK ,JRE, JVM
![[Pasted image 20231108220639.png]]

- **JDK**(Java Development Kit): JDK is intended for software developers and includes development tools such as the Java compiler, Javadoc, Jar, and a debugger.
- **JRE**(Java Runtime Environment): JRE contains the parts of the Java libraries required to run Java programs and is intended for end-users. JRE can be viewed as a subset of JDK.
- **JVM:** JVM (Java Virtual Machine) is an abstract machine. It is a specification that provides a runtime environment in which java bytecode can be executed. JVMs are available for many hardware and software platforms.

### Is a Relationship
```java
public class{

int name;
int age;
}
```
### Has a Relationship
```java
public class{

int name;
int age;

// variable of another class agregation
Address address;
}
```

### strictfp modifier
Java strictfp keyword ensures that you will get the same result on every platform if you perform operations in the floating-point variable. The precision may differ from platform to platform that is why java programming language have provided the strictfp keyword, so that you get same result on every platform. So, now you have better control over the floating-point arithmetic. 

### Java Document 
-  we must use the documentation comment /**... */ to post information for the class, method, constructor, fields etc.

```java
javadoc M.java 
```

### CompileTime Polimorphism
Methodoverridding 
Static methods cant be overridden

### String
- Immutable (Cant be changed)
- Thread Safe

### StringBuffer 
- Mutable (Can be changed)
- Good For Multitreading.
- Thread Safe
- Low performance
- If Multitreading is not required use StringBuilder

### StringBuilder
- Mutable
- Not Thread Safe
- Better performance

In Java, the terms "call by value" and "call by reference" refer to how arguments are passed to methods. However, it's important to note that Java strictly follows "call by value" semantics, and the concept of "call by reference" doesn't directly apply to Java.

### Call by Value:
   - In Java, when you pass a primitive data type (such as int, float, char, etc.) or an object reference as an argument to a method, you are passing the value of the variable. This means that a copy of the value is passed to the method, and any changes made to the parameter within the method do not affect the original variable outside the method.

   ```java
   public class CallByValueExample {
       public static void main(String[] args) {
           int x = 10;
           modifyValue(x);
           System.out.println("Original value: " + x);  // Output: Original value: 10
       }

       static void modifyValue(int num) {
           num = 20;
           System.out.println("Modified value: " + num);  // Output: Modified value: 20
       }
   }
   ```

   - In the example above, the method `modifyValue` receives a copy of the value of `x`, and changes made to `num` inside the method do not affect the original value of `x`.

### Call by Reference (Not Applicable in Java):
   - In languages that support "call by reference," when you pass an object to a method, you are passing a reference to the original object. This means that changes made to the object inside the method are reflected in the original object outside the method.

   - However, Java strictly adheres to "call by value" semantics even for object references. When you pass an object reference to a method, a copy of the reference is passed, not the actual object. Therefore, changes made to the object's state inside the method are reflected in the original object, but reassigning the reference to a new object within the method does not affect the original reference.

   ```java
   public class CallByReferenceExample {
       public static void main(String[] args) {
           StringBuilder sb = new StringBuilder("Hello");
           modifyReference(sb);
           System.out.println("Original reference: " + sb);  // Output: Original reference: Hello World
       }

       static void modifyReference(StringBuilder str) {
           str.append(" World");
           System.out.println("Modified reference: " + str);  // Output: Modified reference: Hello World
       }
   }
   ```

   - In this example, changes made to the `StringBuilder` object inside the method are reflected in the original object, but if you reassign `str` to a new `StringBuilder` object, it doesn't affect the original reference.

### Regex


    MatchResult interface
    Matcher class
    Pattern class
    PatternSyntaxException class


		boolean p= Pattern.compile(".s").matcher("ass").matches();
		
		boolean q = Pattern.matches(".S", "AS");

		boolean or = Pattern.matches("[abc]", "c"); //either a or b or c ones
		

### Validations
1	[abc]	a, b, or c (simple class)
2	[^abc]	Any character except a, b, or c (negation)
3	[a-zA-Z]	a through z or A through Z, inclusive (range)
4	[a-d[m-p]]	a through d, or m through p: [a-dm-p] (union)
5	[a-z&&[def]]	d, e, or f (intersection)
6	[a-z&&[^bc]]	a through z, except for b and c: [ad-z] (subtraction)
7	[a-z&&[^m-p]]	a through z, and not m through p: [a-lq-z](subtraction)

The quantifiers specify the number of occurrences of a character.
Regex	Description
X?	X occurs once or not at all
X+	X occurs once or more times
X*	X occurs zero or more times
X{n}	X occurs n times only
X{n,}	X occurs n or more times
X{y,z}	X occurs at least y times but less than z times

```java
    import java.util.regex.*;  
    class RegexExample4{  
    public static void main(String args[]){  
    System.out.println("? quantifier ....");  
    System.out.println(Pattern.matches("[amn]?", "a"));//true (a or m or n comes one time)  
    System.out.println(Pattern.matches("[amn]?", "aaa"));//false (a comes more than one time)  
    System.out.println(Pattern.matches("[amn]?", "aammmnn"));//false (a m and n comes more than one time)  
    System.out.println(Pattern.matches("[amn]?", "aazzta"));//false (a comes more than one time)  
    System.out.println(Pattern.matches("[amn]?", "am"));//false (a or m or n must come one time)  
      
    System.out.println("+ quantifier ....");  
    System.out.println(Pattern.matches("[amn]+", "a"));//true (a or m or n once or more times)  
    System.out.println(Pattern.matches("[amn]+", "aaa"));//true (a comes more than one time)  
    System.out.println(Pattern.matches("[amn]+", "aammmnn"));//true (a or m or n comes more than once)  
    System.out.println(Pattern.matches("[amn]+", "aazzta"));//false (z and t are not matching pattern)  
      
    System.out.println("* quantifier ....");  
    System.out.println(Pattern.matches("[amn]*", "ammmna"));//true (a or m or n may come zero or more times)  
      
    }}  

```

Regex Metacharacters

The regular expression metacharacters work as shortcodes.
Regex	Description
.	Any character (may or may not match terminator)
\d	Any digits, short of [0-9]
\D	Any non-digit, short for [^0-9]
\s	Any whitespace character, short for [\t\n\x0B\f\r]
\S	Any non-whitespace character, short for [^\s]
\w	Any word character, short for [a-zA-Z_0-9]
\W	Any non-word character, short for [^\w]
\b	A word boundary
\B	A non word boundary

```java
    import java.util.regex.*;  
    class RegexExample5{  
    public static void main(String args[]){  
    System.out.println("metacharacters d....");\\d means digit  
      
    System.out.println(Pattern.matches("\\d", "abc"));//false (non-digit)  
    System.out.println(Pattern.matches("\\d", "1"));//true (digit and comes once)  
    System.out.println(Pattern.matches("\\d", "4443"));//false (digit but comes more than once)  
    System.out.println(Pattern.matches("\\d", "323abc"));//false (digit and char)  
      
    System.out.println("metacharacters D....");\\D means non-digit  
      
    System.out.println(Pattern.matches("\\D", "abc"));//false (non-digit but comes more than once)  
    System.out.println(Pattern.matches("\\D", "1"));//false (digit)  
    System.out.println(Pattern.matches("\\D", "4443"));//false (digit)  
    System.out.println(Pattern.matches("\\D", "323abc"));//false (digit and char)  
    System.out.println(Pattern.matches("\\D", "m"));//true (non-digit and comes once)  
      
    System.out.println("metacharacters D with quantifier....");  
    System.out.println(Pattern.matches("\\D*", "mak"));//true (non-digit and may come 0 or more times)  
      
    }}

```
### Exception Types


    Checked Exception
    Unchecked Exception
    Error

