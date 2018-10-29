var x;
var y;
x = y;
var m;
var n;
// m = n; 错误
// 没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较
var identity = function (x) {
    return x;
};
var identity2 = function (x) {
    return x;
};
identity = identity2;
