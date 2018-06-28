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
  var split = currentWord.split("");
  console.log(split);
  
  for (var i = 0; i < wordPick.length; i++) {
    underScores.push("_ ");
  }
  // console.log(currentWord);
  document.getElementById("underscore").innerHTML = underScores.join(" ");

  document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    
    if (wordPick.indexOf(userGuess) > -1) {
      for (var i = 0; i < split.length; i++) {
        if (userGuess == split[i]) {
          underScores[i] = userGuess;
          document.getElementById("underscore").innerHTML = underScores.join(" ");
        }
      }
    } 
    
    else {
      wrongGuess.push(userGuess);
      guessLeft--;
      document.getElementById("loss").innerHTML = guessLeft;
    }
    // console.log(wrongGuess);
   if (underScores.indexOf("_ ") == -1){
    alert("Congrats you win!");
    win++;
   }
   else if (guessLeft == 0) {
    alert("You Lose");
    location.reload();

  }
    
  };
};
