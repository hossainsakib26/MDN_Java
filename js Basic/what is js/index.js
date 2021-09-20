const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
	let name = prompt('Please Enter A New Name');
	para.textContent = 'Player 1: ' + name;
}