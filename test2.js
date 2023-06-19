// ************** HOISTING ***************

// getName();
// console.log(x);
// console.log(getName);

// var x = 6;


// function getName() {
//     console.log("Function call");
// }


// ************** HOW FUNCTION WORKS ***************

// var x = 1;
// a();
// b();
// console.log(x);


// function a() {
//     var x = 67;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


// console.log(this);
// hello();

// function hello() {
//     var x = 7;
//     console.log(x);
//     console.log(this);
//     console.log(this === window);
// }



// function a() {
//     console.log(b);
// }

// var b = 9;
// a();



// function a() {
//     console.log(b);
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// var b = 9;
// a();


// console.log("code started");

// var func1 = () => {
//     console.log("I m fun1");
// }

// let func2 = () => {
//     console.log("I m fun2");
// }


// const a4 = 100;
// {
    
//     console.log(a1);
//     console.log(a2);
//     console.log(a3);
//     var a1 = 7;
//     let a2 = 8;
//     const a3 = 9;
// }




// console.log(a);
// let a = 7;
// console.log(a);




// var a1 = 12;
// {
//     var a1 = 24;
//     {
//         {
//             let a1 = 95;
//             console.log(a1);
//         }
//         console.log(a1);
//     }
// }
// console.log(a1);



// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// var a = 12;

// if(true) {
//     var a = 100;
//     console.log("a: ",a);
// }

// console.log(a);



// let a = 10;

// if (true) {
//     var a = 33; // New value assigned
//     console.log(a);
// }

// console.log(a);

















function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();

z();

    