function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"
    }
    else if (num == 1) {
        return "paper"
    }
    else if (num == 2) {
        return "scissors"
    }
    else {
        alert("unavailable choice!");
    }
}

function playRound(playerSelection, computerSelection) {  
    computerSelection = getComputerChoice()
    playerSelection = prompt("rock, paper, or scissors?: ")
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        console.log("It's a tie!")
        return 0
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors")
        return 1
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock")
        return -1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock")
        return 1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper")
        return -1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper")
        return 1
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors")
        return -1
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let decider = playRound()
        if (decider == -1) {
            computerScore++
        }
        else if (decider == 1) {
            playerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!")
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the game :(")
    }
    else {
        console.log("The game was tied")
    }
    return 0
}

let computerSelection = ""
let playerSelection = ""

let playerScore = 0
let computerScore = 0


game();