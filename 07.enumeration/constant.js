// 常量
// 满足条件：
// 1. 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 2. 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 3. 带括号的常量枚举表达式
// 4. 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 5. 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
var NumberList;
(function (NumberList) {
    NumberList[NumberList["A"] = 0] = "A";
    NumberList[NumberList["B"] = 2] = "B";
    NumberList[NumberList["C"] = 3] = "C";
    NumberList[NumberList["D"] = 'abc'.length] = "D";
})(NumberList || (NumberList = {}));
var NumberList2;
(function (NumberList2) {
    NumberList2[NumberList2["A"] = 0] = "A";
    NumberList2[NumberList2["B"] = 1] = "B";
    NumberList2["C"] = "a b c";
})(NumberList2 || (NumberList2 = {}));
NumberList.D = NumberList2.B;
// NumberList.A = 2;
// NumberList.B = NumberList2.A;
