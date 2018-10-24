// Boolean
var isDone = false;
// Number
var a = 6;
var b = 012;
var c = 0x2a;
console.log(a, b, c);
// String
var anotherName = 'panda';
var word = "panda " + a;
var s_word = 'panda: ' + a;
var color = "red";
console.log(anotherName, word, s_word, color);
// Array
var list = [2, 4, 6];
var map = [1, 2, 3];
var anyvar = [1, true, 'abc']; // 任意类型
console.log(list);
// 元组 tuple
var tuple = ['panda', 1];
tuple[2] = 'string'; // 越界元素，使用联合类型替代
// tuple[2] = true; error
// 枚举
// enum Nums {First = 1, Second, Third};
// let item: Nums = Nums.First;
// 手动赋值：
var Nums;
(function (Nums) {
    Nums[Nums["First"] = 1] = "First";
    Nums[Nums["second"] = 2] = "second";
    Nums[Nums["Third"] = 4] = "Third";
})(Nums || (Nums = {}));
;
// let item: Nums = Nums.Second;
var str = Nums[2];
console.log(str);
// Any
var source = 4; // 任意类型
source = 'source';
console.log(source);
var obj = 4; // Object调任意值，但是不能调用任意的方法
// obj.toFixed(); error
obj = {};
// void(null/undefined)
function getNumber(str) {
    return 2;
}
function getAny() {
    return { a: 2 };
}
/**
 * function getNull(): void {
 * return 'ss' // 出错
 * }
 */
// 注意：当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
var undef = undefined;
var nul = null;
// let undef2: undefined = null; // 可以
// let undef2: undefined = undefined;
// let undef2: null = undefined; // 可以
var undef2 = null; // 可以
// never 
// 表示的是那些永不存在的值的类型
// let ne: never = new Error('ss'); 赋值错误
function error() {
    throw new Error();
}
function fail() {
    return error();
}
function infinitelopp() {
    while (true) {
    }
}
// 类型断言 没有运行时的影响，只是在编译阶段起作用
// let someValue: any = 'panda';
// let strLength: number = (<string>someValue).length;
var someValue = true;
var strLength = someValue.length;
