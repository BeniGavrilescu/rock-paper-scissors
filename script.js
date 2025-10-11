let number = parseInt(prompt("Please insert the number of round of the rock-paper-scissors: ")), userPoints = 0, computerPoints = 0;
if(number == 1)
    console.log("You choosed to play one round.");
else
    console.log("You choosed to play", number, "rounds.");
const chooses = ["rock", "paper", "scissors"];
console.log("Before to start, you will make your choice by typing a number. 0 is for rock, 1 is for paper, 2 is for scissors");
for(let i = 1; i <= number; i++) {
    console.log(" ");
    console.log("Round", i);
    let userChoose = parseInt(prompt("Type 1 (rock), 2 (paper), 3 (scissors): "));
    let computerChoise = Math.floor(Math.random() * 3);
    if(userChoose == 1) {
        if(computerChoise == 1)
            console.log("It's a tie");
        else if(computerChoise == 2) {
            console.log("You win a point.");
            userPoints++;
        }
        else {
            console.log("The computer win a point.");
            computerPoints++;
        }
    }
    else if(userChoose == 2) {
        if(computerChoise == 1) {
            console.log("The computer win a point.");
            computerPoints++;
        }
        else if(computerChoise == 2) {
            console.log("It's a tie");
        }
        else {
            console.log("You win a point.");
            userPoints++;
        }
    }
    else if(userChoose == 3) {
        if(computerChoise == 1) {
            console.log("The computer win a point.");
            computerPoints++;
        }
        else if(computerChoise == 2) {
            console.log("You win a point.")
            userPoints++;
        }
        else {
            console.log("It's a tie");
        }
    }
    else {
        console.log("Wrong choose");
        i--;
    }
    console.log("User points:", userPoints);
    console.log("Computer points: ", computerPoints);
}
if(computerPoints > userPoints)
    console.log("The computer win");
else if(userPoints > computerPoints)
    console.log("You win");
else
    console.log("Final: It's a tie");