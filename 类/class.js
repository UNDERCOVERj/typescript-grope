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
var greeter = /** @class */ (function () {
    function greeter(message) {
        this.greeting = message;
    }
    greeter.prototype.greet = function () {
        console.log('hello : ' + this.greeting);
    };
    return greeter;
}());
new greeter('world').greet();
// 继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayName = function () {
        console.log(this.name);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(Animal));
var cat = new Cat('cat');
cat.sayName();
// 公共，私有与受保护的修饰符，默认public
// private，不能在类的外部访问，protected在派生类中仍然可以访问
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.count = this.count;
        this.name = 'hello bird';
    }
    Bird.prototype.sayName = function () {
        console.log(this.name);
    };
    return Bird;
}());
new Bird(2).sayName();
// new Bird(3).name; error
new Bird(4).count;
// 复制时，需要考虑private兼容
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
        this.count = 1;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name) {
        return _super.call(this, name) || this;
    }
    B.prototype.sayCount = function () {
        console.log(this.count);
        // console.log(this.name);
    };
    return B;
}(A));
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    return C;
}());
var a = new A('a');
var b = new B('b');
var c = new C('c');
// a = b; // 赋值时，父类和子类的方法一一对应，否则出错
// b = a;
b.sayCount();
// a = c;  Types have separate declarations of a private property 'name'
// protected constructor
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super.call(this) || this;
    }
    return Employee;
}(Person));
// new Person() Constructor of class 'Person' is protected and only accessible within the class declaration.
new Employee();
// readonly
// 只能在声明时或构造函数里被实例化
var Book = /** @class */ (function () {
    function Book(book) {
        this.book = book;
    }
    Book.prototype.sayName = function () {
        console.log(this.book);
    };
    return Book;
}());
// new Book().name = 'bcs' error
new Book('book').sayName();
// set / get tsc --target es5 class.ts
// class Name {
//     private theName: string;
//     get fullName(): string {
//         return this.theName;
//     }
//     set fullName(val: string) {
//         this.theName = val;
//     }
// }
// let names = new Name();
// names.fullName = '123';
// console.log(names.fullName);
// 静态属性
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.sayOrigin = function () {
        console.log(Grid.origin);
    };
    Grid.origin = {
        x: 1,
        y: 3
    };
    return Grid;
}());
new Grid().sayOrigin();
// 抽象类 abstract
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.prototype.move = function () {
        console.log('move');
    };
    Home.standard = 'standar';
    return Home;
}());
var Family = /** @class */ (function (_super) {
    __extends(Family, _super);
    function Family() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Family.prototype.bed = function () {
        console.log('family');
    };
    Family.prototype.sofa = function () {
        console.log('sofa');
    };
    return Family;
}(Home));
var family = new Family();
var family1 = Home;
console.log(family1.standard);
family.move();
family.bed();
// console.log(family.standard);
// family.sofa(); // error，抽象类中未声明
// 接口继承类
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());
var Anocolor = /** @class */ (function () {
    function Anocolor() {
    }
    return Anocolor;
}());
new Anocolor();
