let randomNumber = Math.floor(Math.random() * 100) + 1; // get rendom number between 1 and 100
console.log(randomNumber);

const guesses = document.querySelector('.guesses'); 
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
let getInputSection = document.querySelector('.input-section');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


function checkGuess () {

	let userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = 'Previous Guess: ';
	}
	guesses.textContent += userGuess + ' ';


	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';

		setGameOver();
	}else if (guessCount === 10) {
		lastResult.textContent = '!!!Game Over!!!';
		lowOrHi.textContent = '';
		setGameOver();
	}else {
		lastResult.textContent = 'wrong';
		lastResult.style.backgroundColor = 'red';

		if (userGuess <  randomNumber) 
			{ lowOrHi.textContent = 'Last Guess was too low!' }
			else if (userGuess > randomNumber) 
				{ lowOrHi.textContent = 'Last Guess was too high!' }
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;

	let input_section = document.getElementsByClassName('input-section');
	console.log(input_section);

	resetButton = document.createElement('button');
	resetButton.textContent = 'Start New Game';

	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);

	console.log(randomNumber);

}

function resetGame() {
	guessCount = 1;
	const resetParas = document.querySelectorAll('.resultParas p');
	for (var i = 0; i < resetParas.length; i++) {
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
  	guessSubmit.disabled = false;
  	guessField.value = '';
  	guessField.focus();

  	lastResult.style.backgroundColor = 'white';

  	randomNumber = Math.floor(Math.random() * 100) + 1;
}
