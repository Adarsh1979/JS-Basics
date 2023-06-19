// let multiply = function(x,y) {
//     return x*y;
// }

// let multiplyByTwo = multiply.bind(this, 8, 10);

// console.log(multiplyByTwo(2,7));

function curry(fn) {
    return function curried(...args1) {
        var adarsh = 50;
        if(args1.length < fn.length) {
            function innerMost(...nextArgs) {
                adarsh++;
                console.log(adarsh);
                return curried(adarsh, ...args1, ...nextArgs);
            }
            innerMost.adarsh = adarsh;
            return innerMost;
        }
        return fn(...args1);
    };
};

const sum = function(a,b,c) {
    return a+b+c;
}

const csum = curry(sum);
const ans = csum()(10)(20,30);
console.log(ans);