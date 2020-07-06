//对象数组互化
let obj = {
    name: '刘园园',
    age: 25,
};
console.log(Object.keys(obj));   //取出对象的键作为数组  [ 'name', 'age' ]
console.log(Object.values(obj));   //取出对象的值作为数组 [ '刘园园', 25 ]
console.log(Object.entries(obj));   //把对象的键值数组  [ [ 'name', '刘园园' ], [ 'age', 25 ] ]


//把对象中的值组成键值对；
var shopCount = {};
car = [{id: 2, count: 34}, {id: 5, count: 45}];
car.forEach(item => {
    shopCount[item.id] = item.count;
});
console.log(shopCount);
