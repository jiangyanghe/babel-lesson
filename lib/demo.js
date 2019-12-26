"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var fn = function fn() {
  return 1;
}; // 语法


var name = 'Y.H.JIANG';
var a = "hi ".concat(name);
var b = [1, 2, 3];
(0, _includes.default)(b).call(b, 1); // api

var c = (0, _assign.default)(a, b);

for (var _i = 0, _b = b; _i < _b.length; _i++) {
  var i = _b[_i];
  console.log(i);
}

_promise.default.resolve().finally();