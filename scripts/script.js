// scores declared here so that they wouldn't get reset
let playerScore = 0;
let compScore = 0;

// get references to p elements
const resultPara = document.querySelector('.result');
const scorePara = document.querySelector('.score');


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

// function that displays the game winner upon either side reaching 5 points
function displayWinner() {
    resultPara.textContent = '';
    scorePara.textContent = '';
    if (compScore === 5) {
        resultPara.textContent = `Computer wins, ${compScore} to ${playerScore}`;
        scorePara.textContent = '';
        // disables buttons so that users can't select after the game is over
        const btns = document.querySelectorAll('button');
        for(const btn of btns) {
            btn.disabled = true;
        }
    } else if (playerScore === 5) {
        resultPara.textContent = `You win! ${playerScore} to ${compScore}`;
        scorePara.textContent = '';
        // disables buttons so that users can't select after the game is over
        const btns = document.querySelectorAll('button');
        for(const btn of btns) {
            btn.disabled = true;
        }
    }
}

// function that displays the winner of each round
function displayResult(player, comp) {
    let roundResult = playRound(player, comp);

    if (roundResult.includes('both')) {
        resultPara.textContent = `${roundResult}`;
        scorePara.textContent = `Player: ${playerScore}, Machine: ${compScore}`;
    } else {
        if (roundResult.includes('lose')) {
            compScore++;
            if (compScore === 5) displayWinner();
            else {
                resultPara.textContent = `${roundResult}`;
                scorePara.textContent = `Player: ${playerScore}, Machine: ${compScore}`;
            }
            } else {
            playerScore++;
            if (playerScore === 5) displayWinner();
            else {
                resultPara.textContent = `${roundResult}`;
                scorePara.textContent = `Player: ${playerScore}, Machine: ${compScore}`;
            }
        }
    }
}

// get references to button container for event delegation
const btnGroup = document.querySelector('.btn-container');

// event handler to get player choice from button click
btnGroup.addEventListener('click', (e) => {
    let playerChoice = '';

    let target = e.target;

    switch(target.className) {
        case 'choice-rock':
            playerChoice = e.target.innerText;
            console.log(playerChoice);
            break;
        case 'choice-paper':
            playerChoice = e.target.innerText;
            console.log(playerChoice);
            break;
        case 'choice-scissors':
            playerChoice = e.target.innerText;
            console.log(playerChoice);
            break;
    }

    let compChoice = getCompChoice();

    displayResult(playerChoice, compChoice);

});

