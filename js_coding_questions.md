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

