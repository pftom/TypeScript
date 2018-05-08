(function (something) {
  something.foo = 123;
})(something || something = {});

console.log(something);

(function (something) {
  something.bar = 456;
})(something || something = {});

console.log(something);