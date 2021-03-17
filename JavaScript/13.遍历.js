let arr = [7, 4, 4, 5, 9, 5, 6, 7];


for (let i = 0; i < arr.length; i++) {

}


arr.forEach((item, index) => {
    // console.log(typeof index,index);// number
});

//如果所有元素都通过检测返回 true，否则返回 false。
// 每次循环都必须return true，否则停止。
let flag = arr.every(item => {
    // console.log(item);
    return item > 0
});
// console.log(flag);


//这里边的 i是字符串,是索引,不是数字, 支持continue和break；
for (let i in arr) {
    console.log(typeof i, i);
}


//可以遍历任何数据结构
for (let item of arr) {
    console.log(item);
}
console.log("============");

let obj = {name: 'lyy', age: 14};


let flag1 = false;
for (let j = 0; j < 2; j++) {
    for (let i in obj) {
        console.log(typeof i + '----' + i + ':' + obj[i]);
        flag1 = true;
        break;
    }
    console.log(j);
    if (flag1) break;
}



