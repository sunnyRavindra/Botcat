---
title: Python
---

[Python Tutorials](https://www.pythontutorial.net)

Python is an interpreted language.Python interpreter turns the source code, line by line, once at a time, into the machine code when the Python program executes.

```python3
python3 --version
```

### Execute Python File
```python3
python3 app.py
```

### String Literal
```python3
# Raw string ignores \
message = r'C:\python\bin' 

# String format
message = f'Hi {name}'

# Concat
greeting = 'Good ' 'Morning!'

# Concat variables
greeting = 'Good '
time = 'Afternoon'
greeting = greeting + time + '!'

# String Char
str = "Python String"
print(str[0]) # P
print(str[1]) # y

# Negitive index
str = "Python String"
print(str[-1])  # g
print(str[-2])  # n

# Length
len('Stringlength')

# Slicing strings
print("StringSlicing"[0:2])

# Numbers
# Python supports integers, floats, and complex numbers
count = 10000000000
count = 10_000_000_000

# Boolean
>>> bool('Hi')
True
>>> bool('')
False
>>> bool(100)
True
>>> bool(0)
False

# Constants
# Python doesn’t support Constants
FILE_SIZE_LIMIT = 2000

# Comments
# This is a basic Comment and Python does not support multiline comments
# One line Doc String 
""" sort the list using quicksort algorithm """
# MultiLine Doc String 
    """ increase salary base on rating and percentage
    rating 1 - 2 no increase
    rating 3 - 4 increase 5%
    rating 4 - 6 increase 10%
    """

# Scanner Object in Python
input("Enter the Value that you want to enter: ")

# TypeCasting
int(string)
float(string)
bool(val)
str(val)

# Object.class
type("SomeString")
type(100)
type(0.5)
type(True)

# If else 
if (2 > 2):
    print("Both the values are same")
elif (2 < 1):
    print("I am in elseif block")
else:
    print("we are now in else Block")

# Ternary operator
ticket_price = 20 if int(age) >= 18 else 5

# For loop
for i in range(10):
    print(f"Index of i at current loop is : {i}")

for i in range(100, 110):
    print(f"index of i at current loop is : {i}")

for i in range(1000, 2000, 100):
    print(f"index of i at current loop is : {i}")

# While loop
max = 5
counter = 0

while counter < max:
    print(counter)
    counter += 1

# break and Continue is used in while loop 

# The pass statement is a statement that does nothing. It’s just a placeholder for the code that you’ll write in the future.
counter = 1
max = 10
if counter <= max:
    counter += 1
else:
    pass

# Function with return type and default values
# Default values should be at the end of the normal arguments
def greet(name, message='Hi'):
    return f"{message} {name}"


```
