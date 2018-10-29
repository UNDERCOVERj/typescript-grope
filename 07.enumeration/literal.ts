// 1. 非计算的常量枚举成员的子集 任何字符串字面量 任何数字字面量 应用了一元 -符号的数字字面量
enum Shape {
    A,
    B
}

// 枚举成员成为了类型

interface Square { 
    a: Shape.A; // 为number类型
    b: string;
}

let c: Square = {
    a: 2,
    b: 'ss'
}

// 运行时枚举
function f(obj: {A: number}) {
    console.log(obj.A);
}
f(Shape);

// 反向映射
console.log(Shape[Shape.A]);