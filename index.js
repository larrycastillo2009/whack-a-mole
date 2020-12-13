"use strict";
const start = document.querySelector('#start')
const square = document.querySelectorAll('.mole_hole');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let hitPosition = null;
let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent

// This function random generates the position that the mole image will land on next
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
        className.classList.add('background-black')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.remove('background-black')
    randomPosition.classList.add('mole');

    hitPosition = randomPosition;

}
// This block of code recognizes the when the mole is clicked
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        console.log(id);
        if (id === hitPosition) {
            result = result + 1
            score.textContent = result
            id.classList.remove('mole');
            id.classList.add('background-black')
            let randomPosition = square[Math.floor(Math.random() * 9)];
            randomPosition.classList.remove('background-black')
            randomPosition.classList.add('mole');

            hitPosition = randomPosition;
        }
    })
})
// This function randomly gnenerates the time interval in which the mole will move
function moveMole() {
    let timeId = null;
    timeId = setInterval(randomSquare, (Math.floor(Math.random() * 9)) * 250 + 500);
}
// This function keeps global time for which the player has to bonk moles
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval()
        alert('GAME OVER! Your final score is ' + result + ' Click OK to reset gameboard')
        location.reload();
    }
}
// This block of code listens for when the player begins the game
start.addEventListener('click', function () {
    this.disabled = true;
    moveMole();
    let timerId = setInterval(countDown, 1000);

    if(timerId == 0){
        this.disabled = false;
    }

})

