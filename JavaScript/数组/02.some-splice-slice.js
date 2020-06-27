/*
判断数组中是否有满足条件的元素
arr.some(currentValue,index,arr);
如果找到了这样一个值，some返回 true ,否则false；
在数组的some方法中，如果return true，就会立即终止这个数组的后续循环
*/

{
    let arr = ["12", "34", "45", "67", "76", "67", "454"];
    let flag = arr.some(ele => {
        return ele > 10;
    });
    console.log(flag);  //true
}
{
    list = [{id: 1}, {id: 2}];
    list.some((item, index) => {
        if (item.id === 1) {
            list.splice(index, 1);
            return true;
        }
    });
    console.log(list);
}




/*
*   splice
* （开始的位置，删除的个数，替换的元素的值）
一般用于删除数组中的元素，或者是替换元素，或者是插入元素，
* */

{
    //删除
    let arr5 = [1, 2, 3, 4];
    arr5.splice(2, 2);
    console.log(arr5);//[1,2]

//插入
    let arr6 = [1, 2, 3, 4];
    arr6.splice(2, 0, 4);
    console.log(arr6);//[1,2,4,3,4]

//替换
    let arr7 = [1, 2, 3, 4];
    arr7.splice(2, 1, 5);
    console.log(arr7);//[1,2,5,4]
}


//删除数组中只指定元素
{

    //第一种方法
    let arr2 = [1, 23, 3, 34, 5, 56, 67, 777, 67, 8, 9, 0, 4, 45, 4, 4, 4, 3, 3];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === 67) {
            arr2.splice(i, 1);
            i--;
        }
    }
//推荐第二种方法
    for (let i = arr2.length - 1; i >= 0; i--) {
        if (arr2[i] === 67) {
            arr2.splice(i, 1);
        }
    }
    console.log(arr2);
}



//slice 截取部分数据，返子集，不会改变原数组；
{
    let arr8 = [1, 2, 3, 4];
    arr9 = arr8.slice(1, 4);
    console.log(arr9);//[2,3,4]
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));//['camel', 'duck', 'elephant'];
}
