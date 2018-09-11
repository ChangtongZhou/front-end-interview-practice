# React and Redux

## **React:**

### **What is React ?**

A javascript library for building user interface. It builds the UI based on components, and uses state to store the data for component, and props to pass the data among components from top to bottom .

### Features?

virtual DOM, fast, component based, one way data binding, free and open source

### virtual DOM?

In React, for every [DOM object](http://eloquentjavascript.net/13_dom.html), there is a corresponding "virtual DOM object." A virtual DOM object is a representation of a DOM object, like a lightweight copy.

Every time a virtual DOM Object updated, React will compare the previous virtual DOM and updated virtual DOM Object, then update the corresponding DOM Object.

React operates on the concept of a “virtual DOM.” It maintains this virtual DOM in memory, and any time a change is made to the DOM, React does a quick diff of the changes, batches them all into one update and hits the actual DOM all at once.

First and foremost, performance-wise, you’re not constantly doing DOM updates, as with many of the other JavaScript frameworks. The DOM is a huge bottleneck with front-end performance. The second ramification is that React can render on the server just as easily as it can on the client.

### JSX ?

It is a syntax extension to JavaScript. It is similar with HTML syntax but you can embed javascript expression into JSX.

### Component ?

Component takes care of a block of view in the React. It split the UI into independent, reusable pieces. We have two different kinds of component, one is stateful another one is stateless component.

### HOC \(High Order Component\)?

It is a function takes a component and return a new component. It is a technique for reusing component logic

### Controlled component?

For form and input tag in HTML, we need a handler for each tag. So when we type in a new text, we can change the corresponding state by calling setstate. Usually, we call this kind of component as controlled component.

### State/props ?

**props**: being passed from parent component to child component read-only, one way

**state**: is a predefined object, owned by component, can only changed by calling setState, mutable,

### Lifecycle ?

There are a bunch of functions that can let you run code at a specific time while the component is rendering.

componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentDidUpdate, componentWillUnmount

### Mounting ?

is the process of outputting the virtual representation of a component into the final UI representation.

### Handling Event ?

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

### Router ?

router: is a library to help you route to different component based on Endpoints.

route: takes a url and redirect to a React Component.

It helps you route to different pages based on url. Routing is the processing that decides what should be render on the web page for each url.

## \*\*\*\*[**Redux?**](https://redux.js.org/faq/general)\*\*\*\*

Redux is a predictable state container for JavaScript apps. It contains store, reducers and action.

### When to use Redux?

* When you want to share the same state with multiple container components that don’t have direct relationships
* When there are too many props are being passed through multiple parent-and-child components
* When you want to separate state out of components for a better code structure

### 3 principal ?

* state read only, changes are only made by pure function, single source of truth
  * **single source of truth:** the entire state of the application will be represented by \(one store \)one JavaScript object.
  * **state read only:** The only way to change the state is to emit an action
  * **Reducers must be pure function**: Pure functions are those whose return values depend only upon the values of their arguments

### How to connect ?

1. we manually use store.subscribe\(\) function to register the render function
2. react-redux library, connect\(\), pass in a mapStateToProps function to it.

### [Immutability:](https://redux.js.org/faq/immutabledata)

#### What are the benefits of immutability?

* Bring increased performance to your app
* Leads to simpler programming and debugging, as data that never changes is easier to reason about than data that is free to be changed arbitrarily throughout your app.
* In web app context, it enables  sophisticated change detection techniques to be implemented simply and cheaply, ensuring the computationally expensive process of updating the DOM occurs only when it absolutely has to 

#### Why is immutability required by Reudx?

* Both Redux and React-Redux employ shallow equality checking:
  * Redux's `combineReducers` utility [shallowly checks for reference changes](https://redux.js.org/faq/immutabledata#how-redux-uses-shallow-checking) caused by the reducers that it calls.
  * React-Redux's `connect` method generates components that [shallowly check reference changes to the root state](https://redux.js.org/faq/immutabledata#how-react-redux-uses-shallow-checking), and the return values from the `mapStateToProps` function to see if the wrapped components actually need to re-render.

    Such [shallow checking requires immutability](https://redux.js.org/faq/immutabledata#redux-shallow-checking-requires-immutability) to function correctly.
* Immutable data management ultimately makes data handling safer
* Time-travel debugging requires that reducers be pure functions with on side effects, so that you can correctly jump bet

### Reducer?

A pure function that takes the previous state of the app and the action being dispatched, then returns the next state of the app.

### Action?

A plain JS object describing the change.

### Store?

The store binds together the 3 principles of Redux:

* Holds the current application state object
* Allows you to dispatch actions
* When you create it, you need to specify the reducer that tells how state is updated with actions.

### Pure Functions?

* Functions that return values depend only upon the values of their arguments.
* Pure functions don’t have side effects like network or database calls.
* Pure functions also do not override the values of anything

### Thunk?

* It is used to handle async actions
* Allows you to write action creators that return a function instead of an action, which give you the access to store.getState\(\) and store.dispatch\(\) inside the function
* Without Thunk, inside an action creator, there is no way we can have the access to store to dispatch other actions during async actions.
* Benefits:
  * Components aren’t aware of how action creators are implemented, and whether they care about Redux state, whether they are synchronous or asynchronous, and whether or not they call other action creators.

### Middleware?

Middleware is some code you can put between the framework receiving a request, and the framework generating a response.

Middleware functions are functions that have access to the [request object](https://expressjs.com/en/4x/api.html#req) \(req\), the [response object](https://expressjs.com/en/4x/api.html#res) \(res\), and the next middleware function in the application’s request-response cycle.

### FLUX VS REDUX ?

* Flux is a pattern and Redux is a library.·
* Action: Flux is a javascript object, Redux can be function or promise using middleware.
* Store: flux has multiple stores, each of them is a singleton object. Can only have one dispatcher.
* Redux store expose a dispatch API, it is not a independent object.
* FLUX has no reducers: [https://edgecoders.com/the-difference-between-flux-and-redux-71d31b118c1](https://edgecoders.com/the-difference-between-flux-and-redux-71d31b118c1) 

