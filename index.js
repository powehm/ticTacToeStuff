const turn = document.querySelector('.turn');
const winMessage = document.querySelector('.winningMessageText');
let currentPlayer = 'x';
const playerTurn = () => `It's ${currentPlayer}'s turn`;
const Draws = 'DRAW';
const win = () => `Player ${currentPlayer} has won!`;
turn.innerHTML = playerTurn();
const gameState = {
  player:{
    x: '',
    o: '',
    },
  selectedCell: '',
  box: '',
  board: [
    ['', '', '','', '', '', '', '', '']
  ]
};
const boxs = document.querySelectorAll('[data-box');
const playerone = document.querySelector('#x');
const playertwo = document.querySelector('#o');
let winningCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
const form = document.querySelector('form');;
const grid = document.querySelector('#grid');
const selection = document.querySelector('#selection');
const restartButton = document.getElementById('restart');

let active = true;

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  gameState.player.x = playerone.value;
  gameState.player.o= playertwo.value;
  playerone.innerText += gameState.player.x;
  playertwo.innerText += gameState.player.o;

  });

  restart();
  restartButton.addEventListener('click', restart) 
  
    function restart() {
      for (let i = 0; i < gameState.board.length; i++) {
        boxs.forEach(boxs => {
          boxs.innerHTML=''
         })
         winMessage.innerHTML = '';
         winMessage.style.display= 'none';
         form.removeEventListener('submit', function() {
          form.classList.remove = ('.players')
         })
      }
     
    };


  

    function changeTurn() {
      currentPlayer = currentPlayer === "x" ? "o" : "x";
      turn.innerText = playerTurn();
    };
    
  
    
    function bigWin() {
      let won = false;
      
      for(let i = 0; i <= 7; i++) {
        const condition = winningCombo[i];
        const cellOne = gameState.board[condition[0]];
        const cellTwo = gameState.board[condition[1]];
        const cellThree = gameState.board[condition[2]];
      
        if (cellOne == '' || cellTwo == "" || cellThree == ''){
          continue;
        }
        if(cellOne == cellTwo && cellTwo == cellThree){
          won = true;
          break;
        }
      }
      if (won){
        winMessage.innerHTML = win();
        win.display = 'inherit';
        active = false;
      
      }
      else if(!gameState.board.includes('')){
        winMessage.innerHTML = Draws;
        win.display.style = 'inherit';
       active = false;
      }
      else{
        changeTurn();
        winMessage.innerHTML = 'none';
        win.display.style = 'none'; 
      active = true;
      }
      }
      
    
grid.addEventListener('click', function(ev) {
  const strBoxes = ev.target.dataset.box.split(',');
  const boxes = strBoxes.map((elem) => parseInt (elem));
  gameState.box = boxes;
  gameState.selectedCell = ev.target;
  gameState.selectedCell.innerHTML = currentPlayer;
  changeTurn();
  gamePlay();
  bigWin()
  });

function gamePlay () {
  if (grid[gameState.selectedCell] != ''|| !active)
    return;
    grid();
    bigWin();
}



