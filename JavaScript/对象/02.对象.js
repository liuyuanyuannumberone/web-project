//对象浅拷贝
const source = {name: "liuyy", sex: 1};
const target = {};
Object.assign(target, source);  //这样的拷贝是直接开辟了新的地址
source.name = "zc";
console.log(target); //{ name: 'liuyy', sex: 1 }


const test1 = {a: {b: {c: {d: 1}}}};
const test2 = {a: {b: {c: {d: 1}, f: 2}}, e: 0};
const test3={}
Object.assign(test2, test1);   //对于引用类型的数据直接复制，而不会遍历内部  f丢失 e保留
console.log(test2);

Object.assign(test3, test1)
console.log(test3);
