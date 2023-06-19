// Consumer code

const cart = ["shoes", "pants", "kurta"];

const orderPromise = createOrder(cart);
console.log("created order and waiting for resolve/reject");
console.log(orderPromise);


orderPromise
    .then(function (orderId) {
        console.log("Resolved with PromiseResult: ", orderId);
        console.log(orderPromise);
        return orderId;
    })
    .then(function (dataFromPrevChain) {
        console.log("Inside second chain which is doing nothing");
        console.log("current data: ", dataFromPrevChain);
        return dataFromPrevChain;
    })
    .then(function (data) {
        console.log("Inside proceed API");
        console.log("current data: ", data);
        const paymentPromise = proceedToPayment(data);
        console.log("payment initiated: ");
        console.log(paymentPromise);
        console.log("After 3 sec: ");
        console.log(paymentPromise);
        
        return paymentPromise;
    })
    .then(function (paymentInfo) {
        console.log("data after procees API promise: ", paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })








// Producer code

function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        setTimeout(() => {
            resolve(orderId);
        }, 5000);
    })
    return pr;

}


function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("UPI: BharatPe");
        }, 3000);
    })
}


function validateCart(cart) {
    return true;
}