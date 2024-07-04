// function xyz() {
//     console.log("Inside XYZ");
//     function temp(x) {
//         console.log(x*x);
//     }

//     console.log("end");
//     temp(12);
// }

// console.log("start");
// xyz()




// ---------------------------------------------


// const button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', callback)

// function callback() {
//     alert("button clicked")
// }


// anonymous function
// button.addEventListener('click', function() {
//     alert("button clicked")
// })


// arrow function
// button.addEventListener('click', () => {
//     alert("button clicked")
// })


// console.log("start");

// const input = document.getElementsByTagName('input')[0];


// function cb(ev) {
//     console.log("Input is : ", ev.target.value);
// }

// input.addEventListener('keyup', cb)

// console.log("end");


// console.log("Start");

// const delay = 10000;

// const callBack = () => {
//     console.log("CallBack Called");
// }

// setTimeout(callBack, delay)


// setTimeout(() => {
//     console.log("CallBack Called");
// }, 1000)

// console.log("End");



// console.log("start");

// setTimeout(() => {
//     console.log("Cb called");

//     setTimeout(() => {
//         console.log("Internal cb called");
//     }, 1500);

// }, 1000);

// console.log("End");







// start -> mid -> C -> END -> A -> B -> D

// console.log("start");

// setTimeout(() => {
//     console.log("A");
// }, 0);

// console.log("Mid");

// function abc() {
//     console.log("B");
// }

// function efg() {

//     console.log("C");

//     setTimeout(() => {
//         console.log("D");
//     }, 0)
// }

// setTimeout(abc, 0)
// efg();
// console.log("End");




// ------------- promise -------------------

// promise is an object
// const pr = fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-14&sortBy=publishedAt&apiKey=9cddd5760b3444c18ad08ebe5cdfa885")


// const cb1 = (res) => {
//     const pr2 = res.json();

//     pr2.then((data) => {
//         console.log(data);
//     })
//     // console.log(data);


// }

// const cb2 = (res) => {
//     console.log("Failed" + res);
// }

// pr.then(cb1).catch(cb2);



const field = document.getElementById("searchField")
const btn = document.getElementsByClassName('search-btn')[0];


// const request = fetch('https://dummyjson.com/products/search?q=phone')

// request.then(res => res.json())
// request.then(console.log);


const request = fetch('https://dummyjson.com/products')

request.then((result) => {
    const data = result.json();

    data.then((data) => {
        console.log(data);
    })

    data.then(renderUI)

}).catch((error) => {
    console.log(error);
});




const root = document.getElementById("root");

const renderUI = (data) => {

    root.innerHTML = "";

    const products = data.products; 
    // console.log(products);

    if(products.length == 0) {
        root.innerHTML = `
        <h2 class = "nothing">Nothing to Show, Search something else</h2>`
    }

    for(let i = 0; i < products.length; i++) {
        const card = document.createElement('div');
        card.className = "product-card"
        card.innerHTML =
            `
                <h3>${products[i].title}</h3>
                <p>${products[i].description}</p>
                <img src = ${products[i].images[0]} />
                <p>Price - $ ${products[i].price} </p>
            `;

            root.append(card)
    }

}



btn.addEventListener('click', () => {
    const searchTerm = field.value;
    if (searchTerm) {
        fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`)
            .then(res => res.json())
            .then(data => {
                renderUI(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

