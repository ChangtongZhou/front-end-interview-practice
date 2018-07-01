## Skills survey - UI Developer

#### Instructions:
Providing your answers back to us in this markdown document would be preferable, but not necessary.
However, if composing a different document format, please do not re-order or re-phrase the questions.

#### Questions:

- Easy: (you shouldn't need Google for these)
  - js:
    - What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

      - Ans: 
        - `null`: a variable explicitly has `null` value means it has no value.
          - How to check `null` variable?
            - compare using the strict equality operator like this:
            ```javascript
            var a = null;
            console.log (a === null); // true
            ```
        - `undefined`: a variable that has been declared, but not assigned a value, or a function doesn't return any value as the result of executing it is assigned to a variable, then the variable is undefined.
          - How to check `undefined` variable?
            - Use strick equality (===)
            - Use typeof === 'undefined'
              - e.g.
              ```javascript
              var a;
              console.log(a); // undefined
              console.log(a === undefined); // true
              console.log(typeof a == 'undefined'); // true

              function foo() {}
              var foo = foo();
              console.log(foo); // undefined
              ```

        - `undeclared`: created when you assign a value to an identifier that is not created before using `var`, `let`, `const`. 
          - How to check `undeclared` variable?
            - Use a `try/catch` block like this:
            ```javascript
            try {
              undeclaredVar
            }
            catch(e) {
              if (e.name == 'ReferenceError') {
                console.log('var is undeclared')
              }
            }
            ```

    - What is a closure, and how and why would you use one?

      - Ans: 
        - Closures are functions that have access to the outer(enclosing) function's variables. They are created whenever a function is created.
        - Closures are used for object data privacy in event handler and callback functions. When use closure for data privacy, the enclosed variables are only in scope within the outer function, you can’t get at the data from an outside scope except through the object’s privileged methods.
 

    - What is `this`? How is `this` used? Discuss at least 2 ways that you can change `this` (in either ES5 or ES6)?

    - Ans: 
      - `this` refers to the object which owns the function, but it depends on how a function is called. It can't be set by assignment during execution and it may defer each time the function is called.
      - You can use `call` or `apply` to change the context of `this`
      e.g. 
      ```javascript
      var obj = {a: "special"};
      a = "normal";

      function findThis () {
        return this.a;
      }

      findThis(); \\ "normal"
      findThis.call(obj); \\ "special"
      findThis.apply(obj); \\ "special"
      ```

  - css:
    - What is the order of greatest to least specificity?
      - classes
      - ids
      - inline style attributes
      - elements
      
      - Ans: the greatest to least order is:
        - inline style attributes
        - ids
        - classes
        - elements

    - What's the difference between:
      ```css
      .shopping-list.list-item {
          // ...
      }

      .shopping-list .list-item {
          // ...
      }

      .shoppinga-list > .list-item {
          // ...
      }
      ```
      - Ans:
      ```css
      .shopping-list.list-item {
          // ...
      }
      ```
      - means: an element with both class `shopping-list` and `list-item`
      - e.g.
        ```html
        <div class="shopping-list list-item"> (element) </div>
        ```

      ```css
      .shopping-list .list-item {
          // ...
      }
      ```
      - means: an element with class `list-item` for which its ancestor has class `shopping-list`
      - e.g.1
        ```html
        <div class="shopping-list">
            <div class="list-item">(element)</div>
        </div> 
        ```
      - e.g.2
        ```html
        <div class="shopping-list">
            <div class="other-stuff">
                <div class="list-item">(element)</div>
            </div>
        </div> 
        ```

      ```css
      .shoppinga-list > .list-item {
          // ...
      }
      ```
      - This is a child combinator, it represents a strict child/parent relationship where `list-item` is a direct child element of its parent element `shopping-list`
      - e.g.
        ```html
        <div class="shopping-list">
            <div class="list-item">(element)</div>
        </div>
        ```
    - What's the difference between `display: none` and `visibility: hidden`, and when would choose one over the other?
      - Ans:
        - `display: none` makes element not showing in the page and it doesn't preserve any space.

        - `visibility: hidden` hides an element, but still reserver the same space as before.

        - When you want to hide an element and doesn't want it affect the page layout, then use `display: none`, otherwise, use `visibility: hidden`.

    - What are other ways to visually hide content?
      - Ans: 
      1. Set opacity of an element to 0
        - e.g.
        ```css
        .hide {
          opacity: 0;
        }
        ```

      2. Set position
        - e.g.
        ```css
        .hide {
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
        ```

      3. Use clip-path
        - e.g.
        ```css
        .hide {clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);}
        ```

- Medium: (feel free to use what online resources you need, ...awesome if you can do this w/o though)
  - js:
    - Just for kicks, let's implement our own util library, create a 'util' module with the following util functions:
      - `unique()`

        ```javascript
        uniqueList = util.unique(['a', 'b', 'c', 'b', 'd', 'a', 'd', 'e']);
        // ['a', 'b', 'c', 'd', 'e']
        ```

      - `extend()`

        ```javascript
        homer = util.extend({name: 'Homer'}, {occupation: 'Nuclear Safety Inspector'});
        // {name: 'Homer', occupation: 'Nuclear Safety Inspector'}
        homer = util.extend(homer, {kids: [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]});
        //  { name: 'Homer',
        //    occupation: 'Nuclear Safety Inspector',
        //    kids: [
        //      { name: 'Bart' },
        //      { name: 'Lisa' },
        //      { name: 'Maggie' }]
        //  }
        ```

        - Using the testing framework of your choice write the spec to test your implementation of the above functions

      - Ans:
        ```javascript
        var util = (function() {

            /** iterate each element over the array, if the first position
              of an element in the array is equal to the current position
              then we filter out the duplicate element.
            */
            var unique = function(arr) {
              let uni_arr = arr.filter (function(elem, index, self){
                return index == self.indexOf(elem);
              });
              return uni_arr;
            };

            var extend = function(dict, element) {
              for (key in element) {
                dict[key] = element[key];
              }
              return dict;
            };

            return {
              unique: unique,
              extend: extend
            }
        })();


        // Testing
        var uniqueList = util.unique(['a', 'b', 'c', 'b', 'd', 'a', 'd',
        'e']);
        console.log(uniqueList);

        var homer = util.extend({name: 'Homer'}, {occupation: 'Nuclear Safety Inspector'});
        console.log(homer);

        homer = util.extend(homer, {kids: [{name: 'Bart'}, {name:'Lisa'}, {name: 'Maggie'}]});
        console.log(homer);

      ```

  - css:
    - Have a look at the following jsfiddle: http://jsfiddle.net/mipark2csco/o9v5rdpa/2/
      - fork this guy (hit 'Fork')
      - make the following changes, and save a new jsfiddle for each task (hit 'Update'), and paste your saved links back here:
        - horizontally center the box: http://jsfiddle.net/760kc1jh/2/
        - right-align the box: http://jsfiddle.net/760kc1jh/5/
        - align the box in the bottom-right corner: http://jsfiddle.net/760kc1jh/8/
        - horizontally and vertically center the box: http://jsfiddle.net/760kc1jh/15/

    - Have a look at the following jsfiddle: https://jsfiddle.net/mipark2csco/v4k5rjag/
      - fork this guy (hit 'Fork')
      - make the following changes, and save a new jsfiddle for each task (hit 'Update'), and paste your saved links back here:
        - vertically center the three boxes: https://jsfiddle.net/pLwxubod/27/
        - horizontally center the three boxes: https://jsfiddle.net/pLwxubod/1/
        - space the three boxes evenly horizontally, and center them vertically: https://jsfiddle.net/pLwxubod/20/


