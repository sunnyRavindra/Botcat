"use strict";(self.webpackChunkdaku=self.webpackChunkdaku||[]).push([[5048],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),g=s,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),s=(t(7294),t(3905));const a={title:"Python"},i=void 0,o={unversionedId:"ProgramingLanguage/Python",id:"ProgramingLanguage/Python",title:"Python",description:"Python Tutorials",source:"@site/docs/ProgramingLanguage/Python.md",sourceDirName:"ProgramingLanguage",slug:"/ProgramingLanguage/Python",permalink:"/ProgramingLanguage/Python",draft:!1,tags:[],version:"current",frontMatter:{title:"Python"},sidebar:"myAutogeneratedSidebar",previous:{title:"Java",permalink:"/ProgramingLanguage/Java"},next:{title:"JavaScript",permalink:"/ProgramingLanguage/Javascript"}},l={},u=[{value:"Basic commands",id:"basic-commands",level:3},{value:"Data Types",id:"data-types",level:3},{value:"Scanner Object in Python",id:"scanner-object-in-python",level:3},{value:"TypeCasting",id:"typecasting",level:3},{value:"If else",id:"if-else",level:3},{value:"Ternary operator",id:"ternary-operator",level:3},{value:"For loop",id:"for-loop",level:3},{value:"While loop",id:"while-loop",level:3},{value:"Functions",id:"functions",level:3},{value:"List = ArrayList",id:"list--arraylist",level:3},{value:"Dictionary",id:"dictionary",level:3},{value:"Set",id:"set",level:3},{value:"for else",id:"for-else",level:3},{value:"While Else",id:"while-else",level:3},{value:"Do While",id:"do-while",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.pythontutorial.net"},"Python Tutorials")),(0,s.kt)("p",null,"Python is an interpreted language.Python interpreter turns the source code, line by line, once at a time, into the machine code when the Python program executes."),(0,s.kt)("h3",{id:"basic-commands"},"Basic commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python3"},"python3 --version\npython3 app.py # Execute python file\n")),(0,s.kt)("h3",{id:"data-types"},"Data Types"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python3"},"message = r'C:\\python\\bin' # raw String \n\nmessage = f'Hi {name}' # formate String\n\ngreeting = 'Good ' 'Morning!' #  Concat String\n\ngreeting = 'Good '\ntime = 'Afternoon'\ngreeting = greeting + time + '!' # Concat Strings\n\nstr = \"Python String\" # Char in String\nprint(str[0]) # P\nprint(str[1]) # y\n\nstr = \"Python String\" # Negitive Index\nprint(str[-1])  # g\nprint(str[-2])  # n\n\nlen('Stringlength') # Length\n\nprint(\"StringSlicing\"[0:2]) # Slice\n\n# Numbers\n# Python supports integers, floats, and complex numbers\ncount = 10000000000\ncount = 10_000_000_000 \n\n# Boolean\n>>> bool('Hi')\nTrue\n>>> bool('')\nFalse\n>>> bool(100)\nTrue\n>>> bool(0)\nFalse\n\n# Constants\n# Python doesn\u2019t support Constants\nFILE_SIZE_LIMIT = 2000\n\n# Comments\n# This is a basic Comment and Python does not support multiline comments\n# One line Doc String \n\"\"\" sort the list using quicksort algorithm \"\"\"\n# MultiLine Doc String \n    \"\"\" increase salary base on rating and percentage\n    rating 1 - 2 no increase\n    rating 3 - 4 increase 5%\n    rating 4 - 6 increase 10%\n    \"\"\"\n\n")),(0,s.kt)("h3",{id:"scanner-object-in-python"},"Scanner Object in Python"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'input("Enter the Value that you want to enter: ")\n')),(0,s.kt)("h3",{id:"typecasting"},"TypeCasting"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'int(string)\nfloat(string)\nbool(val)\nstr(val)\n\n# Object.class\ntype("SomeString")\ntype(100)\ntype(0.5)\ntype(True)\n\n')),(0,s.kt)("h3",{id:"if-else"},"If else"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'if (2 > 2):\n    print("Both the values are same")\nelif (2 < 1):\n    print("I am in elseif block")\nelse:\n    print("we are now in else Block")\n')),(0,s.kt)("h3",{id:"ternary-operator"},"Ternary operator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"ticket_price = 20 if int(age) >= 18 else 5\n")),(0,s.kt)("h3",{id:"for-loop"},"For loop"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"for i in range(10):\n    print(f\"Index of i at current loop is : {i}\")\n\nfor i in range(100, 110):\n    print(f\"index of i at current loop is : {i}\")\n\nfor i in range(1000, 2000, 100):\n    print(f\"index of i at current loop is : {i}\")\n\n# Enumerate returns the tulip with index and the value \n# By default the Enumerate starts with 0 index but you can specify to start at any number by giving second parameter as the starting index \nfor item in enumerate(cities):\n    print(item)\n\n### Iterable \nfor index in range(3): # here range is iterable\n    print(index)\n\nstr = 'Iterables'\nfor ch in str: # Here String is Iterable\n    print(ch)\n\nranks = ['high', 'medium', 'low']\n\nfor rank in ranks: # List and Tulips are also iterables\n    print(rank)\n\n# Iterator\ncolors = ['red', 'green', 'blue'] \ncolors_iter = iter(colors) # ones an element accessed it gets deleted from the iterator object and Ierator is also Iterable\ncolor = next(color_iter)\ncolor = next(color_iter)\ncolor = next(color_iter)\n\n# Map\niterator = map(fn, list)\nbonuses = [100, 200, 300]\niterator = map(lambda bonus: bonus*2, bonuses) # This returns an Iterator and you can change it to list by using list(iterator)\n\n# Filter\nfilter(fn, list)\nscores = [70, 60, 80, 90, 50]\nfiltered = filter(lambda score: score >= 70, scores)\nprint(list(filtered))\n\n# Reduce\nfrom functools import reduce\nreduce(fn,list)\nfrom functools import reduce\nscores = [75, 65, 80, 95, 50]\ntotal = reduce(lambda a, b: a + b, scores)\n\n# list comprehensio for \nsquares = [number**2 for number in numbers]\nhighest_mountains = [m for m in mountains if m[1] > 8600]\n\n")),(0,s.kt)("h3",{id:"while-loop"},"While loop"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"max = 5\ncounter = 0\n\nwhile counter < max:\n    print(counter)\n    counter += 1\n\n# break and Continue is used in while loop \n\n# The pass statement is a statement that does nothing. It\u2019s just a placeholder for the code that you\u2019ll write in the future.\ncounter = 1\nmax = 10\nif counter <= max:\n    counter += 1\nelse:\n    pass\n")),(0,s.kt)("h3",{id:"functions"},"Functions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},'# Function with return type and default values\n# Default values should be at the end of the normal arguments\ndef greet(name, message=\'Hi\'):\n    return f"{message} {name}"\n\n# Lambda Functions\nlambda first_name,last_name: f"{first_name} {last_name}"\n\n')),(0,s.kt)("h3",{id:"list--arraylist"},"List = ArrayList"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"numbers = [1, 3, 2, 7, 9, 4]\n\n# Append\n\nnumbers.append(100) \nnumbers[2] = 0 \n\n# insert\nnumbers.insert(2, 100) \n\n# del\ndel numbers[0] = arrayList.remove(index) in java \n\n# pop\nlast = numbers.pop() \nnumbers.remove(9) # This removes the first element by value\n\n# sort\nlist.sort() \nlist.sort(reverse=true)  # This reverses the sorting order\n\n# Sorted\nnewList = sorted(list,reverse=True) # This returns the sorted list to onather list variable  \n\n# Slice\ncolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']\nsub_colors = colors[1:4: 2]  # last parameter is the step \n\n# Reverse a list using Slice\ncolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']\nreversed_colors = colors[::-1]\n\nprint(reversed_colors)\n\n# Partial List update using Slice\ncolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']\ncolors[0:2] = ['black', 'white']\n\nprint(colors)\n\n# Changing size of list using Slice \ncolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']\nprint(f\"The list has {len(colors)} elements\")\n\ncolors[0:2] = ['black', 'white', 'gray']\nprint(colors)\nprint(f\"The list now has {len(colors)} elements\")\n\n# Delete using Slice\ndel colors[2:5]\n\n# sequence unpacking\ncolors = ['red', 'blue', 'green']\nred, blue, green = colors\nred, blue = colors # This will throw an error\nred, blue, *other = colors # This will unpack the last remaining elements as a lsit in the variable starting with *\n\n# Finding Index of an element in the list\ncities = ['New York', 'Beijing', 'Cairo', 'Mumbai', 'Mexico']\nresult = cities.index('Mumbai')\n\n# Tuples - Its a FINAL ArrayList in java and is immutable\nrgb = ('red', 'green', 'blue')\n")),(0,s.kt)("h3",{id:"dictionary"},"Dictionary"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"empty_dict = {}  # Its Like HashMap and Key is immutable\nperson = {\n    'first_name': 'John',\n    'last_name': 'Doe',\n    'age': 25,\n    'favorite_colors': ['blue', 'green'],\n    'active': True\n}\ndict[key]\nprint(person['first_name'])\nprint(person['last_name'])\nperson.get('first_name')\nperson.get('last_name')\nssn = person.get('ssn', '00') # returns 00 default value instead of none if the value is not present \nperson['gender'] = 'Famale' # adding /modifying new \ndel dict[key] # removing key value\nprint(person.items()) # loop through the dict , this returns dict as list of tuples\nfor key, value in person.items(): # using for loop\n    print(f\"{key}: {value}\")\nfor key in person.keys(): # list only keys\n    print(key)\nfor key in person: # list only keys this is by default so dont have to specify key() function\n    print(key)\nfor value in person.values(): # .values() loop through all the values\n    print(value)\n\n# Dict comprehension\nnew_stocks = {symbol: price * 1.02 for (symbol, price) in stocks.items()} # map\nselected_stocks = {s: p for (s, p) in stocks.items() if p > 200} # filter\n")),(0,s.kt)("h3",{id:"set"},"Set"),(0,s.kt)("p",null,"Elements in a set cannot be changed. For example, they can be numbers, strings, and tuples, but cannot be lists or dictionaries."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"skills = {'Python programming','Databases', 'Software design'}\nempty_set  = set() # you cant use empty_set = {} as this will instanciate empty dictionary\nskills = set(['Problem solving','Critical Thinking']) # can create set this way too\nlen(set)\nskills = {'Python programming', 'Software design'}\nskills.add('Problem solving') # Adding Elements\nset.remove(element)\nset.discard(element) # this removes the element and if element not present then there is no error \nset.pop() # removes an unspecified value from the given set\nset.clear() # Removes all the elements from a given set\nskills = {'Problem solving', 'Software design', 'Python programming'}\nskills = frozenset(skills) # This returned a copy of immutable set\ntags = {'Django', 'Pandas', 'Numpy'}\nlowercase_tags = set(map(lambda tag: tag.lower(), tags))\n{expression for element in set if condition}\nlowercase_tags = {tag.lower() for tag in tags}\nnew_tags = {tag.lower() for tag in tags if tag != 'Numpy'}\nnew_set = set.union(another_set, ...) # union Operator can comvine any iterable and set and convert them to set\ns = s1.union(s2)\nnew_set = set1 | set2 # union using pipe operator\ns = s1 | s2 # Pipe Operator only combines Set's\nnew_set = set1.intersection(set2, set3, ...)\ns = s1.intersection(s2) # This can use any iterable and convert to set\nnew_set = s1 & s2 & s3 & ...\ns = s1 & s2 # This can only use set\nset1.difference(s2, s3, ...)\ns = s1 - s2\ns = s1.symmetric_difference(s2)\ns = s1 ^ s2\nset_a.issubset(set_b)\nset_a <= set_b # Subset\nset_a < set_b # True subset\nset_a.issuperset(set_b)\nresult = numbers.issuperset(scores)\nset_a >= set_b\nset_a > set_b\nset_a.isdisjoint(set_b)\nresult = odd_numbers.isdisjoint(even_numbers)\n")),(0,s.kt)("h3",{id:"for-else"},"for else"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"for person in people:\n    if person['name'] == name:\n        print(person)\n        break\nelse:\n    print(f'{name} not found!')\n")),(0,s.kt)("h3",{id:"while-else"},"While Else"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"while index < len(basket):\n    item = basket[index]\n    # check the fruit name\n    if item['fruit'] == fruit:\n        print(f\"The basket has {item['qty']} {item['fruit']}(s)\")\n        found_it = True\n        break\n\n    index += 1\nelse:\n    qty = int(input(f'Enter the qty for {fruit}:'))\n    basket.append({'fruit': fruit, 'qty': qty})\n    print(basket)\n")),(0,s.kt)("h3",{id:"do-while"},"Do While"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Python"},"do\n    # code block\nwhile condition\n\n")))}m.isMDXComponent=!0}}]);