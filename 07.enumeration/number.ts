// 默认从0开始
enum NumberList {
    A,
    B,
    C,
    D
}

// 指定值
enum NumberString {
    A,
    B = 4,
    C,
    D
}

enum NumberList2 {
    A = 'b',
    b = 4,
    c,
    d
}
console.log(NumberList.A)