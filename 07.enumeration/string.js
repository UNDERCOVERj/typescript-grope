var StringList;
(function (StringList) {
    StringList["A"] = "a";
    StringList["B"] = "b";
    StringList["C"] = "c";
    StringList["D"] = "d";
})(StringList || (StringList = {}));
// 异构枚举
var StringAndNumberList;
(function (StringAndNumberList) {
    StringAndNumberList["A"] = "a";
    StringAndNumberList[StringAndNumberList["B"] = 2] = "B";
})(StringAndNumberList || (StringAndNumberList = {}));
