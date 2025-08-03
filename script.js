// to track score and rounds
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let roundCounter = 1;
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

// function to get human/user input/choice
// function getHumanChoice(){
//     let humanChoice = prompt('Enter your choice: \n Rock \n Paper \n Scissors');
//     while (humanChoice == ''){
//         humanChoice = prompt('Enter your choice: \n Rock \n Paper \n Scissors');
//     }
//     return humanChoice;
// }

// function to compare the human choice and computer choice
function playRound(humanChoice, computerChoice){
// make the humanChoice & computerChoice value lowercase so it don't have to be case sensitive 
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper"){
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Lose!");
        console.log("You Lose!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Lose!");
        console.log("You Lose!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Lose!");
        console.log("You Lose!");
        computerScore++;
    }
    else if (humanChoice === computerChoice) {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("It's a Draw!");
        console.log("It's a Draw");
    }
    else if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        alert("Invalid choice! \n Please input your choice again");
        playRound(humanChoice, getComputerChoice());
    }
    else {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Win!");
        console.log("You Win!");
        humanScore++;
    }
}

// get buttons and add functions to run playRound
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

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
    }
}

button1.addEventListener('click', () => humanChoiceSelector(button1));
button2.addEventListener('click', () => humanChoiceSelector(button2));
button3.addEventListener('click', () => humanChoiceSelector(button3));


// play the game and loop for how many amount of times based on the user choice
function playGame(){
        // invoke playRound function and use getHumanChoice and getComputerChoice as parameters for the comparison
        playRound(humanChoice, getComputerChoice());
        alert("Player Score: " + humanScore + "\n" +
            "Computer Score: " + computerScore
        );
        console.log("Player Score: " + humanScore + "\n" +
            "Computer Score: " + computerScore
        );
}