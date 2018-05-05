// Iterator is TS is not built-in, need manual contrue
// interface IteratorResult<T> {
//   done: boolean;
//   value: T;
// }
// interface Iterator<T> {
//   next(value?: any): IteratorResult<T>;
//   return?(value?: any): IteratorResult<T>;
//   throw?(e?: any): IteratorResult<T>;
// }
// class Component {
//   constructor (public name: string) {}
// }
// class Frame implements IterableIterator<Component> {
//   private pointer = 0;
//   constructor(public name: string, public components: Component[]) {}
//   public next(): IteratorResult<Component> {
//     if (this.pointer < this.components.length) {
//       return {
//         done: false,
//         value: this.components[this.pointer++],
//       };
//     }
//     return {
//       done: true,
//       value: null,
//     };
//   }
//   [Symbol.iterator](): IterableIterator<Component> {
//     return this;
//   }
// }
// let iteratorResult1 = frame.next();
// console.log('iteratorResult1', iteratorResult1);
// let iteratorResult2 = frame.next();
// console.log('iteratorResult1', iteratorResult2);
// class Frame implements Iterable<Component> {
//   constructor(public name: string, public components: Component[]) {}
//   [Symbol.iterator]() {
//     let pointer = 0;
//     let components = this.components;;
//     return {
//       next(): IteratorResult<Component> {
//         if (pointer < components.length) {
//           return {
//             done: false,
//             value: components[pointer++],
//           };
//         }
//         return {
//           done: true,
//           value: null,
//         };
//       }
//     }
//   }
// }
// let frame = new Frame('Door', [new Component('top'), new Component('bottom'),
//   new Component('left'), new Component('right')]);
// for (let cmp of frame) {
//   console.log(cmp);
// }
var Fib = /** @class */ (function () {
    function Fib(maxValue) {
        this.maxValue = maxValue;
        this.fn1 = 0;
        this.fn2 = 1;
    }
    Fib.prototype.next = function () {
        var current = this.fn1;
        this.fn1 = this.fn2;
        this.fn2 = current + this.fn1;
        if (this.maxValue !== null && current >= this.maxValue) {
            return {
                done: true,
                value: null
            };
        }
        return {
            done: false,
            value: current
        };
    };
    Fib.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Fib;
}());
// let fibMax50 = new Fib(50);
// console.log(Array.from(fibMax50));
var fibMax21 = new Fib(21);
for (var _i = 0, fibMax21_1 = fibMax21; _i < fibMax21_1.length; _i++) {
    var num = fibMax21_1[_i];
    console.log(num);
}
