// var x=5;
// setTimeout(function() {
//     console.log(x);
// }, 5000);
// console.log("End");

// function close() {
//     let count = 0;
//     return function xyz() {
//         console.log("Button clicked ", ++count);
//     }
// }
// let xyz = close();
// document.getElementById("clickMe").addEventListener("click", xyz);


// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function callback() {
//         console.log("Button clicked ", ++count);
//     });
// }

// attachEventListeners();


const github_api = "https://api.chucknorris.io/jokes/random";

const fetchPromise = fetch(github_api);

console.log(fetchPromise);

fetchPromise.then(function (result) {
    console.log(result);
})