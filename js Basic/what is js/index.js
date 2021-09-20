const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
	let name = prompt('Please Enter A New Name');
	para.textContent = 'Player 1: ' + name;
}

document.addEventListener("DOMContentLoaded", function() {


	function createParagraph() {
		let para = document.createElement('p');
		para.textContent = 'You clicked the button!';
		document.body.appendChild(para);
	}

	const buttons = document.querySelectorAll('button');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', createParagraph);
	}

})