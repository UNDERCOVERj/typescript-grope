// 为函数定义类型
let app = function(x: number, y: number): number {
    return x + y;
}
function myApp(x: number, y: number): number {
    return x + y;
}
// 完整函数类型
let anotherApp: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}
// 推断类型
let anotherApp1: (x: number, y: number) => number = function(x, y): number {
    return x + y;
} 

// 可选参数

function buildName(firstName: string, lastname?: string) {
    return firstName + lastname;
}
// 保持默认参数类型
function getBook(name: string, count = 2) {
    return name;
}

getBook('book', 3);

// 剩余参数
function getArgs(first: string, ...rest: string[]) {
    return first;
}

getArgs('a', 'b', 'c');

// this参数是个假的参数，它出现在参数列表的最前面

interface Desk {
    a: string[];
    b(): void;
}

let strategy = {
    a: ['a', 'b', 'c'],
    b: function(this: Desk) {
        console.log();
        return () => {
            console.log(this);
            return this.a[0]
        }
    }
}
let stragetyB = strategy.b();
stragetyB();

// this参数在回调函数里

interface UiElement {
    addEventListenr(onClick: (this: void, e: string) => void): void;
}
 
class UiElementClass implements UiElement{
    addEventListenr(onClick: (this: void, e: string) => void) {
        return null;
    }
}

class Handler {
    // onClickBad(this: Handler, e: string): void {
    onClickBad(this: void, e: string): void {
        console.log(e);
    }
}
let ui = new UiElementClass();
let handler = new Handler();
ui.addEventListenr(handler.onClickBad);

// 重载
function real(a: string): string;
function real(a: number): number;
function real(arg) {
    console.log(typeof arg);
    return arg;
}
real(1);
real('1');