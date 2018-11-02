var Animal;
(function (Animal) {
    var a = 1;
    var Panda = /** @class */ (function () {
        function Panda() {
        }
        return Panda;
    }());
    Animal.Panda = Panda;
})(Animal || (Animal = {}));
(function (Animal) {
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        return Cat;
    }());
    Animal.Cat = Cat;
})(Animal || (Animal = {}));
// 等同于
// namespace Animal {
//     export class Panda {}
//     export class Cat {}
// }
// 未导出的变量尽在其原有的命名空间里能访问
