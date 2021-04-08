
// {
//   let p=  new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved1');
//             console.log(11111);
//         }, 5000);
//     });
//     console.log(p);
// }


{
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('test');
            }, 5000);
        });
    }
}


async function asyncCall() {
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
