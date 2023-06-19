var outer = function(param) {
    var age = 3;
    const inner = function() {
        console.log("Name: " + param);
        console.log(age);
    }
    age = 7;
    return inner;
}

var ans = outer("adarsh");
ans();