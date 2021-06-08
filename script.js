
function newGame () {
    for (let i = 0; i < 5; i++) {  
//array with the strings to be returned by the computer
let weapons = ['Rock', 'Paper', 'Scissors']
//computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerSelection = weapons[Math.floor(Math.random() * 3)]
/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
*/
//define choices
let playerSelection = prompt('Rock, paper, scissors?') 

playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

//define the phrase 
let winner = `You win! ${playerSelection} beats ${computerSelection}`
let looser = `You Lose! ${computerSelection} beats ${playerSelection}`
let result

const oneRound = (player1, player2) => {
//define the values
if (player1 === 'Rock' && player2 === 'Paper') {
    result = looser
}
else if (player1 === 'Rock' && player2 === 'Scissors') {
    result = winner
}
else if (player1 === 'Scissors' && player2 === 'Rock') {
    result = looser
}
else if (player1 === 'Scissors' && player2 === 'Paper') {
    result = winner
}
else if (player1 === 'Paper' && player2 === 'Rock') {
    result = winner
}
else if (player1 === 'Paper' && player2 === 'Scissors') {
    result = looser
} else {
    result = `Play again. It's a tie`
}

console.log(result)

}
oneRound(playerSelection, computerSelection)
}   
}

newGame()



/*Write a NEW function called game(). Use the previous function inside of this one to play a 
5 round game that keeps score and reports a winner or loser at the end. */

