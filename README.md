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






