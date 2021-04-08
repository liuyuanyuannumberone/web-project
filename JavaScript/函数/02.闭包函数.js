//1. ()()
(function () {
    console.log("我也是一个函数+one");
})();

//2.(()())
((function () {
    console.log("我也是一个函数+two");
})());

//3.(())
(function () {
    console.log("我也是一个函数+three");
}());



//如何把局部变量变成全局变量? 把局部变量给window就可以了
(function (window) {
    let num = 10;//局部变量
    window.number = num;
})(window);
console.log(window.number);//10
console.log(number);//10


//通过自调用函数产生一个随机数对象,在自调用函数外面,调用该随机数对象方法产生随机数
(function (window) {
    //产生随机数
    function Random() {}

    Random.prototype.getRandom = function () {
        return Math.floor(Math.random() * 5);
    };
    window.Random = Random;//全局构造函数
})(window);
let random = new Random();
console.log(random.getRandom());



//闭包的使用场景


