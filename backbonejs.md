## Backbone.js

### What is backbone.js:

* It is a framework that allows you to structure your JavaScript code in an MVC pattern. 
* The main task of backbone.js is to organize the client part of your application in a logical way and to synchronize
  the changes with the server part.

### Backbone.js uses:

* Models: Represents basic data in the framework, they are used for data storage and business logic
* Collections (sets of models): Listens to event changes on model and its views
* Views: monitor changes in the applications sate (data changes to models, user interactions, etc.) and update the view     
  accordingly. The view doesn't know anything about the HTML and CSS and each view can be updated independently when the model changes without reloading the whole page. It represents the logical chunck of the UI in the DOM.
* Routers: Decide what application state to be sent to based on user's request, used for routing the client side applications and connects them to actions and events using URL's.
* Events: bind objects and trigger custom events, also contains built-in events such as add, remove, destroy to manage your     collection

### Pros:

* Easy, fast and lightweight framework, very easy to understand the documentation and codes, which explains how it will work.
* Very easy to build your own framework into no time.
* If you want a better design with less code, then it is better to use the BackboneJS library that provides good functionality, is well organized and in a structured manner for developing your application.
* BackboneJS communicates via events; this ensures that you do not mess up the application. Your code will be cleaner, nicer and easy to maintain.

### Cons:

* Instead of providing structure, it provides some basic tools to create structure. So, you have to depend on developers to
  decide how to structure the application.
* Redraws the DOM based on changes to models and collections, which is not very efficient, slows down page rendering
* To update the view whenever your model changes, and to update the model whenever your view changes, you have to write a lot
  of boilerplate, because of lack supoort for two-way data binding.

### Two way data binding:
* It means when you change something in the browser (e.g. the content of a form input), it immediately updates the place where
you store that data. or when you want ot perform layout in JS and react to changes in some DOM element size.
* In terms of react:
  * It enforces that some value in the DOM is always consistent with some React `state` - is concise and supports a wide
    variety of applications.
  * You can use `LinkedStateMixin`, which adds a method to your React component called `linkState()`. `linkState()` returns
    a `valueLink` object which contains the current value of the React state and a callback to change it.
  * e.g. Sample without `LinkedStaetMixin`
  ```javascript
  var createReactClass = require('create-react-class');
  var NoLink = createReactClass({
    getInitialState: function() {
      return {message: 'Hello!'};
    },
    handleChange: function (event) {
      this.setState({message: event.target.value});
    },
    render: function() {
      var message = this.state.message;
      return <input type="text" value={message} onChange={this.handleChange} />;
    }
  });
  
  ```
  * e.g. Sample with `LinkedStateMixin`
  ```javascript
  var createReactClass = require('create-react-class');
  
  var WithLink = createReactClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
      return {message: 'Hello!'};
    },
    render: function() {
      return <input type="text" valueLink={this.linkState('message')} />;
    }
  });
  ```
  * Data binding in React can be achieved by using a `controlled input`. A controlled input is achieved by binding the value   
    to a `state variable` and a `onChange` event to change the state as the input value changes.
  
  * Another example: https://medium.com/front-end-hacking/tutorial-react-two-way-data-binding-2018-b935cb200964

## MVC

### How does MVC work?
* The user interacts with the application system through the controller. 
  The controller perceives user actions, interprets them and informs the model of changes required in accordance with the actions.
* The model is in charge of providing access to the data available in the system, receives a change request from the controller, and executes it.
* All these processes are invisible to the user: his/her task is to press a button (or perform some other action with the interface) and get the result. 
  And as for the presentation of the result, this is the task of the view.
  Upon receiving the data from the model, the view displays them for the user.

The pattern sets no fixed relationship between the data and their presentation. That is, the same data can be displayed, 
for example, in the form of text, a table, a diagram – depending on the user’s action and the way controller interprets them.

## Kraken.js

### What is Kraken:

* A secure and scalable layer that extends express by providing structure and convention. 
* Keeps your code organized by splitting up the configuration, content + temples and routing logic into different places so that it is easy to keep track of everything and to easily swap out components.

