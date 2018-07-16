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
The **`map()`** method creates a new array with the results of calling a provided function on every element in the calling array.
{% endhint %}



