// Generates a random hex
const getHex = () => {
    const colorArray = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let hex = "#";

    for (let counter = 0; counter < 6; counter++)
        hex += colorArray[Math.floor(Math.random()*16)];
    return hex;
}

const randomColor = () => {
    document.getElementById("color1").value = getHex();
    document.getElementById("color2").value = getHex();
    changeColor();
}

//Updates the gradient display
const changeColor = () => {
   const body = document.querySelector("body");
   const color1 = document.getElementById("color1").value;
   const color2 = document.getElementById("color2").value;

   body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

   document.querySelector("h3").textContent = body.style.background;
}

document.addEventListener("load", changeColor());
document.getElementById("color1").addEventListener("input", changeColor);
document.getElementById("color2").addEventListener("input", changeColor);
document.getElementById("rand").addEventListener("click", randomColor);