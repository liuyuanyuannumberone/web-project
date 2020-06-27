// 伪数组的长度不可变  伪数组不可以使用数组中的方法
const obj1 = {
    0: 'a',
    1: 'b',
    length: 2
}; // 伪数组

const arr1 = Array.prototype.slice.call(obj1);  //真正转化为数组
console.log(Array.isArray(arr1)); //true

const obj = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
};
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}

