function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

function playGame(playerChoice) {
    animateHands(playerChoice);
    // random generator for computer
    let computerChoice = 'paper'
    showHands(playerChoice, computerChoice);
    const possibleHands = ['rock', 'paper', 'scissors']
}

function animateHands() {
    const hands = document.querySelectorAll(".hands");
    hands.forEach(hand => {        
        hand.classList.remove('animate');
        void hand.offsetWidth;
        hand.classList.add('animate');
    });
}


function showHands(playerChoice, computerChoice) {
    let left = document.getElementById('left-hand');
    let right = document.getElementById('right-hand');

    left.classList.remove('animate');
    right.classList.remove('animate');

    void left.offsetWidth;
    void right.offsetWidth;

    // Add animation class
    left.classList.add('animate');
    right.classList.add('animate');

    left.addEventListener('animationend', function handler() {
        if (playerChoice === 'rock') {
            left.src = './images/rock-svgrepo-com.svg';
        } else if (playerChoice === 'paper') {
            left.src = './images/paper-svgrepo-com.svg';
        } else if (playerChoice === 'scissors') {
            left.src = './images/scissors-svgrepo-com.svg';
        }
        left.removeEventListener('animationend', handler);
    });

    right.addEventListener('animationend', function handler() {
        if (computerChoice === 'rock') {
            right.src = './images/rock-svgrepo-com.svg';
        } else if (computerChoice === 'paper') {
            right.src = './images/paper-svgrepo-com.svg';
        } else if (computerChoice === 'scissors') {
            right.src = './images/scissors-svgrepo-com.svg';
        }
        right.removeEventListener('animationend', handler);
    });
}
