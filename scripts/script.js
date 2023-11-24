console.log("Hello World!");

// function expression that computes a randomly chosen option of rock, paper or scissors
let compChoice = function() {
    let choiceStr;
    let choiceNum = Math.floor(Math.random() * 3) + 1;
    console.log(choiceNum);

    switch(choiceNum) {
        case 1:
            choiceStr = "Rock";
            //console.log(choiceStr);
            break;
        case 2: 
            choiceStr = "Paper";
            ////console.log(choiceStr);
            break;
        case 3:
            choiceStr = "Scissors";
            //console.log(choiceStr);
            break;
    }
    return choiceStr;
};


// function that plays one round of the game
function playGame(userChoice, compChoice) {
    let userChoiceCase = userChoice.toLowerCase();
    let compChoiceCase = compChoice.toLowerCase(); 

    let result;
    if (userChoiceCase === compChoiceCase) {
        console.log(`Tie! You both chose ${userChoice}`);
    } else {
        if (userChoiceCase === "rock" && compChoiceCase === "paper") {
            result = `You lose! ${compChoice} beats ${userChoice}`;
        } else if (userChoiceCase === "paper" && compChoiceCase === "scissors") {
            result = `You lose! ${compChoice} beats ${userChoice}`;
        } else if (userChoiceCase === "scissors" && compChoiceCase === "rock") {
            result = `You lose! ${compChoice} beats ${userChoice}`;
        } else if (userChoiceCase === "rock" && compChoiceCase === "scissors") {
            result = `You win! ${userChoice} beats ${compChoice}`;
        } else if (userChoiceCase === "paper" && compChoiceCase === "rock") {
            result = `You win! ${userChoice} beats ${compChoice}`;
        } else if (userChoiceCase === "scissors" && compChoiceCase === "paper") {
            result = `You win! ${userChoice} beats ${compChoice}`;
        }
    }

    return result;
}

let playerChoice = "Paper";

console.log(playGame(playerChoice, compChoice()));
