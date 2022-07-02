let p_item = document.getElementById("player-item");
let cpu_item = document.getElementById("computer-item");
let start = document.getElementById("start-btn");
let pAgain = document.getElementById("game-end");
let items = ["Rock ✊", "Paper 📃", "Scissors ✂"];


function getPlayerHand() {
    //for (i = 0; i < items.length; i++)
    let p_index = Math.floor(Math.random() * 3);
    return items[p_index];
}

function getCPUHand() {
    //for (i = 0; i < items.length; i++)
    let cpu_index = Math.floor(Math.random() * 3);
    return items[cpu_index];
}

function startGame() {
    pAgain.style.display = "none";
    start.style.display = "none";
    p_item.textContent += " " + getPlayerHand();
    cpu_item.textContent += " " + getCPUHand();
    timerPlayAgain = setTimeout(() => pAgain.style.display = "grid", 1000);
}

function playAgain() {
    clearTimeout(timerPlayAgain);
    pAgain.style.display = "none";
    p_item.textContent = "Player: ";
    cpu_item.textContent = "Computer: ";
    startGame();
}


function PlaySound() {
    document.getElementById("mySound").play();
}
