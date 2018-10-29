var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// typescript中不会报错，但是es6会报错。
function foo() {
    return a;
}
console.log(foo());
var a = 2;
// 重复声明
function bar(x) {
    if (true) {
        var x_1 = 2; // 没毛病
    }
    // let x = 1; // error
}
// function baz() {
//     console.log(x);
//     let x = 2;
//     var x = 'xx';
// }
// 解构赋值
function f(_a) {
    var first = _a[0], second = _a[1];
    return second;
}
var _a = { firstVar: 1, secondVar: 2, thirdVar: 3 }, firstVar = _a.firstVar, secondVar = _a.secondVar;
f([1, 'abc']);
var _b = { jiegou: undefined }.jiegou, jiegou = _b === void 0 ? 'ss' : _b;
console.log(jiegou);
function getResult(obj) {
    var a = obj.a, _a = obj.b, b = _a === void 0 ? 123 : _a;
    console.log(a, b);
}
getResult({ a: 'sb' });
// 扩展运算符
var obj = {
    a: 1,
    c: function () { }
};
var obj2 = __assign({}, obj);
obj2.c();
