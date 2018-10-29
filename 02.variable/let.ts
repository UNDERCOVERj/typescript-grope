// typescript中不会报错，但是es6会报错。
function foo() {
    return a;
}
console.log(foo());
let a = 2;

// 重复声明
function bar(x: string) {
    if (true) {
        let x = 2; // 没毛病
    }
    // let x = 1; // error
}
// function baz() {
//     console.log(x);
//     let x = 2;
//     var x = 'xx';
// }

// 解构赋值

function f([first, second]: [number, string]): string {
    return second;
}
let {firstVar, secondVar}: {firstVar: number, secondVar: number, thirdVar: any} = {firstVar: 1, secondVar: 2, thirdVar: 3};
f([1, 'abc']);

let {jiegou = 'ss'}: {jiegou: string} = {jiegou: 'sb'};
console.log(jiegou);

// 默认值
type C = {a: string, b?: number};
function getResult(obj: C) { // ?: 无值/如果有值必须取xxx类型
    let {
        a,
        b = 123
    } = obj;
    console.log(a, b);
}
getResult({a: 'sb'})

// 扩展运算符

let obj = {
    a: 1,
    c: () => {}
}
let obj2 = {...obj};
obj2.c();
