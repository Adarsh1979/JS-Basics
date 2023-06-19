const sleep = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${t} miliseconds completed`);
        }, t);
    })
}

const inputFunc = [() => sleep(3000), () => sleep(1000), () => sleep(6000),];

var promisePool = async function(functions, n) {
    // let ans = [];
    for(let i=0; i<functions.length; i+=n) {
        const batch = functions.slice(i, i+n);
        console.log(`Current batch ${i+1}: ${batch}`);
        const temp = await Promise.all(batch.map(func=>func()));
        console.log("resolved promises");
        console.log(temp);
    }
    // return Promise.resolve();
    return "ans";
};

// promisePool(inputFunc, 2).then((data) => {
//     console.log(data);
// })

const ans = promisePool(inputFunc, 2);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
}















// var promisePool = async function(functions, n) {
//     for(let i=0; i<functions.length; i+=n) {
//         const batch = functions.slice(i, i+n);
//         console.log(batch);
//         const ans = await Promise.all(batch.map(func => func()));
//     }
//     return Promise.resolve();
// };