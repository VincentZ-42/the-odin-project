const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// function that generates random integer out of inputted max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Randomly picks choice for Computer
const computerPlay = () => {
  return VALID_CHOICES[getRandomInt(VALID_CHOICES.length)];
}

// Plays one round of RPSLS
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie"
  } else if (
    (playerSelection === 'rock' && ['paper', 'spock'].includes(computerSelection)) ||
    (playerSelection === 'paper' && ['scissors', 'lizard'].includes(computerSelection)) ||
    (playerSelection === 'scissors' && ['rock', 'spock'].includes(computerSelection)) ||
    (playerSelection === 'lizard' && ['scissors', 'rock'].includes(computerSelection)) ||
    (playerSelection === 'spock' && ['lizard', 'paper'].includes(computerSelection))) {
      return 'lose';
  } else {
    return "win";
  }
}

// sets win count for both player and computer to 0
function resetScore() {
  playerWins = 0;
  computerWins = 0;
}

// When user clicks on button, one Round is played
const buttons = document.querySelectorAll('button');

let playerWins = 0;
let computerWins = 0;
let outcome = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    computerChoice = computerPlay();
    playerChoice = button.value;
    outcome = playRound(playerChoice, computerChoice);
    if (outcome === 'lose') {
      computerWins += 1;
    } else if (outcome === 'win') {
      playerWins += 1;
    }
    document
      .getElementById('messageboard')
        .innerHTML = `
          You choose: ${playerChoice}<br>
          Computer choose: ${computerChoice}<br>
          ${outcome.toUpperCase()}!`;
    document
      .getElementById('scoreboard')
        .innerHTML = `
          Your score: ${playerWins}<br>
          Comp score: ${computerWins}`;
    if (playerWins === 5) {
      alert('Congrats, you won! Play again?');
      resetScore();
    }
    if (computerWins === 5) {
      alert('Booooo, you suck! Play Again?');
      resetScore();
    }
  })
});