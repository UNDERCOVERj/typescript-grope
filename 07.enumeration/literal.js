// 1. 非计算的常量枚举成员的子集 任何字符串字面量 任何数字字面量 应用了一元 -符号的数字字面量
var Shape;
(function (Shape) {
    Shape[Shape["A"] = 0] = "A";
    Shape[Shape["B"] = 1] = "B";
})(Shape || (Shape = {}));
var c = {
    a: 2,
    b: 'ss'
};
// 运行时枚举
function f(obj) {
    console.log(obj.A);
}
f(Shape);
// 反向映射
console.log(Shape[Shape.A]);
