{
    //伪数组用索引存储数据，同时指定长度
    // 伪数组不可以使用数组中的方法,但是可以像数组一样遍历
    const obj = {
        0: 'a',
        1: 'b',
        length: 2
    }; // 伪数组
    console.log(obj[0]);//a
    // const arr = Array.prototype.slice.call(obj);  //真正转化为数组
    // const arr = [].slice.call(obj);  //真正转化为数组

    const arr = Array.from(obj);  //真正转化为数组
    console.log(Array.isArray(arr)); //true
}

{
    const obj = {
        0: 10,
        1: 20,
        2: 30,
        length: 3
    };
    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i]);
    }
}


