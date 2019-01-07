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

### Falsy / Truthy Value:

* Falsy:
  * undefined
  * null
  * NaN
  * 0
  * Empty String: '', ``, ""
  * false
* Truthy: All values are truthy value unless they are defined as falsy

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

Why do we use arrow function?

* They are more compact and offer a concise syntax for writing function expressions

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

* Use class keyword
* Define constructor and methods inside 
  * one constructor function per class
* Just syntax sugar over existing existing prototypal inheritance mechanism
  * creates a constructor function with same name as class
  * adds methods to prototype
* Subclass:
  * inherit with extends keyword
  * In subclasses, constructor must call super\(args\) and it must be before this is accessed
    * because the highest superclass creates the object

### Prototype in JS

* An object containing properties and functions that should be available to all instances of a particular reference class
* for sharing instances/properties

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

* A pattern that allows you to match a substring within a string and optionally replace it.
* `/^HTML/      //mathes the letters H T M L at the start of a string`
* `/[1-9][0-9]*/     //mathes a non-zero digit, followed by any # of digits`
* `/\bjavascript\b/I     //maches "javascript" as a word, case-insensitive`

### What is promise

* Represents the eventual completion of an async operation
* An Object that holds execution of async operations, returns the state of pending, \(either resolved, not resolved\), give success callback in success, give fail callback in fail

### What is JSON?

* Javascript Object Notation
* A simplified form of XML and lightweight, it is syntactically identical to the code for creating JavaScript objects, easy to convert to and from JavaScript objects
* Used to transport data:
  * especially between a server and its clients
* Used to store data:
  * such as in NoSQL databases

### Module:

* A single, entire JS file and can be imported by another
* Export values to be shared with other files
* Used in large complex applications and large dev teams
* It is more sharing, less conflict
* More efficient
* Horizontal scalability from day one

## BOM vs. DOM:
* BOM (Browser Object Model) consists of the objects navigator, history, screen, location and document which are children of window. 
* DOM (Document Object Model), the document object model, which represents the contents of the page. You can manipulate it using javascript.

## [React](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541):

### What is React?

A Javascript library for building user interface. It builds the UI based on components, and uses state to store the data for component, and props to pass the data among components from top to bottom.

* features:
  virtual DOM, fast, component based, one way data binding, free and open source
  
### Virtual DOM:
A virtual DOM object is a representation of a DOM object, like a lightweight copy. In React, for every DOM object, there is a corresponding "virtual DOM object." 

Every time a virtual DOM Object updated, React will compare the previous virtual DOM and updated virtual DOM Object, then update the corresponding DOM Object.

React operates on the concept of a “virtual DOM.” It maintains this virtual DOM in memory, and any time a change is made to the DOM, React does a quick diff of the changes, batches them all into one update and hits the actual DOM all at once.

First and foremost, performance-wise, you’re not constantly doing DOM updates, as with many of the other JavaScript frameworks. The DOM is a huge bottleneck with front-end performance. The second ramification is that React can render on the server just as easily as it can on the client.

### Virtual DOM vs. Real DOM:
A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

### What is component:

* A Javascript class that requires the render function to be declared
* Component takes care of a block of view in the React. It split the UI into independent, reusable pieces, and think about each piece independently
* Two types of components:
  * Stateful:
    * are always class components
    * have a state that gets initialized in the constructor
    * have lifecycle hooks
  * Stateless:
    * can be a function or a class
    * Easy to write, understand and test
    * Can avoid the `this` keyword
    * Can't have lifecycle hooks
    * Refs are not supported

### What is state:

* A place to store data inside the component
* A predefined object, owned by component, can only changed by calling setState, immutable

### State vs. Props:

props: is read-only, the data passed from parent to children, one way

state: is immutable data within the component itself, a predefined object, owned by component, can only changed by calling setState, immutable. It is private and fully controlled by the component.

### [SetState](https://reactjs.org/docs/faq-state.html)

* setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.
* Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState.  Pass an updater function instead of an object if you need to compute values based on the current state

### class component vs. functional component:

* Functional components are just JavaScript functions, they take in an optional input which is props
* Class components offer more features and with more features comes more baggage. They have state

### Container Components vs. Presentational Components:

* Presentational components:
  * are coupled with the view or how things look. 
  * accept props from their container counterpart and render them.
  * Everything that has to do with describing the UI should go here. 
  * reusable and should stay decoupled from the behavioral layer.
  * Functional components should be your first choice for writing presentational components unless a state is required
  * doesn't interact with the Redux store or make API calls. 
* Container components:

  * deal with the behavioral part. A container component tells the presentational component what should be rendered using props.
  *  If you're using Redux, a container component contains the code that dispatches an action to a store. 
  * This is the place where you should place your API calls and store the result into the component's state. 

  The usual structure is that there is a container component at the top that passes down the data to its child presentational components as props. 

### **JSX ?**

It is a syntax extension to JavaScript. It is similar with HTML syntax but you can embed javascript expression into JSX.

### Component ?

Component takes care of a block of view in the React. It split the UI into independent, reusable pieces. We have two different kinds of component, one is stateful another one is stateless component.

### HOC \(High Order Component\)?

It is a function takes a component and return a new component. It is a technique for reusing component logic

### Controlled component?

one that takes its current value through `props` and notifies changes through callbacks like `onChange`. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

e.g. For form and input tag in HTML, we need a handler for each tag. So when we type in a new text, we can change the corresponding state by calling setstate. Usually, we call this kind of component as controlled component.

### Uncontrolled component?

one that stores its own state internally, and you query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML.

### Lifecycle ?

* There are a bunch of functions that can let you run code at a specific time while the component is rendering.
* e.g. componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentDidUpdate, componentWillUnmount
* 3 life cycle: mount, update, unmount
* Lifecycle events are special methods each component can have that allow us to run customer behavior during certain times of the component's life. Times like when a component is being created and inserted into the DOM when a component receives new props and a few others.
  * constructor
  * componentWillMount
  * render
  * componentDidMount
  * componentWillReceiveProps
  * shouldComponentUpdate
  * componentWillUpdate
  * render
  * componentDidUpdate
  * componentWillUnmount

### Mounting ?

is the process of outputting the virtual representation of a component into the final UI representation.

### Handling Event ?

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

### Server side rendering vs. Client side rendering:
* Server side rendering:
  * Description: It is the ability of a front-end framework to render markup while running on a back-end system. It fully renders the React component on the server, then outputs HTML contents.
  * pros: 
    * The initial page load is relatively faster
    * It is good for SEO to understand, because search engine crawlers do not understand JS yet, your content is present before you get it, so search engines can index it and crawl it.
    * It can improve performance if your application is small
    * It is great for static sites
  * cons: 
    * Frequent server requests, slows down the performance
    * It increases response time and it can be worse if the server is busy
    * It increases response size, the page takes longer to render
    * Non-rich site interactions
  * When to use:
    * You need SEO
    * You already have a working React app, need the best possible performance, and are willing to pay for the extra server resources
  * Don't use when:
    * Your React app isn't finished yet
    * SEO on goole is good enough
    * Server resources are scarce, perhaps due to a low budget or inability to scale
  
* Client side rendering:
  * Description: Your browser downloads a minimal HTML page, then renders the JS and fills the content into it.
  * pros: 
    * Rich site interactions
    * Fast website rendering after the initial load
    * Great for web applications
    * Robust seletion of JS libraries
  * cons: 
    * the initial page load is going to be slow, because communicating over the network is slow, and it takes two round trips to the server before you can start displaying content to the user.
    * Low SEO if not implemeneted correctly
    * In most cases, requires an external library


### Refs:

Refs provide a way to access DOM nodes or React elements created in the render method.

#### When to use Refs {#when-to-use-refs}

There are a few good use cases for refs:

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

**Avoid using refs for anything that can be done declaratively.**

> Note: refer more in React and Redux section

### Router:

router: is a library to help you route to different component based on Endpoints.

route: takes a url and redirect to a React Component.

It helps you route to different pages based on url. Routing is the processing that decides what should be render on the web page for each url.

### [React Render Props Pattern](https://www.robinwieruch.de/react-render-props-pattern/):

**Def**
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic. 

A render prop is a function prop that a component uses to know what to render.

This technique makes the behavior that we need to share extremely portable. 

**Detail**
It is also called children as a function. The render prop pattern enhances React's patterns for compositions. You pass components as a function which renders them. It gives you a way to pass data from the wrapping component to its inner composed components. You can use the children prop within the render prop component. The children prop becomes a children as a funciton.

## Redux:

### What is redux?

Redux is a predictable state container for JavaScript apps. It contains store, reducers and action.

### **When to use Redux?**

* When you want to share the same state with multiple container components that don’t have direct relationships
* When there are too many props are being passed through multiple parent-and-child components
* When you want to separate state out of components for a better code structure

### Key concept in Redux:

* state read only, changes are only made by pure function, single source of truth
  * **single source of truth:** the entire state of the application will be represented by \(one store \)one JavaScript object.
  * **state read only:** The only way to change the state is to emit an action
  * **Reducers must be pure function**: Pure functions are those whose return values depend only upon the values of their arguments

### How to connect?

* we manually use store.subscribe() function to register the render function
* react-redux library, connect(), pass in a mapStateToProps function to it.

### What is action

A plain JS object describing the change.

### What is action creator?

* Action creator is functions that create actions.
* For most of the case in React and Redux, we dispatch an action using the action creator:

### Why do you use action creator:

* Pass parameters into you action creator
* It can be plugged in middleware

```javascript
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
}
dispatch(addTodo(text));
```

Instead of:

```javascript
dispatch({type: 'ADD_TODO', text: text});
```

Why using action creator:

* Basic abstraction: Rather than writing action type strings in every component that needs to create the same type of action, put the logic for creating that action in one place
* Documentation: The parameters of the function act as a guide for what data is needed to go into the action.
* Code separation: Consistently using action creators means that a component doesn't have to know any of the details of creating and dispatching the action.

### Reducer?

A pure function that takes the previous state of the app and the action being dispatched, then returns the next state of the app.

### Store?

The store binds together the 3 principles of Redux:

* Holds the current application state object
* Allows you to dispatch actions
* When you create it, you need to specify the reducer that tells how state is updated with actions.

### Pure Functions?

* Functions that return values depend only upon the values of their arguments.
* Pure functions don’t have side effects like network or database calls.
* Pure functions also do not override the values of anything

### Immutability:

#### What are the benefits of immutability?

* Bring increased performance to your app
* Leads to simpler programming and debugging, as data that never changes is easier to reason about than data that is free to be changed arbitrarily throughout your app.
* In web app context, it enables sophisticated change detection techniques to be implemented simply and cheaply, ensuring the computationally expensive process of updating the DOM occurs only when it absolutely has to

#### Why is immutability required by Redux?

* Both Redux and React-Redux employ shallow equality checking:
  * Redux's combineReducers utility shallowly checks for reference changes caused by the reducers that it calls.
  * React-Redux's connect method generates components that shallowly check reference changes to the root state, and the return values from the mapStateToProps function to see if the wrapped components actually need to re-render.

    *Such shallow checking requires immutability to function correctly.

* Immutable data management ultimately makes data handling safer
* Time-travel debugging requires that reducers be pure functions with on side effects, so that you can correctly jump bet

### Shallow equality checking:

Shallow equality checking (or reference equality) simply checks that two different variables reference the same object.

A shallow equality check is therefore as simple (and as fast) as a === b

### How do you use react-redux package

1. install react-redux package
2. provider
3. call connect function in container component


### Thunk:

* It is used to handle async actions
* Allows you to write action creators that return a function instead of an action, which give you the access to store.getState\(\) and store.dispatch\(\) inside the function
* Without Thunk, inside an action creator, there is no way we can have the access to store to dispatch other actions during async actions.
* Benefits:
  * Components aren’t aware of how action creators are implemented, and whether they care about Redux state, whether they are synchronous or asynchronous, and whether or not they call other action creators.

### How do you use thunk

* use async action creator

> Note: refer more in React and Redux section

### Middleware:

Middleware is some code you can put between the framework receiving a request, and the framework generating a response.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

### Flux vs. Redux?

* Flux is a pattern and Redux is a library.·
* Action: Flux is a javascript object, Redux can be function or promise using middleware.
* Store: flux has multiple stores, each of them is a singleton object. Can only have one dispatcher.
* Redux store expose a dispatch API, it is not a independent object.

## Nodejs

### What is nodejs:

* Server side Javascript
* Built on Google's V8, use V8 Javascript Enginne to convert Javascript code to C++
* Provide an easy way to develop scalable network servers
* **An environment to develop high performance web services**
* Using event-driven, asynchronous I/O to minimize overhead and maximize scalability
* Async Execution for V8 Javascript

### CLI:
* Description: Comand line interface. A utility/program on your computer where users type commands to perform actions or run scripts rather than clicking on the screen.
* Different types:
  * Bash on Linux
  * Terminal of Mac
  * Commpand prompt / powershell on Windows
  * Shell/Command line/terminal on Unix and Ubuntu
  
### [JWT (JSON Web Tokens)](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec)
* A JSON object that is a safe way to represent a set of information between two parties. 
* The token is composed of a header, a payload, and a signature
* A JWT is signed by the HS256 algorithem where only the authentication server and the application server know the secret key. The application server receives the secret key from the authentication server when the application sets up its authentication process. When the user makes a JWT-attached API call to the applciation, the application can perform the same signature algorithm on the JWT. The application can then verify that the signature obtained from it's own hashing operation matches the signature on the JWT itself. If the signatures match, then the JWT is valid which indicates that the API call is coming from an authentic source.
* Process steps:
  1. Create the Header
  2. Create the Payload
  3. Create the Signature
  4. Put all three JWT components together
  5. Verify the JWT
* Why use JWT?
  * It is used to prove that the sent data was actually created by an authentic source
  * The data inside a JWT is encoded and signed, the purpose of encoding data is to transform the data's structure. Signing data allows the data receiver to verify the authenticity of the source of the data.


```javascript
 firebase.auth()
 .signInWithEmailAndPassword('j@j.com', '12341234')
 .then(user => {
   return user.getToken() 
 })
 .then(token => {
   this.props.setUserJWTToken(token)
 })
 .catch(err => {
   console.error(err)
 });
```

### How to debug your application in Node.js?

* Use Node.js debugging utility called `debugger`
  * Enable it: start the Node.js with the `debug` argument followed by the path to the script to debug
  * Insert debugger: insert the statement `debugger` into the source code of a script will enable a breakpoint at that  
    position in the code
    e.g.
    ```javascript
    x = 5;
    setTimeout(() => {
      debugger;
      console.log('world');
    }, 1000);
    ```

### Difference between `setImmediate()` vs `setTimeout()`?

* `setImmediate()` is designed to execute a script once the current poll (event loop) phase completes, it excutes before `setTimeout` and `setInterval`. It doesn't follow cycle of callbacks in event loop.
* `setTimeout()` schedules a script to be run after delay has finished/ wait a set amount of time before a function is executed. It is not executed immediately, but queued so that it is executed after all the executing and currently queued eventhandlers finish first.

### `setInterval`:

* It schedules repeated execution of `callback` every `delay` milliseconds

### What is `process.nextTick()`

* It is not part of the event loop. Instead
* `nextTick` callbacks are always fired immediately after the current code is done executing and before going back to the event loop

### [What is Stream in Node.js?](https://medium.com/@vigowebs/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678)

* Streams are pipes that let you easily read data from a source and pipe it to a destination.
* Based on the methods implemented, a stream becomes readable, writable, or duplex (both readable and writable).
* Types of streams: Readable, Writable, Duplex and Transform.
* e.g. Read data: listen to data event and attach a callback. When a chunck of data is available, the readable stream emits a data event and your callback executes.
```javascript
let fs = require('fs');
let readableStream = fs.createReadStream('textFile.text');
let fileData = '';

readableStream.on('data', (chunk) => {
  fileData += chunk;
});

readableStream.on('end', () => {
  console.log(data);
})
```

### What is express.js

* A minimal and flexible Node.js web application server-side framework that provides a robust set of features for web and mobile applications
* creates a robust API quickly and easily with HTTP utility methods \(e.g. request and response\) and middleware
* provides a thin layer of fundamental web application features, without obscuring Node.js features 

### What is mongoDB

* A cross-platform, document oriented database that provides, high performance, high availability and easy scalability. 
* Works on concept of collection and document
* **Database**:
  * a physical container for collections. A single MongoDB server has multiple databases
* **Collection**:
  * A group of MongoDB documents. 
  * A collection exists within a single database
  * All documents in a collection are of similar or related purpose
* **Document**:
  * A set of key-value pairs.
  * Has dynamic schema, i.e. documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data

### Why use MongoDB:

* It enables companies build applications faster, handle highly diverse data types, and manage applications more efficiently at scale
* Development is simplified as MongoDB documents map naturally to modern, object-oriented programming languages
* MongoDB can be easily scaled within and across multiple distributed data centers
* Working with data as flexible JSON documents, rather an as rigid rows and columns, is proven to help developers move faster.

### Mongoose:

* An ODM \(Object Data Modeling\) for MongoDB and Node.js. 
* It manages relationships between data, provides schema validation and query API to help you interact with your MongoDB database
* An intermediate between mongoDB and server side language like NodeJS

### Restful API:

* An application program interface \(API\) that uses HTTP requests to GET, PUT, POST and DELETE server side objects/resources
* It is an architecture style for designing networked applciations, relies on a stateless, client-server communication protocol.
* Why is it amazing?
  * Clients \(browser\) and servers can interact in complex ways without the client knowing anything beforehand about the server and the resources it holds.
  * Flexible:
    * Data is not tied to resources or methods, Rest can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia.

### HTTP Methods:

* GET: Retreive data from a specified resource
* POST: Submit data to be processed to a specified resource (e.g. web form)
* PUT: Update a specified resource
* DELETE: Delete a specified resource

* HEAD: Same as get but does not return a body
* OPTIONS: Returns the supported HTTP methods of a server
* PATCH: Update partial resources

### Endpoints:
The URI/URL where api/service can be accessed by a client application

## CSS:

### [Preprocessor (SASS)](https://sass-lang.com/guide)

* It is a CSS pre-processor with syntax advancements. Style sheets in the advanced syntax are processed by the program, and turned into regular CSS style sheets. However, they do not extend the CSS standard itself.
* It’s intended for people who prefer conciseness over similarity to CSS. Instead of brackets and semicolons, it uses the indentation of lines to specify blocks. Files in the indented syntax use the extension .sass
* Features of SASS:
  * Inline comments
  * Local and global variables: 
    * global: e.g. creation of color names and semantics uses for those colors ($color_success)
  * Nesting: SASS let you nest your CSS selectors in a way that follows the same visual hierachy of your HTML
  * Extend/Inheritance:
   * SASS allows you to use `@extend` to share a set of CSS properties from one selector to another

## [Design Pattern:](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

* Module pattern
* Observer pattern
* Singleton pattern
* Prototype pattern

## Good Resource:
* https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237
* https://www.interviewcake.com/javascript-interview-questions
* https://frontendmasters.com/books/front-end-handbook/2018/practice/interview-q.html
* https://github.com/MaximAbramchuck/awesome-interview-questions#css
* https://docs.google.com/document/d/1q0JcH6hxIV-9WMWAb9j0lDAxF5-SBwxtxL342leedbU/edit
