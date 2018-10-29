interface Empty<T> {

}
let x: Empty<string>;
let y: Empty<number>;
x = y;

interface Animal<T> {
    a: T
}

let m: Animal<number>;
let n: Animal<string>;
// m = n; 错误


// 没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较

let identity = function<T>(x: T): T {
    return x;
}
let identity2 = function<T>(x: T): T {
    return x;
}
identity = identity2;