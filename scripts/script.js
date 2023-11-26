
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



// function that plays rounds until 1 player reaches 5 points, attaches result of each round to p element in HTML
function displayWinner(player, comp) {
    //reference to p element
    const para = document.querySelector('p');
    let playerScore = 0;
    let compScore = 0;
    let roundResult = playRound(player, comp);

    if (roundResult.includes('both')) {
        para.textContent = `${roundResult}: Player: ${playerScore}, Machine: ${compScore}`;
    } else {
        if (roundResult.includes('lose')) {
            compScore++;
            para.textContent = `${roundResult}: Player: ${playerScore}, Machine: ${compScore}`
        } else {
            playerScore++;
            para.textContent = `${roundResult}: Player: ${playerScore}, Machine: ${compScore}`;
        }
    }
}

// get references to button container for event delegation
const btnGroup = document.querySelector('.btn-container');

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

    displayWinner(playerChoice, compChoice);

});

