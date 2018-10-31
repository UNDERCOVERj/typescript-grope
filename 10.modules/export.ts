const a = 1;
// exports.b = a;
export {a};
export {a as b};
export interface Animal {
    name: string;
    sayName(name: string): string;
}
export class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayName<T>(name: T): T {
        console.log(name);
        return name;
    }
}

console.log('aaa')