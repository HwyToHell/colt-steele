var playModeEasy;
var isGameOver;
var guessColor = { red: 0, green: 0, blue: 0 };
var nGuessColors;
var easyBtn;
var hardBtn;
var colors;
var headerBgColor;




document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM ready");
    headerBgColor = document.querySelector("#header").style.backgroundColor;

    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click", newGame);

    easyBtn = document.querySelector("#easy");
    easyBtn.addEventListener("click", setEasy);

    hardBtn = document.querySelector("#hard");
    hardBtn.addEventListener("click", setHard);

    initSquareClickBtns();

    setEasy();
    newGame();
});


function setEasy() {
    playModeEasy = true;
    nGuessColors = 3;
    easyBtn.classList.toggle("btn-sharp-selected");
    document.querySelector("#row-hard").classList.toggle("hidden");
    newGame();
    console.log("mode easy", playModeEasy);
}

function setHard() {
    playModeEasy = false;
    nGuessColors = 6;
    easyBtn.classList.toggle("btn-sharp-selected");
    document.querySelector("#row-hard").classList.toggle("hidden");
    newGame();
    console.log("mode easy", playModeEasy);
}

function newGame() {
    // delete "Correct!"" and "Play Again?" message
    document.querySelector("#again").textContent = "";
    document.querySelector("#play").textContent = "NEW COLORS";
    
    // change color in headline back to blue
    document.querySelector("#header").style.backgroundColor = headerBgColor;

    isGameOver = false;
    colors = RGBArray(nGuessColors);
    guessColor = pickGuessColor(colors);
    document.querySelector("#color-code").textContent = makeColorString(guessColor); 
    colorButtons(colors);   
    console.log(guessColor);
}


function initSquareClickBtns() {
    var squareBtns = document.querySelectorAll(".square");
    squareBtns.forEach(function(btn) {
        btn.addEventListener("click", hasSameColor);
    });
}

function hasSameColor() {
    if(isGameOver) {
        console.log("game over");
        return;
    }

    // compare hex representation of colors
    if (RGBToHex(guessColor) == DOMStyleToHex(this.style.backgroundColor)) {
        finishGame(RGBToHex(guessColor));
    } else {
        tryAgain();       
    }
}


function DOMStyleToHex(color) {
    // regex: split by ( and , into color components
    // might be browser dependent and not work with Internet Explorer
    var components = color.split(/\(|,/);
    return "#"  + compToHex(parseInt(components[1]))
                + compToHex(parseInt(components[2]))
                + compToHex(parseInt(components[3]));
}


function tryAgain() {
    // show try again message
    document.querySelector("#again").textContent = "Try Again!";
}


function finishGame(color) {
    // show Correct! message
    document.querySelector("#again").textContent = "Correct!";
    document.querySelector("#play").textContent = "Play Again?";    

    // change color in headline
    console.log("finish", color);
    document.querySelector("#header").style.backgroundColor = color;   

    // set game over
    isGameOver = true;
}



function colorButtons(colors) {
    var squareBtns = document.querySelectorAll(".square");
    for(var i = 0; i < colors.length; ++i) {
        squareBtns[i].style.backgroundColor = RGBToHex(colors[i]);
        console.log(RGBToHex(colors[i]));
    }
}

function makeColorString(RGB) {
    return RGB.red + ", " + RGB.green + ", " + RGB.blue;
}

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandRGB() {
    var rgb = {
        red: getRandInt(256),
        green: getRandInt(256),
        blue: getRandInt(256)
    }
    return rgb;
}



function pickGuessColor(colors) {
    return colors[Math.round(Math.random() * colors.length)];
}

function compToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + compToHex(r) + compToHex(r) + compToHex(r);
}

function RGBToHex(RGB) {
    return "#" + compToHex(RGB.red) + compToHex(RGB.green) + compToHex(RGB.blue);
}

// fill array with 6 rgb value
function fillColorArray(arrLen) {
    var colors = [];
    for (var i = 0; i < arrLen; ++i) {
        colors[i] = rgbToHex(getRandInt(256), getRandInt(256), getRandInt(256));
    }
    return colors;
}

function RGBArray(len){
    var rgb = [];
    for (var i = 0; i < len; ++i) {
        rgb[i] = {  red: getRandInt(256),
                    green: getRandInt(256),
                    blue: getRandInt(256) }
    }
    return rgb;

}

// generate 6 colors (array)
// pick one randomly
// show this color