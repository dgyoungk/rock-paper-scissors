console.log("Hello World!");

// function expression that computes a randomly chosen option of rock, paper or scissors
let getCompChoice = function() {
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
function playRound(userChoice, compChoice) {
    let userChoiceCase = userChoice.toLowerCase();
    let compChoiceCase = compChoice.toLowerCase(); 

    let result;
    if (userChoiceCase === compChoiceCase) {
        result =`Tie! You both chose ${userChoice}`;
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

function getPlayerChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors): ")
    
    return choice;
}


// function that plays 5 rounds, records the score, then reports the winner/loser depending on score
function game() {
    let playerScore = 0;
    let compScore = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getCompChoice());
        if (result.includes('both')) {
            ties++;
        } else if (result.includes('lose')) {
            compScore++;
        } else {
            playerScore++;
        }
        console.log(result);
    }

    return displayWinner(playerScore, compScore, ties);
}

function displayWinner(playerScore, compScore, ties) {
    let heading = ("Game results: ")
    let winner;
    if (playerScore > compScore) {
        winner = `player wins! ${playerScore} to ${compScore}; there were ${ties} ties`;
    } else {
        winner = `computer wins, ${compScore} to ${playerScore}; there were ${ties} ties`;
    }
    let finalResult = heading + winner;

    return finalResult;
}

console.log(game());

