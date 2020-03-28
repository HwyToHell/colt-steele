document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM ready");
    document.querySelector("#limit").textContent = winningScore;
});

var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var reset = document.querySelector("#res");
var winningScoreInput = document.querySelector("#score-max")

function showScore(p1, p2) {
    var disp1 = document.querySelector("#score1");
    disp1.textContent = p1;
    if(p1 >= winningScore) {
        disp1.classList.add("winner");
    } else {
        disp1.classList.remove("winner");
    }

    var disp2 = document.querySelector("#score2");
    disp2.textContent = p2;
    if(p2 >= winningScore) {
        disp2.classList.add("winner");
    } else {
        disp2.classList.remove("winner");
    }
}

var p1Score = 0, p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Btn.addEventListener("click", function() { 
    if(!gameOver) {
        ++p1Score;
        showScore(p1Score, p2Score);
        if(p1Score >= winningScore) {
            gameOver = true;
        }
    }
});

p2Btn.addEventListener("click", function() { 
    if(!gameOver) {
        ++p2Score;
        showScore(p1Score, p2Score);
        if(p2Score >= winningScore) {
            gameOver = true;
        }
    }
});

reset.addEventListener("click", function() { 
    resetGame();
});

function resetGame() {
    p1Score = p2Score = 0;
    showScore(p1Score, p2Score);
    gameOver = false;
}

winningScoreInput.addEventListener("change", function() {
    winningScore = this.value;
    document.querySelector("#limit").textContent = winningScore;
    resetGame();
})