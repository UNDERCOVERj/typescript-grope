// null/undefined/0
let func: (x: number) => 0 = (x: number) => {
    return null;
}
let x: (x: number) => 0;
let y: (x: number, y: number) => 0;
// x = y; y有多余参数，而x没有
y = x;

let arr: number[] = [1, 2, 3];
arr.forEach((item, idx) => console.log(item));

let m = () =>({x: 1});
let n = () => ({x: 1, y: 2});
m = n;
// n = m; n上的y，m没有

function func2(x?) { // x?可有可无
    console.log(x);
}
func2();