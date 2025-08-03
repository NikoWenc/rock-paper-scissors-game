// to track score and rounds
let humanScore = 0;
let computerScore = 0;
// let rounds = 0;
// let roundCounter = 1;
let humanChoice;

// function to randomly generate computer choice
function getComputerChoice(){
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

// get buttons and add functions to run playRound
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// function to get human/user input/choice
function humanChoiceSelector(buttonChoice) {
    if (buttonChoice.id == "button1"){
        humanChoice = "Rock";
        playGame();
    }
    else if (buttonChoice.id == "button2"){
        humanChoice = "Paper";
        playGame();
    }
    else if (buttonChoice.id == "button3"){
        humanChoice = "Scissors";
        playGame();
    }};

button1.addEventListener('click', () => humanChoiceSelector(button1));
button2.addEventListener('click', () => humanChoiceSelector(button2));
button3.addEventListener('click', () => humanChoiceSelector(button3));

// function to compare the human choice and computer choice
function playRound(humanChoice, computerChoice){
// make the humanChoice & computerChoice value lowercase so it don't have to be case sensitive 
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    function displayLose(humChoice, comChoice){
        alert("your choice is: " + humChoice + "\nvs" + "\ncomputer choice is: " + comChoice);
        alert("You Lose!");
        console.log("You Lose!");
        computerScore++;
    }

    if (humanChoice === "rock" && computerChoice === "paper") displayLose(humanChoice, computerChoice);
    else if (humanChoice === "paper" && computerChoice === "scissors") displayLose(humanChoice, computerChoice);
    else if (humanChoice === "scissors" && computerChoice === "rock") displayLose(humanChoice, computerChoice);

    else if (humanChoice === computerChoice) {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("It's a Draw!");
        console.log("It's a Draw");
    }
    else {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Win!");
        console.log("You Win!");
        humanScore++;
    }
}

// play the game and loop for how many amount of times based on the user choice
function playGame(){
        // invoke playRound function and use getHumanChoice and getComputerChoice as parameters for the comparison
        playRound(humanChoice, getComputerChoice());
        alert("Player Score: " + humanScore + "\n" +
            "Computer Score: " + computerScore
        );
        console.log("Player Score: " + humanScore + "\n" +
            "Computer Score: " + computerScore
        );};