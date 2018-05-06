"use strict";
exports.__esModule = true;
var fs = require("fs");
// function loadJSON(filename: string, cb: (error: Error, data: ant): void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       cb(err);
//     } else {
//       try {
//         cb(null, JSON.parse(data));
//       } catch (err) {
//         cb(err);
//       }
//     }
//   });
// }
// loadJSON('good.json', function (err, data) {
//   console.log('our callback called');
//   if (err) {
//     console.log('Error:', err.message);
//   } else {
//     console.log(foo.bar);
//   }
// })
// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       return cb(err);
//     }
//     try {
//       var parsed = JSON.parse(data);
//     } catch (err) {
//       return cb(err);
//     }
//     return cb(null, parsed);
//   });
// }
// loadJSON('good.json', function (err, data) {
//   console.log('our callback called');
//   if (err) {
//     console.log('Error:', err.message);
//   } else {
//     console.log(foo.bar);
//   }
// })
function readFileAsync(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
function loadJSON(filename) {
    return readFileAsync(filename)
        .then(function (data) { return JSON.parse(data); });
}
// loadJSON('good.json')
//   .then(data => {
//     console.log('data', data);
//   })
//   .catch(err => {
//     console.log('err', err);
//   });
// function iReturnPromiseAfterSecond(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Hello World!');
//     }, 1000);
//   });
// }
// Promise.resolve(123)
//   .then((res) => {
//     return iReturnPromiseAfterSecond();
//   })
//   .then((res) => {
//     console.log(res);
//   });
loadJSON('good.json')
    .then(function (data) { return console.log(data); })["catch"](function (err) { return console.log(err); });
