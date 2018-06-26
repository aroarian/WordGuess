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


var win = 0;
var lost = 0;

window.onload = function(event) {
  var wordPick = words[Math.floor(Math.random() * words.length)];
  var currentWord = [wordPick];
//   var wordString = currentWord.toString();
  document.getElementById("word").innerHTML = wordPick;
  var wordLength = wordPick.length;
  var underScore = "‾ ".repeat(wordLength);
  document.getElementById("underscore").innerHTML = underScore;
  console.log(wordLength);
  console.log(currentWord);
  

  document.onkeypress = function(event) {
    var userGuess = event.key;
    document.getElementById("guess").innerHTML = userGuess;
    if (wordPick.indexOf(userGuess) > -1){
        // console.log(true);
            userLetters.push(userGuess);
            console.log(userLetters);
    }
    else wrongGuess.push(userGuess);
        console.log(wrongGuess);

  }
};
