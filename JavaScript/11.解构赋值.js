/*
   * 对象结构赋值
   * */
let file = {
    type: 'image/png',
    size: 1432,
    name: '图片名',
};
const {type, size, name} = file;
const {type: var1, size: var2, name: var3} = file; //type是匹配的模式，fileType才是变量


console.log(type, size, name); //image/png 1432 图片名
console.log(var1, var2, var3); //image/png 1432 图片名



/*
*
* 数组
* */


{
    let [a, b, c] = [1, 2, 3];
    // console.log(a, b, c); //1 2 3
}
{
    let [a, [[b], c]] = [1, [[2], 3]];
    // console.log(a, b, c); //1 2 3
}
{
    let [, , c] = [1, 2, 3];
    let [, ...all] = [1, 2, 3, 4];
    // console.log(c);//3
    // console.log(all); //[ 2, 3, 4 ]
}
