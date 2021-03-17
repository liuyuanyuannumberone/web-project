let x = 1, y = 2, z = 3;
let m = 'lyy';
let obj = {
    x,
    y,
    z,
    [m]: 'liu',
    hello() {
        console.log('hello');
    },
};
console.log(obj); //{ x: 1, y: 2, z: 3, lyy: 'liu' }
obj.hello();


let test={
    "测试":11,
      32:"测试"
};

delete  test["测试"];
delete  test[32];
console.log(test);
