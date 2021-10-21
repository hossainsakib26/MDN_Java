// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
//
// ctx.fillStyle = 'green';
// ctx.fillRect(30,  30, 250, 250);

//
// const canvas2 = document.getElementById('canvas2');
// const ctx2 = canvas2.getContext('2d');
//
// // Wall
// ctx2.strokeRect(75, 140, 150, 110);
//
// // Door
// ctx2.fillRect(130, 190, 40, 60);
//
// // Roof
// ctx2.beginPath();
// ctx.moveTo(50, 140);
// ctx2.lineTo(150, 60);
// ctx2.lineTo(250, 140);
// ctx2.closePath();
// ctx2.stroke();

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start Machine') {
        txt.textContent = 'The Machine has started';
        btn.textContent = 'Stop Machine';
    }else {
        txt.textContent = 'The Machine is stop';
        btn.textContent = 'Start Machine'
    }
}
