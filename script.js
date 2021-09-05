"use strict";
const yourscore = document.getElementById('yourscore')
const gorillascore = document.getElementById('gorillascore')
const yourimage = document.createElement('img')
const image = document.createElement('img')
const yourChoice = document.querySelector('.yourchoice')
yourChoice.appendChild(yourimage)
const computerChoice = document.querySelector('.computerchoice')
computerChoice.appendChild(image)
let computerCounter = 0;
let yourCounter = 0;
let weapons = ['Rock', 'Paper', 'Scissors']; 
let result;
let buttons = document.querySelectorAll('button');



buttons.forEach((button) =>
button.addEventListener('click', (e) => {
  let player2 = weapons[Math.floor(Math.random() * 3)];
  player2 === 'Rock' ? image.src = 'rock.png' : player2 === 'Paper' ? image.src = 'paper.png' : image.src = 'scissors.png'
  let player1 = e.target.id;
  e.target.id === 'Rock' ? yourimage.src = 'rock.png' : e.target.id === 'Paper' ? yourimage.src = 'paper.png' : yourimage.src = 'scissors.png'
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

