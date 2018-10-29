// 默认从0开始
var NumberList;
(function (NumberList) {
    NumberList[NumberList["A"] = 0] = "A";
    NumberList[NumberList["B"] = 1] = "B";
    NumberList[NumberList["C"] = 2] = "C";
    NumberList[NumberList["D"] = 3] = "D";
})(NumberList || (NumberList = {}));
// 指定值
var NumberString;
(function (NumberString) {
    NumberString[NumberString["A"] = 0] = "A";
    NumberString[NumberString["B"] = 4] = "B";
    NumberString[NumberString["C"] = 5] = "C";
    NumberString[NumberString["D"] = 6] = "D";
})(NumberString || (NumberString = {}));
var NumberList2;
(function (NumberList2) {
    NumberList2["A"] = "b";
    NumberList2[NumberList2["b"] = 4] = "b";
    NumberList2[NumberList2["c"] = 5] = "c";
    NumberList2[NumberList2["d"] = 6] = "d";
})(NumberList2 || (NumberList2 = {}));
console.log(NumberList.A);
