const button_A = document.querySelector('#button_A');
const heading_A = document.querySelector('#heading_A');


button_A.onclick = function () {
    let name = prompt('What is your name bro?');
    alert('Hello ' + name + ', nice to see you bro!');
    heading_A.textContent = 'Welcome to our era ' + name;
}

let myName = 'sazzad';
let myAge;

myAge = 29;

let nameArray = ['Sazzad', 'Shaon', 'Mahedi'];
let numberArray = [12, 12, 33];

let animalObj = {name: '', handQty: 0, hasTail: false}

animalObj.name = 'Dog';
animalObj.handQty = 4;
animalObj.hasTail = true;

let myNumber = '500'; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;

const num = 4


