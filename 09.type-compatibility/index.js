var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 使用结构类型系统来描述这些类型，不会报错
var person = new Person();
// 如果x要兼容y，那么y至少具有与x相同的属性
var x = {
    name: 'x'
};
// 推断成 {name: string; other: string;}
var y = {
    name: 'y',
    other: 'other'
};
// 只要x中的属性y都有就行
x = y;
function greet(x) {
    console.log(x.name);
}
greet(y);
