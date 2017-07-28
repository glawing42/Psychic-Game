//Letter choices available
var options = ["a", "b", "c","d","e","f","g","h","i","j","k",
				"l", "m", "n", "o", "p", "q", "r", "s", "t",
				"u", "v", "w", "x", "y", "z"];
//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = options[Math.floor(Math.random() * options.length)];

//User has 9 guesses
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
//
var updateLetterToGuess = function() {
  this.letterToGuess = this.options[Math.floor(Math.random() * this.options.length)];
};
var updateGuessesSoFar = function() {
  // Here I made the guesses appear in the box 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Reset
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses; 
            reset();
        }
};