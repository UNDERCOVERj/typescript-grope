// Boolean
let isDone: boolean = false;

// Number
let a: number = 6;
let b: number = 012;
let c: number = 0x2a;
console.log(a, b, c);

// String
let anotherName: string = 'panda';
let word: string = `panda ${a}`;
let s_word: string = 'panda: ' + a;
let color: string = "red";
console.log(anotherName, word, s_word, color);

// Array
let list: number[] = [2, 4, 6];
let map: Array<number> = [1, 2, 3];
let anyvar: any[] = [1, true, 'abc']; // 任意类型
console.log(list);

// 元组 tuple
let tuple: [string, number] = ['panda', 1];
tuple[2] = 'string'; // 越界元素，使用联合类型替代
// tuple[2] = true; error

// 枚举
// enum Nums {First = 1, Second, Third};
// let item: Nums = Nums.First;
// 手动赋值：
enum Nums {First = 1, second = 2, Third = 4};
// let item: Nums = Nums.Second;
let str: string = Nums[2];
console.log(str);

// Any
let source: any = 4; // 任意类型
source = 'source';
console.log(source);
let obj: Object = 4; // Object调任意值，但是不能调用任意的方法
// obj.toFixed(); error
obj = {};

// void(null/undefined)
function getNumber(str: string): number {
    return 2;
}
function getAny(): any {
    return {a: 2}
}
/**
 * function getNull(): void {
 * return 'ss' // 出错
 * }
 */

// 注意：当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
let undef: void = undefined;
let nul: void = null;
// let undef2: undefined = null; // 可以
// let undef2: undefined = undefined;
// let undef2: null = undefined; // 可以
let undef2: null = null; // 可以

// never 
// 表示的是那些永不存在的值的类型
// let ne: never = new Error('ss'); 赋值错误
function error(): never {
    throw new Error();
}
function fail(): never {
    return error();
}
function infinitelopp(): never {
    while(true) {

    }
}

// 类型断言 没有运行时的影响，只是在编译阶段起作用
// let someValue: any = 'panda';
// let strLength: number = (<string>someValue).length;

let someValue: any = true;
let strLength: number = (someValue as string).length;