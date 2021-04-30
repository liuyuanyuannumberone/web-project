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


//rest  parameter
{
    function sum(base, ...all_var) {

        console.log(1,all_var); //数组
    }

    sum(1, 2, 3, 4, 5, 6, 7, 8);

}
//spread

{

    function add(x = 1, y = 2, z = 3) {
        console.log(x, y, z);
    }

    let arr = [4, 5, 6];
    // add(arr[0],arr[1],arr[2]);
    // add.apply(this, arr); //ES5
    add(...arr);


}

