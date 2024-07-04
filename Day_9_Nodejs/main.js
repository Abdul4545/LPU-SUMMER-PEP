// const arr = require("./myMath.js")

// const ans = arr[0](12,20);

// const ans2 = arr[1](12,10);

// console.log(ans);

// console.log(ans2);


// 2nd way

// const [summ, mull] = require("./myMath.js")

// const ans = summ(12,20);

// const ans2 = mull(12,10);

// console.log(ans);

// console.log(ans2);



// the imported object name should be same as the exported
// const {sum, subtract} = require("./myMath.js")
const { subtract, sum } = require("./myMath.js")
console.log(sum(12, 344));
console.log(subtract(87, 12));


const figlet = require("figlet");

figlet("Kahkashan", (err, data) => {
    if (err) {
        console.log("Something went wrong...");
        // console.dir(err);
        return;
    }

    else {
        console.log(data);
    }
});