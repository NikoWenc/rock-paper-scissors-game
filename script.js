// Create a new function named getComputerChoice
function getComputerChoice(){
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”
       let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice){
        case 1:
            computerChoice= "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step
console.log(getComputerChoice());


// Write the logic to get the human choice
// Create a new function named getHumanChoice
function getHumanChoice(){
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs
    let humanChoice = Number(prompt('Enter your choice \n "1" for Rock \n "2" for Paper \n "3" for Scissors'));

    switch (humanChoice){
        case 1:
            humanChoice = "Rock";
            break;
        case 2:
            humanChoice = "Paper";
            break;
        case 3:
            humanChoice = "Scissors";
            break;
    }
    return humanChoice;
}
// Test what your function returns by using console.log
console.log(getHumanChoice());


// Declare the players score variables
// Create two new variables named humanScore and computerScore in the global scope

// Initialize those variables with the value of 0


// Write the logic to play a single round
// Create a new function named playRound

// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments

// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations

// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”

// Increment the humanScore or computerScore variable based on the round winner.


// Write the logic to play the entire game
// Create a new function named playGame

// Move your playRound function and score variables so that they’re declared inside of the new playGame function

// Play 5 rounds by calling playRound 5 times.

// 