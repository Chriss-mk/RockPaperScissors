let systemName = 'Pablito';
let userName = prompt('"WELCOME TO THE GAME OF ROCK, PAPER OH SCISSORS" \n\n In the game you can only choose one of the following options: \n\t-Rock (R) \n\t-Paper (P) \n\t-Scissors (S) \nYou will play 5 rounds against Pablito, we wish you good luck.\n\nEnter your name: ');


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        randomChoice = "rock";
    } else if (randomChoice === 1) {
        randomChoice = "paper";
    } else if (randomChoice === 2) {
        randomChoice = "scissors";
    }
    return randomChoice
}

function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors", "r", "p", "s"];
    let humanChoice;

    while (true) {
        humanChoice = prompt("Rock, paper or scissors? ").toLowerCase();
        if (validChoices.includes(humanChoice)) {
        break; 
        }
        alert(`Invalid option. Please make sure your response is correctly written. You can choose:\n\n\t- Rock  <- or ->  (R)\n\t- Paper  <- or ->  (P)\n\t- Scissors <- or ->  (S)`);
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {
        
    function playRound(humanChoice, computerChoice) {

        if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "r" && computerChoice == 'paper') {
            computerScore++;
            round++;
            alert(`'You lose!' Paper beats Rock. \n\n${systemName} wins the round ${round} \n'Congratulations ${systemName}'! You have ${computerScore} points.`);
        } else if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "r" && computerChoice == 'scissors') {
            humanScore++;
            round++;
            alert(`'You win!' Rock beats Scissors. \n\n${userName} wins the round ${round} \n'Congratulations ${userName}!' You have ${humanScore} points.`);
        } else if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "r"&& computerChoice == 'rock') {
            alert(`Oh, it's a tie! Both chose: "Rock" \n\n\t"Try again"" \n\nAccumulated points: \n · ${systemName}: ${computerScore} points. \n · ${userName}: ${humanScore} points.`);
    
    
        } else if (humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "p" && computerChoice == 'scissors') {
            computerScore++;
            round++;
            alert(`'You lose!' Scissors beats Paper. \n\n${systemName} wins the round ${round} \n'Congratulations ${systemName}'! You have  ${computerScore} points.`);
        } else if (humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "p" && computerChoice == 'rock') {
            humanScore++;
            round++;
            alert(`'You win!' Paper beats Rock. \n\n${userName} wins the round ${round} \n'Congratulations ${userName}!' You have ${humanScore} points.`);
        } else if (humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "p" && computerChoice == 'paper') {
            alert(`Oh, it's a tie! Both chose: "Paper" \n\n\t"Try again"" \n\nAccumulated points: \n · ${systemName}: ${computerScore} points. \n · ${userName}: ${humanScore} points.`);

    
        } else if (humanChoice.toLowerCase() == "scissors" || humanChoice.toLowerCase() == "s"  && computerChoice == 'paper') {
            humanScore++;
            round++;
            alert(`'You win!' Scissors beats Paper. \n\n${userName} wins the round ${round} \n'Congratulations ${userName}!' You have ${humanScore} points.`);
        } else if (humanChoice.toLowerCase() == "scissors" || humanChoice.toLowerCase() == "s" && computerChoice == 'rock') {
            computerScore++;
            round++;
            alert(`'You lose!' Rock beats Scissors. \n\n${systemName} wins the round ${round} \n'Congratulations ${systemName}'! You have  ${computerScore} points.`);
        } else if (humanChoice.toLowerCase() == "scissors" || humanChoice.toLowerCase() == "s" && computerChoice == 'scissors') {
            alert(`Oh, it's a tie! Both chose: "Scissors"\n\n\t"Try again"" \n\nAccumulated points: \n · ${systemName}: ${computerScore} points. \n · ${userName}: ${humanScore} points.`);
        } 
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    function winner() {
        if (humanScore < computerScore) {
            alert(`The winner of the game is ¡${systemName}!, \n\nCongratulations, you won with a total of ${computerScore} points`)
        } else if (humanScore > computerScore) {
            alert(`The winner of the game is ¡${userName}!, \n\nCongratulations, you won with a total of ${humanScore} points`)
        }
    }
    winner();
}
playGame();


