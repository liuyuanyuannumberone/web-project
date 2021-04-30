{
    let arr=[1,2];
    let arrcpopy=arr;
    arr[1]=100;
   // console.log(arrcpopy);
}
/*
JSON.parse(JSON.stringify(arr))
* */
{
    let arr=[1,2];
    let arrcpopy=JSON.parse(JSON.stringify(arr));
    arr[1]=100;
 //   console.log(arrcpopy);
}

{
    let arr = [1,2];
    let arrcpopy = arr.slice(0);
    arr[1] = 100;
    //console.log(arrcpopy)
}

//concat
{
    let arr = [1,2];
    let arrcpopy = arr.concat();
    arr[1] = 100;
 //   console.log(arrcpopy)
}
//ES6
{
    let arr = [1,2];
    let [...arrcpopy] = arr;
    arr[1] = 100;
    console.log(arrcpopy)
}
