{
    //可选参数设置默认值，如果想跳过可选参数，给另外一个参数赋值，可以传undefined。
    //一般按照重要程度，依次写参数列表
    function test(x, y = 1, z = 2, d = x + y + z) {
        console.log('必须传的参数个数', test.length); //返回这个函数必传的参数个数
        console.log("传入的参数列表", Array.from(arguments)); //返回传入参数的数组  [ 2, undefined, 6 ]
        console.log(x, y, z, d);
    }

    test(3);
    test(2, undefined, 6);
}





