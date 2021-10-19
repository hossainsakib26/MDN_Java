const button_A = document.querySelector('#button_A');
const heading_A = document.querySelector('#heading_A');


button_A.onclick = function () {
    let name = prompt('What is your name bro?');
    alert('Hello ' + name + ', nice to see you bro!');
    heading_A.textContent = 'Welcome to our era ' + name;
}
