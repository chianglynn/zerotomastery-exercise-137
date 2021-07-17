const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const gradientColor = document.querySelector("h3");
const button = document.querySelector("button");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    gradientColor.textContent = body.style.background;
}

// Reference: https://levelup.gitconnected.com/generating-a-random-color-in-javascript-spice-up-your-dom-with-a-bit-of-chance-e8b36061421c
function createRandomColor() {
    const hexPart = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexPart[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomButton() {
    color1.value = createRandomColor();
    color2.value = createRandomColor();
    setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener('click', randomButton);