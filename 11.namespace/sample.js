var Validation;
(function (Validation) {
    Validation.reg = /abc/;
    var PandaInterface = /** @class */ (function () {
        function PandaInterface(color) {
            this.face = color;
        }
        return PandaInterface;
    }());
    Validation.PandaInterface = PandaInterface;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    Validation.name = 'validation';
})(Validation || (Validation = {}));
console.log(Validation.name);
/// <reference path="namespace.ts" />
/// <reference path="namespace2.ts" />
var panda = {
    face: 'red'
};
var name2 = Validation.name;
// tsc --outFile sample.js Test.ts 把所有的输入文件编译为一个输出文件
