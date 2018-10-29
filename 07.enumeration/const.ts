enum Enum {
    A = 2,
    B = A + 2
}

// 避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问
const enum Enum2 {
    A = 2, 
    B = A + 2
}

// 外部枚举
declare enum Enum3 {
    A,
    B,
    C = A * 2
}