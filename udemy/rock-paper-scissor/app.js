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

const getWinner = function(cChoice, pChoice = DEFAULT_USER_CHOICE) {
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


startGameBtn.addEventListener('click', () => {
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

// Not related to the game
// Handy info about having a rest parameters
// callback function
const sumUp = (resultHandler, ...numbers) => {
  // another function exclusive to this function
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;

  for (const num of numbers) {
    sum += validateNumber(num);
  }

  resultHandler(sum);
};

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;

  for (const num of numbers) {
    sum -= num;
  }

  resultHandler(sum);
};

const combine = (resultHandler, operator, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;

  for (const num of numbers) {
    if (operator === 'ADD') {
      sum += validateNumber(num);
    } else if (operator === 'SUBTRACT') {
      sum -= validateNumber(num);
    }
  }

  resultHandler(sum);
};

const showResult = (result) => {
  alert('The result after adding all numbers is ' + result);
};

const showResultCombined = (messageText, result) => {
  alert(messageText + ' ' + result);
};

sumUp(showResult, 1, 5, 'fsda', -3, 6, 10);

subtractUp(showResult, 1, 5, 6, 10);

combine(showResultCombined.bind(this, 'The result after adding all numbers is '), 'ADD', 1, 5, 6, 10);
combine(showResultCombined.bind(this, 'The result after subtracting all numbers is '), 'SUBTRACT', 1, 5, 6, 10);