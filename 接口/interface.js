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
;
function getPerson(person) {
    person.name = 'changed';
    return {
        name: person.name,
        age: person.age
    };
}
// function getPerson(person: {name: string, age: number}) {
//     return person.age
// }
getPerson({
    name: 'panda',
    age: 3,
    height: 200
});
function getFace(face) {
    // face.mouse = 'panda face'; // error
}
getFace({
    mouse: 'panda mouse',
    tip: 'panda tip'
});
// ReadonlyArray
var arr = [1, 2, 3];
var originalArr = [2, 3, 4];
// originalArr = arr; 不可以将ReadonlyArray赋值到一个普通数组
originalArr = arr; // 但是可以用类型断言重写。
originalArr[0] = 4;
console.log(originalArr);
// 使用类型断言来绕过入参检验
function getAnotherPerson(person) {
    console.log(person);
}
getAnotherPerson({
    name: 'panda',
    age: 12,
    weight: 150
});
function getConfig(config) {
}
getConfig({ width: 180, height: 'abc' });
var getSource = function (src) {
    return src;
};
getSource('ss', 2); // 类型检查对应到interface中
var stringArray = ['a', 'b', 'c'];
var oneOfArray = stringArray['0'];
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var animal = {
    // 0: new Dog(),
    1: new Cat
};
console.log(animal[0]);
var readonlyStringArray = ['abc'];
readonlyStringArray[0] = 'bcd';
readonlyStringArray['0'] = 'abc';
var Current = /** @class */ (function () {
    function Current(old) {
        this.old = old;
        this.current = old + ' new';
    }
    Current.prototype.getCurrent = function (src) {
        return this.current;
    };
    return Current;
}());
console.log(new Current('old').getCurrent());
var Clock = /** @class */ (function () {
    function Clock() {
    }
    return Clock;
}());
var A = /** @class */ (function () {
    function A(h) {
    }
    A.prototype.tick = function () {
        console.log('A');
    };
    return A;
}());
var B = /** @class */ (function () {
    function B(h) {
    }
    B.prototype.tick = function () {
        console.log('B');
    };
    return B;
}());
function createClock(ctor, h) {
    return new ctor(h);
}
createClock(B, 'aaaa').tick();
var square = {};
square.color = 'red';
square.width = 140;
// square.height = 150;
console.log(square);
function getCount() {
    var count = function (count) { };
    // let count: Counter = function(count: number) {};
    count.start = 'start';
    return count;
}
var countInstance = getCount();
console.log(countInstance.start);
console.log(countInstance);
// 接口继承类
var Control = /** @class */ (function () {
    function Control(state) {
        this.state = state;
    }
    Control.prototype.getState = function () {
        return this.state;
    };
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(state) {
        return _super.call(this, state) || this;
    }
    Button.prototype.getState = function () {
        return 'instance Button';
    };
    Button.prototype.select = function () {
        console.log(_super.prototype.getState.call(this));
    };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
new Button('panda').select();
// error
// class Table implements SelectableControl {
//     select() {}
// }
