let buldImageElement = document.getElementById("buldImage");
let catImageElement = document.getElementById("catImage");
let switchStatusElement = document.getElementById("switchStatus");
let switchOFFElement = document.getElementById("switchOFF");
let switchONElement = document.getElementById("switchON");


function offSwitch() {
    buldImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatusElement.textContent = "Switched OFF";
    switchONElement.style.backgroundColor = "#cbd2d9";
    switchOFFElement.style.backgroundColor = "#e12d39";
}

function onSwitch() {
    buldImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatusElement.textContent = "Switched ON";
    switchOFFElement.style.backgroundColor = "#cbd2d9";
    switchONElement.style.backgroundColor = "#22c55e";
}
