var reg = /\d{5}/;
console.log(reg.test("我的电话是10086"));  //true；

console.log(/[a-zA-Z]+/.test("hello")); //true
console.log(/./.test("除了回车换行以为的任意字符"));//true
console.log(/.*/.test("0个到多个"));//true
console.log(/.+/.test("1个到多个"));//true
console.log(/.?/.test("哈哈"));//true

console.log(/[0-9]/.test("9527"));//true
console.log(/[a-z]/.test("what"));//true
console.log(/[A-Z]/.test("Are"));//true
console.log(/[0-9a-zA-Z]/.test("9ebg"));//true
console.log(/b|(ara)/.test("abra"));//true
console.log(/[a-z]{2,3}/.test("arfsf"));//true
console.log(/\d/.test("998"));//true
console.log(/\d*/.test("998"));//true
console.log(/\d+/.test("998"));//true
console.log(/\d{0,}/.test("998"));//true

console.log(/\D/.test("eat"));//true
console.log(/\s/.test("  "));//true
console.log(/\S/.test("嘎嘎 "));//true
//_  不是特殊字符
console.log(/\w/.test("_"));//true
console.log(/\W/.test("_"));//false;
console.log(/\d{5}/.test("998")); //false













