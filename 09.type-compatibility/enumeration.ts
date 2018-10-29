// 数字类型与枚举类型兼容
// 不同枚举类型之间是不兼容的
enum Status {
    Ready,
    Waiting
}
enum  Color {
    a,
    b,
    c
}
let x = Status.Ready;
x = Color.a;