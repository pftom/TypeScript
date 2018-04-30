## Making JavaScript Better

TS has some interesting features:

 - TypeScript is a superset of JavaScript.
 - TypeScript just with documentation that can actually be used by compilers / IDES.
 - TypeScript is linting JavaScript and do better than other linters that don't have type information.
 - You still need to know in order to now be caught off-guard.




## The differences between JavaScript and TypeScript

### 1

Always use `===` and `!==` in JS equality except for[ `null` checks](#3). This will not `force-convert` compare for variable.

```javascript
console.log(5 === '5'); // JS > false

console.log(5 === '5'); // TS > error
```

> For structural equality use npm package: `deep-equal`.



### 2

JS has two kinds things:

 - literals
 - references: functions, arrays, regexp etc...




### 3

You should use strict mode. In fact, TS compiler will insert it for you if you use modules and more ...

So, at global level, check a variable is defined:

```javascript
if (typeof someGlobal !== 'undefined') {
    console.log(someGlobal);
}
```



### 4

`this` is commonly referred to as the "calling context"



### 5

JavaScript only has one number type. It is a double-precision 64-bit `Number`.

Judge safety number, use `Number.isSafeInteger`



Big number calculate and decimal calculate: use `big.js`

```javascript
npm install big.js @types/big.js
```



### 6

`NaN` use `Number.isNaN`.



### 7

Classes:

 - Inheritance
 - Statics
 - Access Modifiers: `public`, `private`, `protected`
 - ​


### 8

