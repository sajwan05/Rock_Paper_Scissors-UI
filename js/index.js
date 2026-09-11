console.log("Javascript is connected!");

const humanChoices = document.querySelector(".human-choices");
const result = document.querySelector(".result");
const computerScore = 0;
const yourScore = 0;

humanChoices.addEventListener("click", (e) => {
    const target = e.target;
    const value = target.classList.value;

    let yourChoice = "";

    switch(value){
        case "rock":
            yourChoice = value;
            break;
        case "scissors":
            yourChoice = value;
            break;
        case "paper":
            yourChoice = value;
    }

});