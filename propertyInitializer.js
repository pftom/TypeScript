"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util = require("util");
const readFile = util.promisify1(fs.readFile);
// class Foo {
//   members = [];
//   add(x) {
//     this.members.push(x);
//   }
//   read() {
//     console.log(this.members);
//   }
// }
// const foo = new Foo();
// foo.add(1);
// foo.read();
const delay = (ms) => new Promise(res => setTimeout(res, ms));
