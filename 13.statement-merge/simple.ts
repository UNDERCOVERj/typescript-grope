interface Animal {
    a: string;
}
interface Animal {
    b: string;
}
let animal: Animal = {
    a: 'a',
    b: 'b'
}

// 后面的接口优先级高
// 接口的非函数的成员应该是唯一的
