"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.promise.finally");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.array.includes");

var fn = function fn() {
  return 1;
};

var name = 'Y.H.JIANG';
var a = "hi ".concat(name);
var b = [1, 2, 3];
b.includes(1);
var c = Object.assign(a, b);

for (var _i = 0, _b = b; _i < _b.length; _i++) {
  var i = _b[_i];
  console.log(i);
}

Promise.resolve()["finally"]();