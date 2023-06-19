// ************************* EXAMPLE OF CLOSURE *************************

// const a1 = 7800;
// var a2 = 999;
// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             const abc = 567;
//             console.log("a: ",a, " & b: ",b, " abc: ",abc);
//         }
//         // console.log("exec closure: ");
//         // y();
//         return y;
//     }
//     var temp = x();
//     temp();
//     return temp;
// }

// var temp2 = z();
// console.log("Now running temp2 i.e. returned by z");
// temp2();



// ************************* CLOSURE SETTIMEOUT *************************

// function x() {

//     for (var i = 1; i <= 5; i++) {
//         console.log("Running for i= ",i );
//         function close(num) {
//             setTimeout(function () {
//                 console.log(num);
//             }, num * 1000);
//         }
//         close(i);

//     }
// }

// x();





// for (var i = 1; i <= 5; i++) {
//     x(i);
//     function x(num) {
//         setTimeout(function () {
//             console.log(num);
//         }, num*1000);
//     }

// }


// function counter() {
//     var cnt = 0;

//     this.increment = function() {
//         cnt++;
//         console.log(cnt);
//     }
    
//     this.decrement = function() {
//         cnt--;
//         console.log(cnt);
//     }
// }

// var counter1 = new counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// counter1.decrement();
// counter1.decrement();
// counter1.decrement();
// counter1.decrement();




// var b = function xyz() {
//     console.log(xyz);
// }

// b();



// const b = function (param1) {
//     param1();
//     return function () {
//         console.log("World");
//     }
// }

// const ans = b(function () {
//     console.log("I Am Callback");
// });

// console.log(ans);
// ans();






setTimeout(function () {
    console.log("timer");
}, 3000);

function x(y) {
    console.log("I am x");
    y();
}

x(function () {
    console.log("I Am callback");
});
