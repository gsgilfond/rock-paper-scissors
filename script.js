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
        alert("unavailable choice!")
    }
}

function playRound(playerSelection, computerSelection) {  
    computerSelection = getComputerChoice()
    /*
    playerSelection = prompt("rock, paper, or scissors?: ")
    playerSelection = playerSelection.toLowerCase()
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("unavailable choice!")
        playerSelection = prompt("rock, paper, or scissors?: ")
        playerSelection = playerSelection.toLowerCase()
    }
    */

    const message = document.querySelector('.message')

    if (playerSelection == computerSelection) {
        message.innerHTML = "It's a tie!"
        return 0
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        message.innerHTML = "You win! Rock beats scissors"
        return 1
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        message.innerHTML = "You lose! Paper beats rock"
        return -1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        message.innerHTML = "You win! Paper beats rock"
        return 1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        message.innerHTML = "You lose! Scissors beats paper"
        return -1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        message.innerHTML = "You win! Scissors beats paper"
        return 1
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        message.innerHTML = "You lose! Rock beats scissors"
        return -1
    }
}

function updateScoreboard(playerScore, computerScore) {
    const playerBox = document.querySelector('.playerBox')
    const computerBox = document.querySelector('.computerBox')
    playerBox.innerHTML = playerScore
    computerBox.innerHTML = computerScore
}

/* function game() {
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
        message.innerHTML = ("You win the game!")
    }
    else if (playerScore < computerScore) {
        message.innerHTML = ("Computer wins the game :(")
    }
    else {
        message.innerHTML = ("The game was tied")
    }
    return 0
}
*/

const end = document.querySelector('.end')

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = button.id
            //playRound(playerSelection, computerSelection)
            let decider = playRound(playerSelection, computerSelection)
            if (decider == -1) {
                computerScore++
            }
            else if (decider == 1) {
                playerScore++
            }
            updateScoreboard(playerScore, computerScore)
            if (playerScore >= 5) {
                end.innerHTML = "Game Over! You Win!"
            //buttons.forEach((button) => {
              //  button.removeEventListener('click', )
            //})
            }
            if (computerScore >= 5) {
                end.innerHTML = "Game Over! You Lose :("
                //buttons.forEach((button) => {
                //  button.removeEventListener('click', )
                // })
            }
        }
    })
})

let computerSelection = ""
let playerSelection = ""

let playerScore = 0
let computerScore = 0