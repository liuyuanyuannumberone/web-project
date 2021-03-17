let path='/api/model/ema-001';
console.log(path.lastIndexOf("/"));
console.log(path.substring(path.lastIndexOf("/") + 1));
console.log(path);


let obj={"lyy":"aaa","wjj":"bbbbb"};
for (let i in obj ){
    console.log(i);
}

let refer='https://192.16.66.143:9002/#/detail';
console.log(refer.substring(refer.indexOf("#/") + 2, refer.length));

