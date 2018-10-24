interface Person {
    name: string;
    age: number;
    height?: number; // 可选属性
};
function getPerson(person: Person): {name: string, age: number} {
    person.name = 'changed'
    return {
        name: person.name,
        age: person.age
    }
}
// function getPerson(person: {name: string, age: number}) {
//     return person.age
// }
getPerson({
    name: 'panda',
    age: 3,
    height: 200
})

// readonly

interface Face {
    readonly mouse: string;
    readonly tip: string;
}
function getFace(face: Face) {
    // face.mouse = 'panda face'; // error
}
getFace({
    mouse: 'panda mouse',
    tip: 'panda tip'
})

// ReadonlyArray
let arr: ReadonlyArray<number> = [1, 2, 3];
let originalArr: number[] = [2, 3, 4];
// originalArr = arr; 不可以将ReadonlyArray赋值到一个普通数组
originalArr = arr as number[]; // 但是可以用类型断言重写。
originalArr[0] = 4;
console.log(originalArr);

// 使用类型断言来绕过入参检验
function getAnotherPerson(person: Person) {
    console.log(person);
}
getAnotherPerson({
    name: 'panda',
    age: 12,
    weight: 150
} as Person)

// 索引签名
interface InterfaceConfig {
    width?: number;
    [propName: string]: any;
}
function getConfig(config: InterfaceConfig) {

}
getConfig({width: 180, height: 'abc'});

// 函数类型
interface FuncConf {
    (source: string, result: number): string;
}
let getSource: FuncConf = function(src: string): string { // 参数名可以不一样
    return src;
}
getSource('ss', 2); // 类型检查对应到interface中

// 可索引的类型
interface StringArray {
    [index: number]: string
}
let stringArray: StringArray = ['a', 'b', 'c'];
let oneOfArray: string = stringArray['0'];

interface Animal {
    // [x: number]: Dog;
    [y: string]: Cat;
}

class Dog {
    a: string;
}
class Cat {
    b: string;
}

let animal: Animal = {
    // 0: new Dog(),
    1: new Cat
}
console.log(animal[0]);

// 只读可索引
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let readonlyStringArray = ['abc'];
readonlyStringArray[0] = 'bcd';
readonlyStringArray['0'] = 'abc';

// 类类型
interface ClassType {
    current: string;
    getCurrent(src: string)
}
class Current implements ClassType {
    current: string;
    getCurrent(src?: string) {
        return this.current;
    }
    constructor(public old: string) {
        this.current = old + ' new'
    }
}
console.log(new Current('old').getCurrent());

// 类静态部分与实例部分
// 实现接口，公共部分要一致
interface ClockType {
    time: string;
}
class Clock implements ClockType {
    time: string;
    constructor() {}
}
// 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
interface ClockConstructor {
    new (h: string): ClockInterface;
}
interface ClockInterface {
    tick();
}

class A implements ClockInterface {
    constructor(h: string) {}
    tick() {
        console.log('A');
    }
}
class B implements ClockInterface {
    constructor(h: string) {}
    tick() {
        console.log('B');
    }
}

function createClock(ctor: ClockConstructor, h: string): ClockInterface {
    return new ctor(h);
}
createClock(B, 'aaaa').tick();

// 继承接口
interface Shape {
    color: string;
}
interface Pen {
    height: string;
}
interface Square extends Shape, Pen {
    width: number;
}
let square = <Square>{};
square.color = 'red';
square.width = 140;
// square.height = 150;
console.log(square);

// 混合类型
// 既可以作对象又可以作函数
interface Counter {
    (count: number): number;
    start: string;
}

function getCount(): Counter {
    let count = <Counter>function(count: number) {};
    // let count: Counter = function(count: number) {};
    count.start = 'start';
    return count;
}

let countInstance = getCount();
console.log(countInstance.start);
console.log(countInstance);

// 接口继承类
class Control {
    private state: any;
    constructor(state: string) {
        this.state = state;
    }
    getState(): string {
        return this.state;
    }
}
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    constructor(state) {
        super(state);
    }
    getState(): string {
        return 'instance Button';
    }
    select(): void {

        console.log(super.getState());
    }
}
class TextBox extends Control {

}
new Button('panda').select();
// error
// class Table implements SelectableControl {
//     select() {}
// }