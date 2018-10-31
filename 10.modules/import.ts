import {a, Cat as Dog} from './export';
import module = require('./export=');
console.log(module.c);
import './demo.js'; // 具有副作用的导入模块
console.log(Dog);
import * as obj from './export-last';
import A from './export-default';
console.log(obj);
console.log(a);