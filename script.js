// Variables for Part 1.
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradientColor = document.querySelector("h3");
// Variables for Part 3.
var button = document.querySelector("button");


// Part 1: change linear gradient bakcground with color inputs.
function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " + 
        color1.value + 
        ", " + 
        color2.value + 
        ")";
    gradientColor.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// Part 2: initial color display match the background generated 
// and CSS linear gradient property on the first page load.
body.onload = setGradient;
// another solution: body.addEventListener("onload", setGradient());


// Part 3: add a button to generate two random color inputs.

// reference: https://levelup.gitconnected.com/generating-a-random-color-in-javascript-spice-up-your-dom-with-a-bit-of-chance-e8b36061421c
function createRandomColor() {
    const hexPart = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += hexPart[Math.floor(Math.random()*16)];
    }
    return color;
}

function randomButton() {
    color1.value = createRandomColor();
    color2.value = createRandomColor();
    setGradient();
}

button.onclick = randomButton;
