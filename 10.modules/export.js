"use strict";
exports.__esModule = true;
var a = 1;
exports.a = a;
exports.b = a;
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.sayName = function (name) {
        console.log(name);
        return name;
    };
    return Cat;
}());
exports.Cat = Cat;
console.log('aaa');
