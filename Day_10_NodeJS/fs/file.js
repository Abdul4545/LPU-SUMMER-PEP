const fs = require("fs")


// const data1 = fs.readFileSync("./text.txt", "utf-8")
// console.log(data1);


// const data2 = fs.readFileSync("./text.txt")
// const text = data2.toString()
// console.log(text);

// console.log("start");

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//     if(err) console.log("Error occured", err);
//     else console.log(data);
// })

// console.log("End");


// fs.writeFileSync("./demo.txt", "hello from write file sync");


// console.log("start");

// fs.writeFile("./demo1.txt", "hello from write file async ", (err, data) => {
//     console.log(err, data);
// });

// console.log("End");


// using promises

const fsPromises = require("fs/promises");
const { parse } = require("path");

// console.log("Start");

// fsPromises.readFile("./demo1.txt", "utf-8")
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Error", err);
// })

// console.log("End");


// fsPromises.writeFile("./demo1.txt", "Hello Moid Khan\n")
// .then(() =>console.log("Write done"))
// .catch((err) => console.log(err));

// fsPromises.appendFile("./demo.txt", "\ndummy text\n").then(() => {
//     console.log("Append done!");
// }).catch((err) => console.log(err))


let ans = 0;
fsPromises.readFile("./data.json", "utf-8")

.then((data) => {
    arr = JSON.parse(data)
    // console.log(arr);
    let mathTotal = 0, scienceTotal = 0;



    // for(let i = 0; i < arr.length; i++) {
    //     mathTotal = mathTotal + arr[i].Math;
    //     scienceTotal = scienceTotal + arr[i].Science
    // }

    // console.log(mathTotal);
    // console.log(scienceTotal);

    console.log(getObj(arr, 3));;

})

.catch((err) => console.log(err))

function getObj(arr, id) {

    // const res = arr.filter((element) => {
    //     if(element.id === id) return true;
    //     else return false;
    // })

    const res = arr.find((element) => {
        if(element.id === id) return true;
        else return false;
    })

    return res;
}

