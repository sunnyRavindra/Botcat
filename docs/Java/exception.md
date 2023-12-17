---
title: Java Exceptions
---
In Java, exceptions are categorized into two main types: checked exceptions and unchecked exceptions. The key difference between them lies in how the compiler enforces handling or declaration.

### Checked Exceptions:

1. **Checked by Compiler:**
   - Checked exceptions are checked at compile-time by the Java compiler.
   - If a method can potentially throw a checked exception, the compiler enforces that the method must either handle the exception using a `try-catch` block or declare that it throws the exception using the `throws` clause in the method signature.

2. **Examples of Checked Exceptions:**
   - `IOException`
   - `SQLException`
   - `FileNotFoundException`

3. **Handling Checked Exceptions:**
   - Developers are required to handle checked exceptions explicitly, either by catching them using a `try-catch` block or by declaring that the method may throw the exception using the `throws` clause.

```java
public void readFile() throws IOException {
    // code that may throw IOException
}
```

### Unchecked Exceptions (Runtime Exceptions):

1. **Not Checked by Compiler:**
   - Unchecked exceptions, also known as runtime exceptions, are not checked at compile-time by the compiler.
   - Developers are not required to handle or declare unchecked exceptions explicitly.

2. **Examples of Unchecked Exceptions:**
   - `NullPointerException`
   - `ArrayIndexOutOfBoundsException`
   - `ArithmeticException`

3. **Handling Unchecked Exceptions:**
   - While developers are not obligated to handle unchecked exceptions, it is still considered good practice to catch them in appropriate situations to prevent unexpected program termination.

```java
public void divide(int a, int b) {
    if (b != 0) {
        int result = a / b;
        System.out.println("Result: " + result);
    } else {
        System.out.println("Cannot divide by zero!");
    }
}
```

### Summary:

- **Checked Exceptions:**
  - Checked at compile-time.
  - Must be handled or declared using `throws`.
  - Typically represents external factors that a program cannot control (e.g., file I/O, network operations).
  - By default, Checked Exceptions are not forwarded in calling chain (propagated).

- **Unchecked Exceptions (Runtime Exceptions):**
  - Not checked at compile-time.
  - Handling is optional, but it's still recommended for robust code.
  - Often represents programming errors (e.g., null references, array index out of bounds).
  - By default Unchecked Exceptions are forwarded in calling chain (propagated).

In practice, checked exceptions are used for conditions that a well-behaved application should anticipate and recover from, while unchecked exceptions are often used for unexpected and unrecoverable errors in the program logic.


### USer Defined Exceptions

```java
    // class represents user-defined exception  
    class UserDefinedException extends Exception  
    {  
        public UserDefinedException(String str)  
        {  
            // Calling constructor of parent Exception  
            super(str);  
        }  
    }  
    // Class that uses above MyException  
    public class TestThrow3  
    {  
        public static void main(String args[])  
        {  
            try  
            {  
                // throw an object of user defined exception  
                throw new UserDefinedException("This is user-defined exception");  
            }  
            catch (UserDefinedException ude)  
            {  
                System.out.println("Caught the exception");  
                // Print the message from MyException object  
                System.out.println(ude.getMessage());  
            }  
        }  
    }   

```

In Java, `throws` and `throw` are related to exception handling but serve different purposes.

### `throws`:

1. **Used in Method Signature:**
   - `throws` is used in the method signature to declare that a method may throw one or more types of exceptions.
   - It is part of the method declaration and indicates that the method doesn't handle the specified exceptions itself but allows them to propagate to the calling code.

2. **Example:**
   ```java
   public void myMethod() throws IOException, SQLException {
       // method code that may throw IOException or SQLException
   }
   ```

3. **Propagation of Exceptions:**
   - When a method declares `throws` for certain exceptions, it informs the caller that these exceptions might occur, and the caller is responsible for handling or declaring them.

### `throw`:

1. **Used to Explicitly Throw an Exception:**
   - `throw` is used within the body of a method to explicitly throw an exception.
   - It is used when a specific condition occurs, and the program needs to indicate that an exceptional situation has occurred.

2. **Example:**
   ```java
   public void validateAge(int age) {
       if (age < 0) {
           throw new IllegalArgumentException("Age cannot be negative");
       }
       // rest of the method code
   }
   ```

3. **Creating and Throwing Custom Exceptions:**
   - Developers can use `throw` to create and throw custom exceptions when the standard Java exceptions don't precisely fit the situation.

   ```java
   public void myMethod(int value) {
       if (value < 0) {
           throw new MyCustomException("Invalid value: " + value);
       }
       // rest of the method code
   }
   ```

### Summary:

- **`throws`:**
  - Used in the method signature to declare that a method may throw one or more types of exceptions.
  - Indicates that the method does not handle these exceptions and expects the calling code to handle or declare them.

- **`throw`:**
  - Used within the body of a method to explicitly throw an exception.
  - Indicates that a specific exceptional situation has occurred, and the program needs to handle it.

In general, `throws` is part of the method declaration, indicating what exceptions might be thrown, while `throw` is used within the method body to actually throw an exception. They work together in the process of exception handling, allowing developers to manage exceptional situations in their code.

### Overriding 

    If the superclass method does not declare an exception
        If the superclass method does not declare an exception, subclass overridden method cannot declare the checked exception but it can declare unchecked exception.
    If the superclass method declares an exception
        If the superclass method declares an exception, subclass overridden method can declare same, subclass exception or no exception but cannot declare parent exception.

