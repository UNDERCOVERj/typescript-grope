// null/undefined/0
var func = function (x) {
    return null;
};
var x;
var y;
// x = y; y有多余参数，而x没有
y = x;
var arr = [1, 2, 3];
arr.forEach(function (item, idx) { return console.log(item); });
var m = function () { return ({ x: 1 }); };
var n = function () { return ({ x: 1, y: 2 }); };
m = n;
// n = m; n上的y，m没有
function func2(x) {
    console.log(x);
}
func2();
