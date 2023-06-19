// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/india')
// request.send();

// request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// })

// function getCountryData(country) {

//     const result = fetch(`https://restcountries.com/v3.1/name/${country}`);
//     result.then(function (data) {
//         console.log(data);
//         if(!data.ok) {
//             throw new Error(`Country not found ${data.status}`);
//         }
//         return data.json();
//     })
//     .then(function (result) {
//         console.log(result[0]);
//     })
//     .catch( err => alert(err.message) )
//     .finally(() => {
//         alert("finally executed")
//     })
// }

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     getCountryData("sffdsfsdfs");
// })



// console.log("Test start");
// setTimeout( function timerCallback() {
//     console.log("0 sec timer");
// }, 0);
// Promise.resolve("I am instantly resolved").then(function promiseCallback(res) {
//     console.log(res)
// });
// console.log("Test end");


// const lotteryPromise = new Promise(function (resolve, reject) {

//     if (Math.random() >= 0.5) {
//         resolve("You win");
//     }
//     else {
//         reject("You lose");
//     }
// });

// const ans = lotteryPromise
// .then( res => {
//     console.log(res);
//     return "success";
// })
// .catch(err => {
    //     console.log(err)
    //     return "failure";
    // });
    // console.log("Ans is: ", ans);
    
    










    
// Callback hell

// setTimeout(() => {
//     setTimeout( () => {
//         setTimeout( () => {
//             setTimeout( () => {
//                 console.log("I waited 4 seconds");
//             }, 1000);
//             console.log("I waited 3 seconds");
//         }, 1000);
//         console.log("I waited 2 seconds");
//     }, 1000);
//     console.log("I waited 1 seconds");
// }, 1000);



// Solution of Callback hell using promises

// const wait = (seconds) => {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve();
//         }, seconds*1000);
//     });
// }

// wait(1).then(() => {
//     console.log("I waited 1 seconds");
//     return wait(1);
// })
// .then(() => {
//     console.log("I waited 2 seconds");
//     return wait(1);
// })
// .then(() => {
//     console.log("I waited 3 seconds");
//     return wait(1);
// })
// .then(() => {
//     console.log("I waited 4 seconds");
//     return wait(1);
// })

// navigator.geolocation.getCurrentPosition( (position) => {
//     console.log(position);
// }, (err) => {
//     console.log(err);
// })
// console.log("end");


const getLocation = () => {
    return new Promise((resolve, reject) => {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     resolve(position);
        // }, (err) => {
        //     reject(err);
        // });
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

const promise = getLocation().then((data) => {
    console.log(data);
    return data;
})

console.log(promise);