function identity(arg: number): number {
    return arg;
}

// 输入输出类型一样
function identity2<T>(arg: T): T {
    return arg;
}
identity2('e');

// 传入所有参数，包括类型参数
let output = identity2<number>(2);

// 类型推论 自动确定T的类型
let output2 = identity2('abc');

// function getLength<T>(arg: T): T { // 为any就行
//     console.log(arg.length);
//     return arg;
// }
function getLength<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}
let getLength2: <T>(arg: T[]) => T[] = getLength;

// 使用带有调用签名的对象字面量来定义泛型函数
let getLength3: {<T>(arg: T[]): T[]} = getLength;

// 泛型接口
interface Getlength {
    <T>(arg: T[]): T[]
}

let getLength4: Getlength = getLength;

// 把泛型当成参数
interface Getlength2<T> {
    (arg: T[]): T[]
}
let getLength5: Getlength2<number> = getLength;
getLength4([1, '2', '3']);
getLength5([1, 2, 3]);

// 泛型类
class GetVal<T> {
    a: T;
    getA: (x: T, y: T) => T;
}
// 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
let val = new GetVal<number>();
val.a = 4;
val.getA = function(x, y) {
    return x + y;
}

// 泛型约束
interface extendsLength {
    length: number;
}
function getLength6<T extends extendsLength>(arg: T) {
    console.log(arg.length);
}

class Animal {
    name: string;
}
class Dog extends Animal {
    name: string;
    sayName() {

    }
}

function create<A extends Animal>(c: new () => A): A {
    return new c();
}
console.log(create(Dog).sayName);