console.log("Javascript is connected!");

const humanChoices = document.querySelector(".human-choices");
const result = document.querySelector(".result");
const computerScore = 0;
const yourScore = 0;


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

    const computerChoice = getComputerChoice();

});