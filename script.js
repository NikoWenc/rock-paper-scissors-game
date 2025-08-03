// to track score and rounds
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let rounds = document.querySelector("#rounds").addEventListener("input", (event) => rounds = event.target.value);
let roundCounter = 1;

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
        buttonChoice.blur();
        playGame();
    }
    else if (buttonChoice.id == "button2"){
        humanChoice = "Paper";
        buttonChoice.blur();
        playGame();
    }
    else if (buttonChoice.id == "button3"){
        humanChoice = "Scissors";
        buttonChoice.blur();
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
    }else {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Win!");
        console.log("You Win!");
        humanScore++;
    }
}

// get element to display game status
const humanStatus = document.querySelector("#human-score");
const computerStatus = document.querySelector("#computer-score");
const roundsCounter = document.querySelector("#rounds-counter");

// update the textContent of score in the DOM
humanStatus.textContent = "Player Score: " + humanScore;
computerStatus.textContent = "Computer Score: " + computerScore;
roundsCounter.textContent = "Round Number: " + roundCounter;

// play the game and loop for how many amount of times based on the user choice
function playGame() {
    playRound(humanChoice, getComputerChoice());
    humanStatus.textContent = "Player Score: " + humanScore;
    computerStatus.textContent = "Computer Score: " + computerScore;
    roundsCounter.textContent = "Round Number: " + ++roundCounter;
    if (roundCounter > rounds){
        (humanScore > computerScore)? gameWinner("Player"): gameWinner("Computer"); 
    }
};

function gameWinner(winner) {
    alert("Winner is " + winner + "!");
    roundCounter = 0;
    humanScore = 0;
    computerScore = 0;
    humanStatus.textContent = "Player Score: " + humanScore;
    computerStatus.textContent = "Computer Score: " + computerScore;
    roundsCounter.textContent = "Round Number: " + ++roundCounter;
}