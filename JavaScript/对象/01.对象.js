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

