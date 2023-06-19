// const myAsyncFunction = async () => {
//     try {
//         console.log("try executed");
//         const result1 = await Promise.resolve("I am resolved promise1");
//         const result2 = await Promise.resolve("I am error rejected promise2");
//         // ... more awaited promises ...
//         return "result2";
//     } catch (error) {
//         console.log("catch executed");
//         console.log(error);
//         // throw error;
//     }
// }
// console.log("start");

// console.log( myAsyncFunction())

// myAsyncFunction()
// .then(data => console.log( "hello ",data))

// console.log("end");


const sleep = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${t} miliseconds completed`);
        }, t);
    })
}


// const sleep = (t) => new Promise(res => setTimeout(res, t));
// sleep(5000).then(() => {
//     console.log("resolved");
// })

// const input = [sleep(3000), sleep(2000), sleep(3000)];
// Promise.all(input).then((data) => {
//     console.log(data);
// })


// const inputFunc = [
//     function () {
//         return sleep(3000);
//     },
//     function () {
//         return sleep(2000);
//     },
//     function () {
//         return sleep(3000);
//     },
    
// ]
const inputFunc = [() => sleep(3000), () => sleep(2000), () => sleep(3000),];

var promisePool = async function(functions, n) {
    for(let i=0; i<functions.length; i++) {
        const ans = await functions[i]();
        console.log("Next line");
        console.log(`Promise Resolved: ${ans}`);
    }
    return Promise.resolve("ans");
};

promisePool(inputFunc, 2).then((data) => {
    console.log(data);
})