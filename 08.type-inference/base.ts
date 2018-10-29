let n = 3;
// 推断出n为number
function getNumber(x: number): number {
    return x;
}
getNumber(n);

// 从给定值推断出变量的类型
// 下面想推断出zoo的类型为Animal
/* let zoo = [new Rhino(), new Elephant(), new Snake()]; */
// 想让zoo推断为Animal类型，是不可能的，哈哈哈
// 除非自己声明，像这样：

/* let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()]; */

// 上下文类型：
window.onmousedown = function(e) {
    console.log(e.button); //<- Error
};