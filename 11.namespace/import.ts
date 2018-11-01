/// <reference path="namespace.ts" />
/// <reference path="namespace2.ts" />
let panda: Validation.PandaInterface = {
    face: 'red'
}
let name2: string = Validation.name;

// tsc --outFile sample.js Test.ts 把所有的输入文件编译为一个输出文件