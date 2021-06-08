//counter for the player
let yourCounter = 0;
let computerCounter = 0;
function newGame() {
  //loops five times
  for (let i = 0; i < 5; i++) {
    //array with the strings to be returned by the computer
    let weapons = ['Rock', 'Paper', 'Scissors'];
    //computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    let computerSelection = weapons[Math.floor(Math.random() * 3)];

    //the players input value
    let playerSelection = prompt('Rock, paper, scissors?');
    //convert the input string to a standard Capital first character everything else lowercase
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    //define the phrase
    let winner = `You win! ${playerSelection} beats ${computerSelection}`;
    let looser = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let result;
    //the actual game
    const oneRound = (player1, player2) => {
      //define the values relative to each other
      if (player1 === 'Rock' && player2 === 'Paper') {
        result = looser;
      } else if (player1 === 'Rock' && player2 === 'Scissors') {
        result = winner;
      } else if (player1 === 'Scissors' && player2 === 'Rock') {
        result = looser;
      } else if (player1 === 'Scissors' && player2 === 'Paper') {
        result = winner;
      } else if (player1 === 'Paper' && player2 === 'Rock') {
        result = winner;
      } else if (player1 === 'Paper' && player2 === 'Scissors') {
        result = looser;
      } else {
        result = `Play again. It's a tie`;
      }
      //lets you know if you win or loose each round
      console.log(result);
    };
    //each time the loop runs we run this function with a new players input
    oneRound(playerSelection, computerSelection);
    //updates both counters
    switch (result) {
      case winner:
        yourCounter++;
        computerCounter--;
        break;
      case looser:
        yourCounter--;
        computerCounter++;
        break;
      default:
        yourCounter += 0;
    }
  }
}

newGame();
//prints the final results and a string that lets you know who wins and the score
let veridict;
if (yourCounter > 0) {
  veridict = `You win!
        Computer: ${computerCounter}
        You: ${yourCounter}`;
} else if (yourCounter === 0) {
  veridict = `It is a tie, play again!
        Computer: ${computerCounter}
        You: ${yourCounter}`;
} else {
  veridict = `The computer wins!
        Computer: ${computerCounter}
        You: ${yourCounter}`;
}
console.log(veridict);
//Create a counter to keep track of wins and looses. Produce a final result with winner and looser and score

/*Write a NEW function called game(). Use the previous function inside of this one to play a 
5 round game that keeps score and reports a winner or loser at the end. */
