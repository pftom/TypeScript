var foo = {};

foo.bar = 123;
foo.__proto__.bar = 456;

console.log(foo.bar);
delete foo.bar;

console.log(foo.bar);
delete foo.__proto__.bar

console.log(foo.bar);