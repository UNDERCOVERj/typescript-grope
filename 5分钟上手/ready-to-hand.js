function greet(name) {
    return 'hello' + name;
}
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.fullname = name + ' fullname';
    }
    return Student;
}());
function getPerson(person) {
    return person;
}
var user = 'panda';
console.log(greet(user));
var person = getPerson({
    name: 'panda',
    age: 10
});
console.log(new Student(person.name, person.age));
