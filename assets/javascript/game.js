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


function gamereset() {
  var win = 0;
  var guessLeft = 10;
  underScores = [];
  document.getElementById("underscore").innerHTML = "";
  document.getElementById("userguess").innerHTML = "";
  // document.getElementById("loss").innerHTML = guessLeft;
  // document.getElementById("wins").innerHTML = win;
  // var wordPick = words[Math.floor(Math.random() * words.length)];
  // var currentWord = wordPick;
  // var split = currentWord.split("");
  gamestart();
  console.log(split);

  for (var i = 0; i < wordPick.length; i++) {
    underScores.push("_ ");
  }
  // document.getElementById("underscore").innerHTML = underScores.join(" ");
}
function gamestart() {
  underScores = [];
  guessLeft = 10;
  // var imgstart = document.createElement("img");
  // imgstart.setAttribute("src", "images/hydrangeas.jpg");
  document.getElementById("userguess").innerHTML = "";
  document.getElementById("loss").innerHTML = guessLeft;
  document.getElementById("wins").innerHTML = win;
  var wordPick = words[Math.floor(Math.random() * words.length)];
  var currentWord = wordPick;
  var split = currentWord.split("");
  console.log(split);

  for (var i = 0; i < wordPick.length; i++) {
    underScores.push("_ ");
  }

  document.getElementById("underscore").innerHTML = underScores.join(" ");

  document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();

    if (wordPick.indexOf(userGuess) > -1) {
      for (var i = 0; i < split.length; i++) {
        if (userGuess == split[i]) {
          underScores[i] = userGuess;
          document.getElementById("underscore").innerHTML = underScores.join(" ");
          var div = document.createElement("p");
          var Guess = document.createTextNode(userGuess);
          div.appendChild(Guess);
          document.getElementById("userguess").appendChild(div);
        }
      }
    } 
    
    else {
      wrongGuess.push(userGuess);
      guessLeft--;
      document.getElementById("loss").innerHTML = guessLeft;
      var div = document.createElement("p");
      var Guess = document.createTextNode(userGuess);
      div.appendChild(Guess);
      document.getElementById("userguess").appendChild(div);
      console.log(wrongGuess);
    }

    if (underScores.indexOf("_ ") == -1) {
      alert("Congrats you win! The word was: " + wordPick);
      win++;
      document.getElementById("wins").innerHTML = win;
      
      gamestart();
    } 

    else if (guessLeft == 0) {
      alert("You Lose. The word was: " + wordPick);
      win = 0;
      guessLeft = 10;
      gamereset();
    }
  }
};
// };

gamestart();
