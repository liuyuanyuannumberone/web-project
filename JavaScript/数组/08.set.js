/*
* set数组去重
*
* */
let arr = [1, 2, 3, 4, 1, 3, 4, 45, 5, 2, 24, 5, 5, 2, 23, 4, 4, 3, 4, 6, 1, 1];
let arr1 = [...new Set(arr)];
console.log(arr1);

//字符串去重函数
function removeString(string) {
    return [...new Set(string)].join("-");
}

var str = removeString("123456445566");
console.log(str);


/*
* set并集，交集
*
* */

let unionSet = new Set([...[1, 2, 3, 4, 5], ...[6, 7, 8, 9, 10]]);
console.log(Array.from(unionSet));


let intersect = new Set([...new Set([1, 26, 7, 8])].filter(x =>
    new Set([6, 7, 8, 9, 10]).has(x)));
console.log(Array.from(intersect));//[7,8]