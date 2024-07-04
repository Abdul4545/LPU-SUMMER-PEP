function sum(a = 0, b = 0) {
    return a + b;
}

function subtract(a,b) {
    return a - b
}


console.log("Hello");


// module.exports = sum;


// exporting using array
// module.exports = [
//     sum, subtract
// ]


// exporting using object
module.exports = {
    sum, subtract
}