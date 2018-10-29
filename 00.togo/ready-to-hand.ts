function greet(name: string) { // 类型注解，类型错误js文件还是会被创建
    return 'hello' + name;
}
class Student {
    fullname: string;
    constructor(public name, public age) { // public表示同名变量this.name = name;
        this.fullname = name + ' fullname';
    }
}
interface Person { // 接口
    name: string,
    age: number
}
function getPerson(person: Person) {
    return person
}
let user = 'panda';
console.log(greet(user));
let person = getPerson({
    name: 'panda',
    age: 10
})
console.log(new Student(person.name, person.age))