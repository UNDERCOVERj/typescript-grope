// 为函数定义类型
var app = function (x, y) {
    return x + y;
};
function myApp(x, y) {
    return x + y;
}
// 完整函数类型
var anotherApp = function (x, y) {
    return x + y;
};
// 推断类型
var anotherApp1 = function (x, y) {
    return x + y;
};
// 可选参数
function buildName(firstName, lastname) {
    return firstName + lastname;
}
// 保持默认参数类型
function getBook(name, count) {
    if (count === void 0) { count = 2; }
    return name;
}
getBook('book', 3);
// 剩余参数
function getArgs(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return first;
}
getArgs('a', 'b', 'c');
var strategy = {
    a: ['a', 'b', 'c'],
    b: function () {
        var _this = this;
        console.log();
        return function () {
            console.log(_this);
            return _this.a[0];
        };
    }
};
var stragetyB = strategy.b();
stragetyB();
var UiElementClass = /** @class */ (function () {
    function UiElementClass() {
    }
    UiElementClass.prototype.addEventListenr = function (onClick) {
        return null;
    };
    return UiElementClass;
}());
var Handler = /** @class */ (function () {
    function Handler() {
    }
    // onClickBad(this: Handler, e: string): void {
    Handler.prototype.onClickBad = function (e) {
        console.log(e);
    };
    return Handler;
}());
var ui = new UiElementClass();
var handler = new Handler();
ui.addEventListenr(handler.onClickBad);
function real(arg) {
    console.log(typeof arg);
    return arg;
}
real(1);
real('1');
