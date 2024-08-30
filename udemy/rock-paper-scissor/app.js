const startGameBtn = document.getElementById('start-game-btn');

// Function declaration
function startGame() {
  console.log('Game is starting');
}

// function as expression
const start = function() {
  console.log('Game started!');
}

/*
const person = {
  name: 'Steph',
  greet: function greet() {
    console.log('Hello there!');
  }
}

person.greet();
*/

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, '').toUpperCase();

  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSOR
  ) {
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = function() {
  let randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = function(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSOR ||
    cChoice === SCISSOR && pChoice === ROCK
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};


startGameBtn.addEventListener('click', function(){
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true
  console.log('Game is starting');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice, playerSelection);
  
  let message = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you`;;
  
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won';
  } else {
    message = message + 'lost';
  }

  alert(message);

  gameIsRunning = false; 
});

