# Interview Prep 1

## JS

### Data types in JS:

* Primitives:
  * Boolean
  * Null
  * Undefined
  * Number
  * String
  * Symbol \(in EC6\)
* Object
  * Array
  * Date
  * RegExp
  * Map and WeakMap
  * Set and WeakSet
  * Function

### Scoping:

When and where variables, constants, and arguments are considered to be defined/visible/available

* module scoping/global scoping:
  * Objects declared outside of any function 
  * Visible everywhere in a JS program
  * Use it without declaring - not allowed under 'strict' mode
* block scoping:
  * Objects declare inside a block are visible only to code that appears inside that block
  * keywords 'let' and 'const'
* functional scoping:
  * Objects declared inside a function are visible only to code that appears inside that function
  * keywords 'var'

### Difference var vs. let:

* var: function scoping
* let: block scoping, not hoisted, when a let variable is accessed out of its scope, a ReferenceError is thrown with message "name is not defined"

### What is hoisting

* Move all declarations to the top of the current scope \(to the top of the current script or the current function\)
* Only hoists declarations, not initializations
* Only works for function scope

### What is strict mode \(use strict\)

* A literal expression that is used to indicate the code should be executed in "strict mode"
* With strict mode, you cannot use undeclared/global variables 
* Function parameter names need to be unique
* It helps you write safer JS code by throwing an error

### How many ways you can declare a function:

* function expression:
  * looks like a normal variable assignment
  * Behaves almost the same as function declaration, but no hoisting

```javascript
Let functionName = function (arg0, arg1, arg2) {
    // function body
}
```

* function as methods:
  * A property of an object

```javascript
const o = {
    name: "Wallace",
    bark: function (){
        return "Woof!"
    },
}
```

### Deep copy vs. Shallow copy:

* Deep copy:
  * Makes a copy of all the members of A, allocates memory in a different location for B and then assigns the copied members to B 
  * Data types: number, string, boolean
* Shallow copy:
  * Makes only a copy of the references to A into B. It is a copy of A's memory address 
  * shallow copy: array, object, and function

### Call vs. Apply functions:

* Both of them are used to invoke a function explicitly
* call\(\) requires the parameters be listed individually with a coma
* apply\(\) requires an argument array as the 2nd parameter

### Have a function name as a variable \(Referencing\) vs. Calling a function 

```javascript
function getGreeting() {
    return "Hello world!";
}

getGreeting(); // "Hello World!"
getGreeting; // function getGreeting()

const func = getGreeting; // Function referencing
func(); // "Hello World!"
```

* Have a function name as variable: referencing the function
* Call a function: execute the function ASAP, and get the returned result.

### Spread operator:

* Allows an iterable to be expanded in places.
* How do you use it?

```javascript
let arr1 = [1, 2]
let arr2 = [...arr1, 3, 4];
arr2; // [1, 2, 3, 4]
```

### How to define arrow function:

* Has a shorter syntax and lexically binds `this` value

What are the rules:

* Cannot be called with `new`, do not have a \[\[Construct\]\] method
* No function keyword
* Anomynous function without function name
* No prototype
* Can't change `this`
* No duplicate named parameters

### What is callback function:

A function that is passed to another function as a parameter and get executed within that function.

It is used to avoid waiting for a response before moving on, good for asynchronous operations

### What is IIFE:

Immediately-invoked function expression/ Self-excuting anonymous function.

Used to **avoid variable hoisting** from within blocks, protect **against polluting the global environment** and simultaneously allow **public access** to methods while retaining **privacy** for variables defined within the function.

### What is closure:

* When an inner function has access to its outer function's variables and properties
* The outer function doesn't have access to the variables and functions defined inside the inner function
* Closure make code more compact, readable, promote functional re-use, and data hiding/encapsulation
* e.g.

```javascript
function clickMaker() {
    let scopedCounter = 0;
    return function() {
        alert(scopedCounter++);
    }
}

const button = document.getElementById("btn");
button.addEventListener("click", clickMaker());
```

### How to define class in es6

### Prototype in JS

property of a function

for sharing instances/properties

### Destructing Assignment:

Split a composite object into individual variables

```javascript
const obj = {b: 2, c: 3, d: 4}
const {b, c, d} = obj;
a; // undefined
b; // 2
c; // 3
d; // 4
```

### Regular Expression:

A pattern that allows you to search in a string

### What is promise

Object that holds execution of async operations, returns the state of pending, \(either resolved, not resolved\), give success callback in success, give fail callback in fail

## React:

### What is component:

### What is state:

### State vs. Props:

props: is read-only, the data passed from parent to children

state: is immutable data within the component itself

### class component vs. functional component:

## Redux:

### What is redux?

Predictable state management

### Key concept in Redux:

Action: **A plain JS object describing the change.**

### What is action

### What is action creator?

### Why do you use action creator:

* Pass parameters into you action creator
* It can be plugged in middleware

### How do you use react-redux package

1. install react-redux package
2. provider
3. call connect function in container component

### Container component vs. Representational component

### Thunk

### How do you use thunk

* use async action creator

## Nodejs

### What is nodejs

### What is express.js

### What is mongoDB

### Mongoose:

* ORM
* Provide access for mongoDB

### Restful API



