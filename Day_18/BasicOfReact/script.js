// const parent = document.getElementById('root');

// const list = document.createElement("ul");
// // ul.style.display = "block";
// // ul.style.width = "400px";
// // ul.style.padding = "24px";
// // ul.style.backgroundColor = "beige";
// // ul.style.margin = "48px auto";

// list.setAttribute("style", "width: 400px; display: block; padding: 24px; background-color: beige; margin: 48px auto;");

// parent.appendChild(list);

// const li1 = document.createElement("li");
// li1.innerText = "Item 1";
// li1.style.margin = "12px";
// li1.style.color = "brown";

// list.appendChild(li1);

// const li2 = document.createElement("li");
// li2.innerText = "Item 2";
// li2.style.margin = "12px";
// li2.style.color = "brown";

// list.appendChild(li2);



// using react

// const listItem1 = React.createElement("li", {}, "Item 1")
// const listItem2 = React.createElement("li", {}, "Item 2")
// const list = React.createElement("ul", {}, [listItem1, listItem2])

// const root = ReactDOM.createRoot(parent);
// root.render(list);

// const d1 = document.createElement("div");
// console.dir(d1);
// const d2 = React.createElement("div", {}, "Hello");
// console.dir(d2);


// ----------------- Second Half ----------------------

// ------------- React with babel ---------------------

// const listItem1 = <li>Item 1</li>
// const list = <ul>{listItem1}</ul>

// const root = ReactDOM.createRoot(parent);
// root.render(list)

// ------------ React with JSX (All CDN) ------------------- 
const parent = document.getElementById("root")

const root = ReactDOM.createRoot(parent)

const TextHello = <h3>Hello</h3>

const TextFrom = () => {
    return <h3>FROM</h3>
}

const TextReact = () => <h3>React</h3>

const container = (<div>
        {TextHello}
        {TextFrom()}
        {TextReact()}
    </div>);

root.render(container)







