var words = [
  "pickle",
  "motherboard",
  "absurd",
  "exodus",
  "ivy",
  "quartz",
  "unworthy",
  "witchcraft",
  "transcript",
  "kilobyte"
];
// var currentWord = [];
var userLetters = [];
var wrongGuess = [];
var underScores = [];

var win = 0;
var guessLeft = 10;

window.onload = function(event) {
  document.getElementById("loss").innerHTML = guessLeft;
  document.getElementById("wins").innerHTML = win;
  var wordPick = words[Math.floor(Math.random() * words.length)];
  var currentWord = wordPick;
  //   var wordLength = wordPick.length;

  for (var i = 0; i < wordPick.length; i++) {
    underScores.push("_ ");
  }
  console.log(currentWord);
  document.getElementById("underscore").innerHTML = underScores.join(" ");

  document.onkeypress = function(event) {
    var userGuess = event.key;

    if (wordPick.indexOf(userGuess) > -1) {
      console.log(true);
    } 
    
    else {
      wrongGuess.push(userGuess);
      guessLeft--;
      document.getElementById("loss").innerHTML = guessLeft;
    }
    console.log(wrongGuess);

    if (userLetters == currentWord && loss > 0) {
      alert("Congrats you win!");
    }
  };
};
