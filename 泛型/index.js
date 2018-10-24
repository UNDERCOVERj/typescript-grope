var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
// 输入输出类型一样
function identity2(arg) {
    return arg;
}
identity2('e');
// 传入所有参数，包括类型参数
var output = identity2(2);
// 类型推论 自动确定T的类型
var output2 = identity2('abc');
// function getLength<T>(arg: T): T { // 为any就行
//     console.log(arg.length);
//     return arg;
// }
function getLength(arg) {
    console.log(arg.length);
    return arg;
}
var getLength2 = getLength;
// 使用带有调用签名的对象字面量来定义泛型函数
var getLength3 = getLength;
var getLength4 = getLength;
var getLength5 = getLength;
getLength4([1, '2', '3']);
getLength5([1, 2, 3]);
// 泛型类
var GetVal = /** @class */ (function () {
    function GetVal() {
    }
    return GetVal;
}());
// 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
var val = new GetVal();
val.a = 4;
val.getA = function (x, y) {
    return x + y;
};
function getLength6(arg) {
    console.log(arg.length);
}
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sayName = function () {
    };
    return Dog;
}(Animal));
function create(c) {
    return new c();
}
console.log(create(Dog).sayName);
