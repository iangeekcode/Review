var computerChoices = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

var letterDisplay = document.getElementById("Guess-a-letter");
var winsDisplay = document.getElementById("Wins");
var lossesDisplay = document.getElementById("Losses");
var lettersGuessed = document.getElementById("Already-Guessed");
var remainingGuesses = document.getElementById("Guesses-Remaining");
var compLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)]
var initialGuesses = 10;
var wins = 0;
var losses = 0;
var guessedLetters = [];

document.onkeyup = function(event) {
  var playerLetter = event.key;

  if(computerChoices.includes(playerLetter)) {
    if(compLetter === playerLetter) {
      wins++;
      compLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      guessedLetters = [];
      alert("You won");
      initialGuesses = 10;
    } else if (compLetter !== playerLetter){
      if(guessedLetters.includes(playerLetter)){
				alert("You have guessed this before");
				return;
			}
				initialGuesses--;
				guessedLetters.push(playerLetter);
			
    } if(initialGuesses=== 0) {
      losses++;
      initialGuesses = 10;
      guessedLetters = [];
      compLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      guessedLetters = [];
      alert("You lost ):")
    }
  } else {
    alert("Please Enter a Valid Letter!!!!")
  }
  letterDisplay.innerHTML = " " + playerLetter;
  winsDisplay.innerHTML = " " + wins;
  lossesDisplay.innerHTML = " " + losses;
  lettersGuessed.innerHTML = " " + guessedLetters;
  remainingGuesses.innerHTML = " " + initialGuesses;
}