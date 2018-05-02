var funcs = [];

for (var i = 0; i < 3; i++) {
  // 使用闭包来保存代码的片段
  (function () {
    var local = i;
    funcs.push(function () {
      console.log(local);
    });
  })();
}

// use let lexical scope store state
for (let i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}