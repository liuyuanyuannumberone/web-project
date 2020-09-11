// let  str="[aaaa]我的爹娘[user]你是[mmm]你好[use]";
let str = "[mmmms][asasasa]";
if (str.length > 0) {
    let regex = /\[(.+?)\]/g;
    arr = str.match(regex);

    if (arr && arr.length > 0) {
        arr.forEach(item => {
            item = item.slice(1, item.length - 1);
            console.log(item);
        })
    }
    console.log(arr);
}


let obj = {"上海": 123, "广州": 345};
for (let item in obj) {
    console.log(item);
}

