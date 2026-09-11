console.log("Javascript is connected!");

const main = document.querySelector("main");
const humanChoices = document.querySelector(".human-choices");
const output = document.querySelector(".result > .output");
const humanScore = document.querySelector(".humanScore");
const botScore = document.querySelector(".computerScore");
const finalResult = document.querySelector(".final-result");
let computerScore = 0;
let yourScore = 0;


// to get bot Choice 

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

humanChoices.addEventListener("click", (e) => {

    const btn  = document.createElement("button");
    const userChoice = document.querySelector(".user-choice");
    const botChoice = document.querySelector(".bot-choice");

    if(yourScore < 5 && computerScore < 5){

        const target = e.target;
        const value = target.classList.value;

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
    }

    
    if(yourScore === 5 || computerScore === 5){
        isWinner();

        output.textContent = "";
        btn.textContent = "Restart Game!";
        main.appendChild(btn);

        btn.addEventListener("click", (e) => {
            yourScore = 0;
            computerScore = 0;
            userChoice.textContent = "";
            botChoice.textContent = "";
            finalResult.textContent = "";
            
            humanScore.textContent = "";
            botScore.textContent = "";
        });
    }

    
    

});

function playRound(humanChoice, computerChoice){
    if( (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock" ) ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            yourScore++;
            output.textContent = `yourChoice: ${humanChoice} beats botChoice: ${computerChoice}`;
            output.style.color = "#008000"
            humanScore.textContent = `You: ${yourScore}`;
            botScore.textContent = `Bot: ${computerScore}`;
    }else if ( (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors" ) ||
        (humanChoice === "scissors" && computerChoice === "rock")){
            computerScore++;
            output.textContent = `yourChoice: ${humanChoice} lost by botChoice: ${computerChoice}`;
            output.style.color = "#800000"
            humanScore.textContent = `You: ${yourScore}`;
            botScore.textContent = `Bot: ${computerScore}`;
    }else {
        computerScore++;
        yourScore++;

        output.textContent = `yourChoice: ${humanChoice} tied botChoice: ${computerChoice}`;
        output.style.color = "#808080";
        humanScore.textContent = `You: ${yourScore}`;
        botScore.textContent = `Bot: ${computerScore}`;
    }
}

function isWinner(){
    
    if(yourScore > computerScore){
        finalResult.textContent = `You won the game by final score: You: ${yourScore} to Bot: ${computerScore}`;
        finalResult.setAttribute("style", "color: green; text-transform: uppercase;");

    }else if (yourScore < computerScore){
        finalResult.textContent = `You lost the game by score: You: ${yourScore} to Bot: ${computerScore}`;
        finalResult.setAttribute("style", "color: red; text-transform: uppercase;");
    }else {
        finalResult.textContent = `The game got tied! final score: You: ${yourScore} to Bot: ${computerScore}`;
        finalResult.setAttribute("style", "color: red; text-transform: uppercase;");
    }
}