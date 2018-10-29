var Num;
(function (Num) {
    Num[Num["A"] = 2] = "A";
    Num[Num["B"] = 3] = "B";
    Num[Num["C"] = 4] = "C";
})(Num || (Num = {}));
var a = Num.A;
var num = Num[a];
console.log(num);
