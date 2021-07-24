const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// function that generates random integer out of inputted max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Randomly picks choice for Computer
const computerPlay = () => {
  return VALID_CHOICES[getRandomInt(VALID_CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {

  console.log(`You picked: ${playerSelection}`);
  console.log(`Computer picked: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (
    (playerSelection === 'rock' && ['paper', 'spock'].includes(computerSelection)) ||
    (playerSelection === 'paper' && ['scissors', 'lizard'].includes(computerSelection)) ||
    (playerSelection === 'scissors' && ['rock', 'spock'].includes(computerSelection)) ||
    (playerSelection === 'lizard' && ['scissors', 'rock'].includes(computerSelection)) ||
    (playerSelection === 'spock' && ['lizard', 'paper'].includes(computerSelection))) {
      return 'You lost!';
  } else {
    return "You've won!";
  }
}

const game = () => {
  let playerWins = 0;
  let computerWins = 0;
  let playerChoice = '';
  let outcome = '';

  while (true) {
    playerChoice = prompt(`Pick one: ${VALID_CHOICES}`);
    console.log(`Computer: ${computerWins}, You: ${playerWins}`);
    outcome = playRound(playerChoice, computerPlay());
    console.log(outcome);
    if (outcome === 'You lost!') {
      computerWins += 1;
    } else if (outcome === "You've won!") {
      playerWins += 1;
    } else {
      continue;
    }
    if (playerWins === 5 || computerWins === 5) {
      break;
    }
  }

  if (playerWins === 5) {
    return 'Congrats, you won the match!';
  } else {
    return 'Nice try, but you lose the match!';
  }
}

console.log(game());