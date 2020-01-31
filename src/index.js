import "./index.scss";

const root = document.getElementById("root");

const element = document.createElement("div");
element.classList.add("MessageBox");
element.innerText = "Hello world! From Webpack!";
console.log("Hello world! From Webpack!")
root.appendChild(element);