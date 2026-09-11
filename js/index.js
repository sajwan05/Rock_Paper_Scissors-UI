console.log("Javascript is connected!");

const humanChoices = document.querySelector(".human-choices");
const output = document.querySelector(".result > .output");
const humanScore = document.querySelector(".humanScore");
const botScore = document.querySelector(".computerScore");
let computerScore = 0;
let yourScore = 0;


// to get bot Choice 

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

humanChoices.addEventListener("click", (e) => {

    const target = e.target;
    const value = target.classList.value;

    const userChoice = document.querySelector(".user-choice");
    const botChoice = document.querySelector(".bot-choice");

    const computerChoice = getComputerChoice();
    let yourChoice = "";

    switch(value){
        case "rock":
            yourChoice = value;
            userChoice.textContent = yourChoice;
            break;
        case "scissors":
            yourChoice = value;
            userChoice.textContent = yourChoice;
            break;
        case "paper":
            yourChoice = value;
            userChoice.textContent = yourChoice;
    }

    botChoice.textContent = computerChoice;

    playRound(yourChoice, computerChoice);

});

function playRound(humanChoice, computerChoice){
    if( (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock" ) ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            yourScore++;
            output.textContent = `yourChoice: ${humanChoice} beats botChoice: ${computerChoice}`;
            
            humanScore.textContent = `You: ${yourScore}`;
            botScore.textContent = `Bot: ${computerScore}`;
    }else if ( (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors" ) ||
        (humanChoice === "scissors" && computerChoice === "rock")){
            computerScore++;
            output.textContent = `yourChoice: ${humanChoice} lost by botChoice: ${computerChoice}`;
            
            humanScore.textContent = `You: ${yourScore}`;
            botScore.textContent = `Bot: ${computerScore}`;
    }else {
        computerScore++;
        yourScore++;

        output.textContent = `yourChoice: ${humanChoice} tied botChoice: ${computerChoice}`;
        humanScore.textContent = `You: ${yourScore}`;
        botScore.textContent = `Bot: ${computerScore}`;
    }
}