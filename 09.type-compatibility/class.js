// 只有类的实例部分会比较
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.feed = name;
    }
    return Animal;
}());
var Bed = /** @class */ (function () {
    function Bed(num) {
        this.feed = num;
    }
    return Bed;
}());
var a = new Animal(1);
var b = new Bed(2);
a = b;
b = a;
