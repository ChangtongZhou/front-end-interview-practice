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

