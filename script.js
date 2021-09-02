let yourscore = document.getElementById('yourscore')
let gorillascore = document.getElementById('gorillascore')
let computerCounter = 0;
let yourCounter = 4;
let weapons = ['Rock', 'Paper', 'Scissors'];
  
let result;
let buttons = document.querySelectorAll('button');



buttons.forEach((button) =>
button.addEventListener('click', (e) => {
  let player2 = weapons[Math.floor(Math.random() * 3)];
  let player1 = e.target.id;
  oneRound(player1, player2);
})
);

const oneRound = (player1, player2) => {
  let winner = `You win! ${player1} beats ${player2}`;
  let looser = `You Lose! ${player2} beats ${player1}`;
  

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
    document.getElementById('veridict').innerText = result;
    switch (result) {
        case winner:
          yourCounter++;
         
          break;
        case looser:
          yourCounter--;
          
          break;
        default:
          yourCounter += 0;
      }
      yourscore.innerText = yourCounter
      gorillascore.innerText = computerCounter
      if (yourCounter === 5) {
        document.getElementById('veridict').innerText = 'Congrats! You Win!'
    } if (computerCounter === 5) {
      document.getElementById('veridict').innerText = 'Once again, AI is taking over!'
    }
  }

