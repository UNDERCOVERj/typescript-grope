class greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log('hello : ' + this.greeting);
    }
}
new greeter('world').greet();

// 继承
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
 }

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

let cat: Cat = new Cat('cat');
cat.sayName();

// 公共，私有与受保护的修饰符，默认public
// private，不能在类的外部访问，protected在派生类中仍然可以访问
class Bird {
    count: number;
    private name: string;
    constructor(name: number) {
        this.count = this.count;
        this.name = 'hello bird';
    }
    sayName() {
        console.log(this.name);
    }
}

new Bird(2).sayName();
// new Bird(3).name; error
new Bird(4).count;

// 复制时，需要考虑private兼容
class A {
    private name: string;
    protected count: number;
    constructor(name: string) {
        this.name = name;
        this.count = 1;
    }
    // sayCount() {} // 赋值时不加上编译错误
}
class B extends A {
    constructor(name: string) {
        super(name);
    }
    sayCount() {
        console.log(this.count);
        // console.log(this.name);
    }
 }
class C {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let a = new A('a');
let b = new B('b');
let c = new C('c');
// a = b; // 赋值时，父类和子类的方法一一对应，否则出错
// b = a;
b.sayCount();
// a = c;  Types have separate declarations of a private property 'name'

// protected constructor

class Person {
    protected constructor() { // 这个类不能在包含它的类外被实例化，但是能被继承

    }
}
class Employee extends Person {
    constructor() {
        super();
    }
}
// new Person() Constructor of class 'Person' is protected and only accessible within the class declaration.
new Employee()

// readonly
// 只能在声明时或构造函数里被实例化
class Book {
    readonly name: string;
    constructor(readonly book: string) {
    }
    sayName() {
        console.log(this.book)
    }
}
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
class Grid {
    static origin = {
        x: 1, 
        y: 3
    }
    sayOrigin() {
        console.log(Grid.origin);
    }
}
new Grid().sayOrigin();

// 抽象类 abstract
abstract class Home {
    abstract bed(): void; // 必须在派生类中实现
    static standard = 'standar';
    move() {
        console.log('move');
    }
}
class Family extends Home {
    bed() {
        console.log('family');
    }
    sofa() {
        console.log('sofa')
    }
}
let family: Home = new Family();
let family1: typeof Home = Home;
console.log(family1.standard);
family.move();
family.bed();
// console.log(family.standard);
// family.sofa(); // error，抽象类中未声明

// 接口继承类

class Color {
    red: string;
}
interface SubColor extends Color {
    blue: string
}
class Anocolor implements SubColor {
    red: string;
    blue: string; // 必须要
    // constructor(public red: string, public bule: string) {}
}
new Anocolor();