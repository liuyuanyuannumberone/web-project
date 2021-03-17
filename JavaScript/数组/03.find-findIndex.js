//找到满足条件的索引 | 值  findIndex  find
{
    // arr.findIndex(callback(ele, index))
    // 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1，会立即返回该元素的索引
    // arr.find(callback(ele, index));
   //返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。会立即返回这个元素的值
    list = [{id: 1}, {id: 2}, {id: 1}];
    let index = list.findIndex(item => {
        if (item.id === 2) {
            return true;
        }
    });
    console.log(index); //1
}
{
    let students = [
        {id: 1, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉'},
        {id: 2, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉'},
        {id: 3, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉'},
        {id: 4, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉'},
        {id: 5, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉'}
    ];

    let stu = {id: 100, name: '张小二', gender: 0, age: 18, hobbies: '吃饭,睡觉'};

    let item = students.find(item => {
        return item.id === stu.id;
    });
    console.log(item);//{ id: 1, name: '张三', gender: 0, age: 18, hobbies: '吃饭,睡觉' }
    if (item === undefined) {
        console.log(1);  //执行
    }
}
