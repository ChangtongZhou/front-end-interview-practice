# AngularJS

## What is Angular JS? 

* Angular JS is a JS framework, used to create single web page application 
* It follows MVC \(Model View Controller\) pattern. It is open source, cross browser compliant and easy to maintain 

## Advantages of AngularJS? 

* allows us to create a single page application 
* follows MVC pattern 
* predefined form validations
* supports animation 
* open source 
* cross browser compliant 
* supports two way data binding 
* its code are unit testable 

## Disadvantages of AngularJS? 

* JS Dependent: if end user disables JS, AngularJS will not work 
* Not Secured: It is JS based framework, so it is not safe to authenticate user through AngularJS only. 

## Is AngularJS dependent on JQuery?

 No

## What IDE's are currently used for the development of AngularJS? 

Eclipse, Visual Studio, WebStorm, TextMate

## Features of AngularJS 

* MVC 
* Validations 
* Modules 
* Directives 
* Templates 
* Scope 
* Expressions 
* Data Binding 
* Filters 
* Services 
* Routing 
* Dependency Injection 
* Testing 

## Directives: 

* Directives are the markers on DOM element that is used to specify behavior on that DOM element. All AngularJS directives start with the word "ng" 
* There are many built-in directives such as "ng-app", "ng-model", "ng-controller", "ng-repeat" etc.
* Types of directives: 
  * Common directive 
  * CSS class directive 
  * Attribute directive 
  * Event directive 
  * e.g.
  * `<input type="text" id="empName" ng-model="EmpName">`

## What ways can you use a directive? 

You can use a directive as an element, attribute or class name. To define the way your directive will be used, you need to set the restrict option in the directive declaration. The restrict option can be set to:

* "A" - Only matches attribute name 
* "C"- Only matches class name 
* "E"- Only matches element name 

## Controllers: 

* Controllers are JS functions that are used to provide data and logic to HTML UI. 
* It acts as an interface between server and HTML UI.

## Usage of controllers: 

* Set up initial state of the $scope object 
* Add behavior to the $scope object 

## Data Binding: 

* Data binding is the automatic synchronization of data between model and view. 
* 2 ways of data binding:
  * One way data binding \(classical template\):
    * the scope variable in the HTML is set to the first value that its model is assigned to 
  * Two way data binding \(AngularJS template\):
    * the scope variable changes its value every time its model binds to a different value

## Digest cycle: 

During every digest cycle, all new scope model values are compared against the previous values. This is called **dirty checking**. If change is detected, watches set on the new model are fired and another digest cycle executes. This goes on until all models are stable.

The digest cycle is triggered automatically but it can be called manually using ".$apply\(\)"

## Services: 

Services are objects that can be used to store and share data across the application. AngularJS offers many built-in services such as $http. i.e. used to make XMLHttpRequest.

## Scope: 

* Scope is an object that represents application model, it joins the controller with the views. The controller sets properties on the scope and the view binds to them. 
* Each AngularJS application can have only one root scope but can have multiple child scope created by child controllers. When the new scopes are created, they are added to their parent root scope. This creates a hierarchical structure when they are attached. 

## Template: 

A template consists of HTML, CSS and AngularJS directives that are used to render dynamic view.

## Expression: 

* Expressions are the code snippets that resolves to a value. 
* AngularJS expressions are placed inside `{{expression}}` . 
* e.g.  AngularJS supports one-time binding expressions. 

## Filter: 

A filter is used to format the value of expression to display the formatted output. AngularJS enables us to write our own filter.

## AngularJS vs. ReactJS:

**React** puts 'HTML' into **JS**.”. This is a good thing, because Javascript is more powerful than HTML. 

The **Angular** templates are enhanced HTML with special **Angular** language \(Things like ngIf **or** ngFor\).

While **React** requires knowledge of JavaScript, **Angular** forces you to learn **Angular**-specific syntax.

Resources:

[https://www.w3schools.com/angular/](https://www.w3schools.com/angular/)

[https://www.simplilearn.com/angular-js-interview-questions-and-answers-article](https://www.simplilearn.com/angular-js-interview-questions-and-answers-article)

