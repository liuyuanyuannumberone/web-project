arr = [0, 1, 2];

function test(arr, flag = false) {  // 不提供参数默认为quantity=1
    if (flag) {
        console.log(arr.length)
    } else {
        console.log(arr);
    }
}
test(arr);
test(arr, true);