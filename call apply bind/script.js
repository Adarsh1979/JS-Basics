
let name1 = {
    firstname: "Adarsh",
    lastname: "Vishwakarma"
}

let name2 = {
    firstname: "Sahil",
    lastname: "Vishwakarma"
}


printFullName.call(name1, "Mumbai", "Maharashtra", "call");
printFullName.apply(name1, ["Mumbai", "Maharashtra", "apply"]);

const printMyName = printFullName.bind(name1, "Mumbai", "Maharashtra", "bind");
printMyName();
function printFullName(hometown, state, funcType) {
    console.log("Using " + funcType);
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state);
}