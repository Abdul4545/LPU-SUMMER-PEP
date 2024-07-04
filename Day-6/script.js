// let s2 = document.getElementsByTagName('section')

// let firstSection = s2[0];
// let title1 = firstSection.getElementsByTagName('h1');title1[0].innerHTML = "hello moid <br> how are you ?"


// let secondSection = s2[1];

// let title = secondSection.getElementsByTagName('h1');

// title[0].innerText = "Moid Khan <br>"

// let para = document.querySelector('section:last-of-type>p');

// para.innerHTML = "hi"

// para.className = "second"

// secondSection.setAttribute('class', 'second-sec')


// // adding html element
// const p1 = document.createElement("p");
// p1.innerHTML = "Kya kr rhe ho moid";

// secondSection.appendChild(p1)
// secondSection.append("hi moid")
// secondSection.prepend("kya kr rhe hoo")
// secondSection.removeChild(p1)
// secondSection.remove()


// function inputChanged(e) {
//     console.log("input changed");
//     console.log(e.target.value)
// }

// function handleUserName(e) {
//     console.log("Name : ", e.target.value);
// }

// function handleUserAge(e) {
//     console.log("Age : ", e.target.value);
// }


// handleSubmit = (event) => {
//     event.preventDefault();
//     console.dir(event.target)
// } 


// const handleSubmit = (e) => {
//     e.preventDefault();

//     const arr = e.target;

//     const name = arr[0].value;
//     const email = arr[1].value;

//     const form = document.getElementsByTagName("form")[0];

//     form.style.display = "none"

//     renderCard(name, email)
//     console.log(name, email);

// }

// const renderCard = (n, e) => {
//     const root = document.getElementById("root");
//     root.innerHTML = `
//     <h1>Name is : ${n}</h1>
//     <h1>Email is : ${e}</h1>
//     `
// }

// const showResult = (res) => {
//     console.log(res);
//     const root = document.getElementById("root");
//     root.innerText = res;
// }

// const printPretty = (res) => {
//     console.log(res);
//     const root = document.getElementById("root");
//     root.style.color = "red"
//     root.innerText = res;
// }

// // callback function
// const sum = (a, b, fun) => {
//     const res = a + b;
//     // showResult(res);
//     fun(res)
// }

// const mul = (a, b) => {
//     const res = a * b;
//     showResult(res)
// }

// const rr = sum(10, 39, printPretty)


const arr = ["Fruits", "Apple", "Mango"];

// const printValues = (a,b,c) => {
//     console.log("value is : ", a);
//     console.log("index is : ", b);
//     console.log("array is : ", c);
// }

// for(let i = 0; i < arr.length; i++) {
//     printValues(arr[i], i, arr)
// }

// arr.forEach(printValues)

// const arr1 = [1,2,3,4,5]
// let sum = 0;

// arr1.forEach((a) => {
//     sum += a
// })

// console.log(sum);


// const words = ["happ", "sad", "entertainment", "mystery"]


// words.filter((x) => {
//     if(x.length <= 5) {
//         console.log(x);
//     }
// })


console.log("start");

function abc(x) {
    console.log(x*2);
    temp(x/2);
}

abc(8)

console.log("mid");

function temp(x) {
    console.log(x/2);
}

console.log("end");

// GEC -> global execution context

