let name = prompt("Welcome! What is your name?");
let randomNumber = Math.ceil(Math.random() * 25);
let tipp = 0;
const min = 0;
const max = 25;

alert("Hey " + name);

while (randomNumber != tipp) {
    tipp = prompt('Please enter a number between 0 and 25');
  if (randomNumber > tipp) {
    alert("Unfortunately, that is not correct! The answer is bigger. ");
    alert("Guess again pls")
  }
  else if (randomNumber < tipp) {
    alert("Unfortunately, that is not correct! The answer is smaller.");
    alert("Guess again pls")
  }
  else if (randomNumber = tipp) {
    alert("Congratulations, you have won the game!");
    alert("Bye " + name + " see you!")
  }
}

