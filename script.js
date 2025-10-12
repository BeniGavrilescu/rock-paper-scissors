let number = parseInt(prompt("Please insert the number of round of the rock-paper-scissors: "));
let userPoints = 0;
let computerPoints = 0;

if(number == 1)
    console.log("You choosed to play one round.");
else
    console.log("You choosed to play", number, "rounds.");
const chooses = ["rock", "paper", "scissors"];
console.log("Before to start, you will make your choice by typing a number. 0 is for rock, 1 is for paper, 2 is for scissors");

for(let i = 1; i <= number; i++) {
    alert("Round " + i + ".");
    let userChoose = parseInt(prompt("Type 0 (rock), 1 (paper), 2 (scissors): ")), touchedTheButton = false, computerWin = false, userWin = false;
    let computerChoise = Math.floor(Math.random() * 3);

    if(userChoose == 0) { // user choose rock
        if(computerChoise == 1) {
            computerWin = true;
            computerPoints++;
        }
        else if(computerChoise == 2) {
            userWin = true;
            userPoints++;
        }
    }
    else if(userChoose == 1) { // user choose paper
        if(computerChoise == 0) {
            userWin = true;
            userPoints++;
        }
        else if(computerChoise == 2) {
            computerWin = true;
            computerPoints++;
        }
    }
    else if(userChoose == 2) { // user choose scissors
        if(computerChoise == 0) {
            computerWin = true;
            computerPoints++;
        } 
        else if(computerChoise == 1) {
            userWin = true;
            userPoints++;
        }
    }
    else { // if user make wrong choose
        alert("Wrong choose.")
        touchedTheButton = true;
        i--;
    }


    if(touchedTheButton == false) 
        alert("You choosed the " + chooses[userChoose] + ".\nThe computer choosed " + chooses[computerChoise] + ".");
    if(computerWin == true) 
        alert("The computer win a point. \n Computer points: " + computerPoints + "\n User points: " + userPoints);
    else if(userWin == true)
        alert("You win a point. \n Computer points: " + computerPoints + "\n User points: " + userPoints);
    else if(touchedTheButton == false)
        alert("It's a tie. \n Computer points: " + computerPoints + "\n User points: " + userPoints);
}

if(computerPoints > userPoints)
    alert("The computer win");
else if(userPoints > computerPoints)
    alert("You win");
else
    alert("Final: It's a tie");