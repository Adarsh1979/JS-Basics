console.log("hello");

const nums = [1,2,3,4,5];

const ans = nums.reduceRight(function (prevValue, curr, index, arr) {
    console.log(prevValue);
    console.log("curr value: ",curr);
    console.log("index: ",index);
    console.log("array: ",arr);
    console.log("\n");
    return prevValue+curr;
})
// console.log(ans);