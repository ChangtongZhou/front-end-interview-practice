# JS\_Coding\_questions

## Q1. Make this work:

```javascript
duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

### Sol:

```javascript
// Method 1:
function duplicate(arr) {
    return [...arr, ...arr]; // use spread
}

// Method 2:
function duplicate(arr) {
    return arr.concat(arr); // use concat
}
```

## Q2. Reverse array:

```javascript
function reverse(arr) {
    let new_arr = arr.map((x, i) => arr[arr.length-1-i]);
    return new_arr;
}
```

{% hint style="info" %}
The **`map()`** method creates **a new array** with the results of calling a provided function on every element in the calling array.
{% endhint %}

## Q3. Remove duplicated value from an array:

```javascript
function dedupe (arr) {
    return arr.filter((x, i) => arr.indexOf(x) === i);
}

dedupe([1, 2, 1, 1, 3, 2]); // [1, 2, 3]
```

{% hint style="info" %}
* The **`filter()`** method creates a new array with all elements that pass the test implemented by the provided function.
* The **`indexOf()`** method returns the first index at which a given element can be found in the array, or -1 if it is not present.
{% endhint %}

## Q4. Get the first unique char in string:

```javascript
function firstUnique (str) {
	let arr = str.split("");
	let freqs = [];
	arr.forEach(ch => {
		if (!freqs[ch]) {
			freqs[ch] = 1;
		} else {
			freqs[ch]++;
		}
	});

	for (let i = 0; i < arr.length; i++) {
		if (freqs[arr[i]] === 1) {
			return arr[i];
		}
	}
}

console.log(firstUnique("bbcffcge")); // g
```

{% hint style="info" %}
The **`forEach()`** method executes a provided function once for each array element. \(mutate array in-place\)
{% endhint %}

## How to check if an object is an array type?

```javascript
Object.prototype.toString.call(arr);
// OR
Array.isArray(arr);
```

## Remove last item from array:

```javascript
arr.splice(-1, 1)
// OR
arr.length = arr.length - 1;
```

{% hint style="info" %}
* **`array.splice()`**:

  * changes the contents of an array by removing existing elements and/or adding new elements
  * `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
  * e.g.
    * \`\`

      ```javascript
      var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
      var removed = myFish.splice(3, 1);

      // removed is ["mandarin"]
      // myFish is ["angel", "clown", "drum", "sturgeon"]

      var months = ['Jan', 'March', 'April', 'June'];
      months.splice(1, 0, 'Feb');
      // inserts at 1st index position
      console.log(months);
      // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

      months.splice(4, 1, 'May');
      // replaces 1 element at 4th index
      console.log(months);
      // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

      ```
  * A negative index can be used, indicating an offset from the end of the sequence. `slice(-2)` extracts the last two elements in the sequence.

  \`\`

* **`array.slice()`**`:`
  * returns a shallow copy of a portion of any array into a new array object selected from begin to end \(end not included\). The original array will not be modified.
  * `arr.slice([begin[,, end])`
  *   ```javascript
    // Using slice, create newCar from myCar.
    var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
    var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
    var newCar = myCar.slice(0, 2);

    // Display the values of myCar, newCar, and the color of myHonda
    //  referenced from both arrays.
    console.log('myCar = ' + JSON.stringify(myCar));
    console.log('newCar = ' + JSON.stringify(newCar));
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);

    // Change the color of myHonda.
    myHonda.color = 'purple';
    console.log('The new color of my Honda is ' + myHonda.color);

    // Display the color of myHonda referenced from both arrays.
    console.log('myCar[0].color = ' + myCar[0].color);
    console.log('newCar[0].color = ' + newCar[0].color);
    ```

  * The above script writes:
  *   ```javascript
    myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
             'cherry condition', 'purchased 1997']
    newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
    myCar[0].color = red 
    newCar[0].color = red
    The new color of my Honda is purple
    myCar[0].color = purple
    newCar[0].color = purple
    ```
{% endhint %}

## Remove a property from object:

```javascript
let obj = {
    "ircEvent": "PRIVMSG",
    "method": "newURI",
    "regex": "^http://.*"
}

delete obj.regex;
// OR
delete obj['regex'];
```



