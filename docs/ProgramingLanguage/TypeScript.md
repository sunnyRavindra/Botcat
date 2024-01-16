---
title: TypeScript
---
[Tutorial web site](https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/)

![TypeScript](https://www.typescripttutorial.net/wp-content/uploads/2020/05/what-is-typescript-compiler.png)

### Important commands
```Typescript
yarn install -g typescript # install
tsc --v # version
npm install -g ts-node # ts to js converter 
```

`tsc app.ts` compiles to code to js file 
`node app.js` runs the js file 
`ts-node app.ts` run ts file directly

### Types 
- Primitive types
	String 
	number
	boolean 
	null
	undefined
	symbol - constant
- Object Type

```Typescript

let newString: string = 'Hello world';

const newNumber: number = 1;

let newBool: boolean = true;

let newArray: number[] = [1, 2, 3, 4];

let newFuctionVariable: (name: string) => string;
newFuctionVariable = function(name: string) {
  return `Hi ${name}`;
}; // this is valid
// this is invalid cause we are assigning wrong data function to the variable
// newFuctionVariable = function() {
//   console.log('Hello');
// }; 
console.log('This is a String : ' + newString);
console.log('This is a Number : ' + newNumber);
console.log('This is a Boolean: ' + newBool);
console.log('This is a Array: ' + newArray);

//Object
let employee: { 
firstName: string;
lastName: string;
age: number;
jobTitle: string;
};

let big: bigint = 9007199254740991n; //bigint
//In typescript numbers are floting point and bigint are long in java

//String literals
``let profile: string = `I'm ${firstName}.  I'm a ${title}`;``
``let description = `This TypeScript string can  span multiple  lines `;``
```

### Contextual typing
`document.addEventListener('click', function (event) {     console.log(event.button); //  });`

### Tuple
- Tuple is Final list.
```Typescript
let skill: [string, number]; 
skill = ['Programming', 5];

// Optional parameters
let bgColor, headerColor: [number, number, number, number?];
```

### Enum
```Typescript
enum name {constant1, constant2, ...};
```