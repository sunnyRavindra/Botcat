---
title: Python
---

[Python Tutorials](https://www.pythontutorial.net)

Python is an interpreted language.Python interpreter turns the source code, line by line, once at a time, into the machine code when the Python program executes.

### Basic commands
```python3
python3 --version
python3 app.py # Execute python file
```

### Data Types
```python3
message = r'C:\python\bin' # raw String 

message = f'Hi {name}' # formate String

greeting = 'Good ' 'Morning!' #  Concat String

greeting = 'Good '
time = 'Afternoon'
greeting = greeting + time + '!' # Concat Strings

str = "Python String" # Char in String
print(str[0]) # P
print(str[1]) # y

str = "Python String" # Negitive Index
print(str[-1])  # g
print(str[-2])  # n

len('Stringlength') # Length

print("StringSlicing"[0:2]) # Slice

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

```

### Scanner Object in Python
```Python
input("Enter the Value that you want to enter: ")
```

### TypeCasting
```Python
int(string)
float(string)
bool(val)
str(val)

# Object.class
type("SomeString")
type(100)
type(0.5)
type(True)

```


### If else 
```Python
if (2 > 2):
    print("Both the values are same")
elif (2 < 1):
    print("I am in elseif block")
else:
    print("we are now in else Block")
```

### Ternary operator
```Python 
ticket_price = 20 if int(age) >= 18 else 5
```

### For loop
```Python
for i in range(10):
    print(f"Index of i at current loop is : {i}")

for i in range(100, 110):
    print(f"index of i at current loop is : {i}")

for i in range(1000, 2000, 100):
    print(f"index of i at current loop is : {i}")

# Enumerate returns the tulip with index and the value 
# By default the Enumerate starts with 0 index but you can specify to start at any number by giving second parameter as the starting index 
for item in enumerate(cities):
    print(item)

### Iterable 
for index in range(3): # here range is iterable
    print(index)

str = 'Iterables'
for ch in str: # Here String is Iterable
    print(ch)

ranks = ['high', 'medium', 'low']

for rank in ranks: # List and Tulips are also iterables
    print(rank)

# Iterator
colors = ['red', 'green', 'blue'] 
colors_iter = iter(colors) # ones an element accessed it gets deleted from the iterator object and Ierator is also Iterable
color = next(color_iter)
color = next(color_iter)
color = next(color_iter)

# Map
iterator = map(fn, list)
bonuses = [100, 200, 300]
iterator = map(lambda bonus: bonus*2, bonuses) # This returns an Iterator and you can change it to list by using list(iterator)

# Filter
filter(fn, list)
scores = [70, 60, 80, 90, 50]
filtered = filter(lambda score: score >= 70, scores)
print(list(filtered))

# Reduce
from functools import reduce
reduce(fn,list)
from functools import reduce
scores = [75, 65, 80, 95, 50]
total = reduce(lambda a, b: a + b, scores)

# list comprehensio for 
squares = [number**2 for number in numbers]
highest_mountains = [m for m in mountains if m[1] > 8600]

```


### While loop
```Python
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
```

### Functions
```Python
# Function with return type and default values
# Default values should be at the end of the normal arguments
def greet(name, message='Hi'):
    return f"{message} {name}"

# Lambda Functions
lambda first_name,last_name: f"{first_name} {last_name}"

```

### List = ArrayList
```Python
numbers = [1, 3, 2, 7, 9, 4]

# Append

numbers.append(100) 
numbers[2] = 0 

# insert
numbers.insert(2, 100) 

# del
del numbers[0] = arrayList.remove(index) in java 

# pop
last = numbers.pop() 
numbers.remove(9) # This removes the first element by value

# sort
list.sort() 
list.sort(reverse=true)  # This reverses the sorting order

# Sorted
newList = sorted(list,reverse=True) # This returns the sorted list to onather list variable  

# Slice
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
sub_colors = colors[1:4: 2]  # last parameter is the step 

# Reverse a list using Slice
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
reversed_colors = colors[::-1]

print(reversed_colors)

# Partial List update using Slice
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors[0:2] = ['black', 'white']

print(colors)

# Changing size of list using Slice 
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
print(f"The list has {len(colors)} elements")

colors[0:2] = ['black', 'white', 'gray']
print(colors)
print(f"The list now has {len(colors)} elements")

# Delete using Slice
del colors[2:5]

# sequence unpacking
colors = ['red', 'blue', 'green']
red, blue, green = colors
red, blue = colors # This will throw an error
red, blue, *other = colors # This will unpack the last remaining elements as a lsit in the variable starting with *

# Finding Index of an element in the list
cities = ['New York', 'Beijing', 'Cairo', 'Mumbai', 'Mexico']
result = cities.index('Mumbai')

# Tuples - Its a FINAL ArrayList in java and is immutable
rgb = ('red', 'green', 'blue')
```

### Dictionary 
```Python
empty_dict = {}  # Its Like HashMap and Key is immutable
person = {
    'first_name': 'John',
    'last_name': 'Doe',
    'age': 25,
    'favorite_colors': ['blue', 'green'],
    'active': True
}
dict[key]
print(person['first_name'])
print(person['last_name'])
person.get('first_name')
person.get('last_name')
ssn = person.get('ssn', '00') # returns 00 default value instead of none if the value is not present 
person['gender'] = 'Famale' # adding /modifying new 
del dict[key] # removing key value
print(person.items()) # loop through the dict , this returns dict as list of tuples
for key, value in person.items(): # using for loop
    print(f"{key}: {value}")
for key in person.keys(): # list only keys
    print(key)
for key in person: # list only keys this is by default so dont have to specify key() function
    print(key)
for value in person.values(): # .values() loop through all the values
    print(value)

# Dict comprehension
new_stocks = {symbol: price * 1.02 for (symbol, price) in stocks.items()} # map
selected_stocks = {s: p for (s, p) in stocks.items() if p > 200} # filter


```

### Set

Elements in a set cannot be changed. For example, they can be numbers, strings, and tuples, but cannot be lists or dictionaries.
```Python

skills = {'Python programming','Databases', 'Software design'}
empty_set  = set() # you cant use empty_set = {} as this will instanciate empty dictionary
skills = set(['Problem solving','Critical Thinking']) # can create set this way too
len(set)
skills = {'Python programming', 'Software design'}
skills.add('Problem solving') # Adding Elements
set.remove(element)
set.discard(element) # this removes the element and if element not present then there is no error 
set.pop() # removes an unspecified value from the given set
set.clear() # Removes all the elements from a given set
skills = {'Problem solving', 'Software design', 'Python programming'}
skills = frozenset(skills) # This returned a copy of immutable set
tags = {'Django', 'Pandas', 'Numpy'}
lowercase_tags = set(map(lambda tag: tag.lower(), tags))
{expression for element in set if condition}
lowercase_tags = {tag.lower() for tag in tags}
new_tags = {tag.lower() for tag in tags if tag != 'Numpy'}
new_set = set.union(another_set, ...) # union Operator can comvine any iterable and set and convert them to set
s = s1.union(s2)
new_set = set1 | set2 # union using pipe operator
s = s1 | s2 # Pipe Operator only combines Set's



```
