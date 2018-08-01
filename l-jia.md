# L家

## Concepts:

### Event bubbling:

### Clear float:

### CSS Preprocessor:

### CommonJS vs. RequireJS

### How to use module

### Accessibility? How to improve the accessibility of a website

### Callback vs. Promise

### Get vs. Post

## Coding:

Q1.

```javascript
var Foo = function( a ) { 
  function bar() {   
    return a; 
  }
  this.baz = function() {   
    return a; 
  };
};

Foo.prototype = {
  biz: function() {    
    return a; . 1point3acres
  }
};

var f = new Foo( 7 );
f.bar(); // error, undefined function
f.baz(); // 7
f.biz(); // undefined
```

What is the output of above code, and how do you fix bugs?

Q2.  Write a isPalindrome function 

e.g. 

```javascript
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("dog")) // false
```

Q3. Use HTML and CSS, 给了个图片，用HTML, CSS 实现。 有个link, 然后hover link上的时候， 在link的上方出现一个tooltip popup. tooltip是个div。

## Onsite:

onsite一共四轮，每轮1小时，中间还有1小时吃饭。 来源一亩.三分地论坛.   
第一轮 manager面： 主要根据简历的情况，很随机地问了很多behaviour的问题，所以简历里写的东西自己一定要熟悉，manager人好好呀，感觉特别亲和，有活力。  
第二轮 UI Design？ 我以为这一轮按照HR给的reference,应该是要设计一个网页上的widget什么的，结果没想到不按套路出牌，让design一个 undo feature, 要有通用性，要写一些js代码，后面follow up说如果全组的人都用你这个feature要如何做？楼主表示很懵逼。。。虽然面试官韩国妹妹很亲和，但目测她对我的回答很无语。. 一亩-三分-地，独家发布  
第三轮 coding & algorithm 面算法，第一题很简单，回文串的题，follow up是能不能用一行js代码解决，第二题比较复杂，说有一个电子支票，用户输入一个float类型的数之后，把这个数转换成英文单词，比如123.45，转换成" one hundred twenty three and 45 / 100 “ 这种形式，面试官人很好，循循善诱。  
第四轮 system design 楼主以为这个是要high level的设计一个系统或者service，包括分析QPS， concurrent user那些，到后台用哪种database存，push or pull，这些，结果完全又不按套路出牌，让设计一个日历，要写detail的HTML和js代码，这一轮的面试小哥非常严肃，提示也比较confusing....楼主表示全程很懵逼，他问的问题也比较随机，看到你写到某个地方的时候，会突然根据你写的提出一个问题，感觉他有点想到什么问什么。-

