//array with the strings to be returned by the computer
let weapons = ['Rock', 'Paper', 'Scissors']
//computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const computerPlay = () => weapons[Math.floor(Math.random() * 3)]
/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
*/
//define choices
let playerSelection = prompt('Rock, Paper, scissors?')
playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

let computerSelection = computerPlay()
//define the phrase 
let winner = `You win! ${playerSelection} beats ${computerSelection}`
let looser = `You Lose! ${computerSelection} beats ${playerSelection}`
const oneRound = (playerSelection, computerSelection) => {
//define the values
if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    result = looser
}
else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    result = winner
}
else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    result = looser
}
else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    result = winner
}
else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    result = winner
}
else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    result = looser
} else {
    result = `Play again. It's a tie`
}



    return result
}

console.log(oneRound(playerSelection, computerSelection))


