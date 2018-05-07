// function* infiniteSequence() {
//   var i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// var iterator = infiniteSequence();
// while (true) {
//   console.log(iterator​​.next());
// }

// function* idMaker() {
//   let index = 0;
//   while (index < 3) {
//     yield index++;
//   }
// }

// // return a generator object
// let gen = idMaker();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* generator() {
//   console.log('Execution started');
//   yield 0;
//   console.log('Execulate resumed');
//   yield 1;
//   console.log('Execution resumed');
// }

// var iterator​​ = generator();
// console.log('Starting iteration');

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* generator() {
//   var bar = yield 'foo';
//   console.log(bar);
// }

// const iterator = generator​​();
// const foo = iterator.next();

// console.log(foo.value);
// const nextThing = iterator.next('bar');

function* generator() {
  try {
    yield 'foo';
  } catch (err) {
    console.log(err.message);
  }
}

var iterator​​ = generator();
var foo = iterator.next();

console.log(foo.value);
var nextThing = iterator.throw(new Error('bar'));