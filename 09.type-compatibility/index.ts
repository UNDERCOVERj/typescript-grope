interface Named {
    name: string;
}
class Person {
    name: string;
}
// 使用结构类型系统来描述这些类型，不会报错
let person: Named = new Person();

// 如果x要兼容y，那么y至少具有与x相同的属性

let x: Named = {
    name: 'x'
};
// 推断成 {name: string; other: string;}
let y = {
    name: 'y',
    other: 'other'
};
// 只要x中的属性y都有就行

x = y;
// 这里也是一样
function greet(x: Named) {
    console.log(x.name);
}
greet(y);