var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");

function getHex() {
    var colorArray = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var hex = "#";

    for (var counter = 0; counter < 6; counter++) {
        hex += colorArray[Math.floor(Math.random()*16)];
    }
    return hex;
}

function randomColor () {
    color1.value = getHex();
    color2.value = getHex();

    changeColor();
}

function changeColor () {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    h3.textContent = body.style.background + ";";
}

changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
document.querySelector("#rand").addEventListener("click", randomColor);