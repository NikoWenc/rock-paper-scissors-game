// to track score
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
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

// function to get human/user input/choice
function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: \n Rock \n Paper \n Scissors');
    while (humanChoice == null){
        humanChoice = prompt('Enter your choice: \n Rock \n Paper \n Scissors');
    }
    return humanChoice;
    
}

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
        playRound(getHumanChoice(), getComputerChoice());
    }
    else {
        alert("your choice is: " + humanChoice + "\nvs" + "\ncomputer choice is: " + computerChoice);
        alert("You Win!");
        console.log("You Win!");
        humanScore++;
    }
}

// play the game and loop for i amount of times
function playGame(){
    rounds = Number(prompt("How many rounds do you want to play?"));
    for (roundCounter; roundCounter <= rounds; roundCounter++){
        // invoke playRound function and use getHumanChoice and getComputerChoice as parameters for the comparison
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Play Score: " + humanScore);
        console.log("Play Score: " + computerScore);
    }
}

// for auto run game
console.log(playGame());
