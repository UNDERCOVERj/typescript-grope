// 只有类的实例部分会比较
class Animal {
    feed: number;
    constructor(name: number) {
        this.feed = name;
    }
}

class Bed {
    feed: number;
    constructor(num: number) {
        this.feed = num;
    }
}

let a = new Animal(1);
let b = new Bed(2);

a = b;
b = a;