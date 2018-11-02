namespace Animal {
    let a = 1;
    export class Panda {}
}

namespace Animal {
    export class Cat {}
}

// 等同于

// namespace Animal {
//     export class Panda {}
//     export class Cat {}
// }

// 未导出的变量尽在其原有的命名空间里能访问