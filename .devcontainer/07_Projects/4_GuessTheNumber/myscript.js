const btn = document.querySelector('.guessSubmit');
const prev = document.querySelector('.previous');
const remain = document.querySelector('.remaining');
const nAn = document.querySelector('.nan');
const inputText = document.querySelector('.guessField');
const correct = document.querySelector('.correct')
const form = document.querySelector('form')

let chances = 1;
let guess = [];
let number = -1;
let correctGuess = 0
let play = true;

if (play) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(play){
        startGame(inputText.value);
    }else{

    }
  });
}

function checkGuess(num) {
  let generate = Math.floor(Math.random() * 100 + 1);
  if (num == generate) {
    correctGuess++
    return `You have guessed the correct number.`;
  } else {
    return `You gussed ${num} but correct number is ${generate}`;
  }
}

function validateInput(num) {
  let n = parseInt(num);
  if (n < 0 || n > 100 || isNaN(n)) {
    number = -1;
  } else {
    number = num;
    guess.push(number);
    chances++;
  }
}

function startGame(num) {
  if (chances > 10) {
    play = false
    form.innerHTML = `<p>You are Left with 0 attempts. Click Play again.</p><button onclick="resetGame()" class="guessSubmit">Play Again</button>`
  } else {
    validateInput(num);
    updatePage();
  }
}

function updatePage() {
  if (number == -1) {
    nAn.innerHTML = `Invalid number! Enter a number between 1 to 100`;
  } else {
    const dyprev = checkGuess(number);
    nAn.innerHTML = `${dyprev}`;
    prev.innerHTML = `${guess}`;
  }
  correct.innerHTML = `${correctGuess}`
  remain.innerHTML = `${11 - chances}`;
}
function resetGame(){
    play = true
    guess = []
    chances = 1
    correctGuess = 0
}
