// 数字类型与枚举类型兼容
// 不同枚举类型之间是不兼容的
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["a"] = 0] = "a";
    Color[Color["b"] = 1] = "b";
    Color[Color["c"] = 2] = "c";
})(Color || (Color = {}));
var x = Status.Ready;
x = Color.a;
