//  @author Ian Cogswell
//  Written: June 2018
//  UNH Coding Bootcamp Homework Week 3

// Array containing possible word selections. Add to this Array for more words
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

//Global Variables =================================================================
// Blank Arrays to push data to throughout game
var userLetters = [];
var wrongGuess = [];
var underScores = [];

var win = 0;
var guessLeft = 10;

//End Global Variables ===============================================================


//Game Reset Function ================================================================
function gamereset() {
  var win = 0;
  var guessLeft = 10;
  
  underScores = [];
  document.getElementById("underscore").innerHTML = "";
  document.getElementById("userguess").innerHTML = "";
  gamestart();

  for (var i = 0; i < wordPick.length; i++) {
    underScores.push("_ ");
  }
}

//Game Start Function ================================================================
function gamestart() {
  underScores = [];
  guessLeft = 10;
  document.getElementById("images").innerHTML = "";
  var img = document.createElement("img");
  img.setAttribute("src", "assets/images/start.jpg");
  img.setAttribute("height", "434");
  img.setAttribute("width", "386");
  document.getElementById("images").appendChild(img);
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

//Game Start Function: User clicks a key =================================================
  document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    if (wrongGuess.includes(userGuess) || userLetters.includes(userGuess)){
      return false;
    }
    console.log(event.keyCode);
    if (wordPick.indexOf(userGuess) > -1) {
      for (var i = 0; i < split.length; i++) {
        if (userGuess == split[i]) {
          underScores[i] = userGuess;
          document.getElementById("underscore").innerHTML = underScores.join(" ");
          var div = document.createElement("p");
          var Guess = document.createTextNode(userGuess);
          div.appendChild(Guess);
          document.getElementById("userguess").appendChild(div);
          userLetters.push(userGuess);
        }
      }
    } 
   
    
    //Game Start Function: Subtract from Guesses Left=====================================
    else {
      wrongGuess.push(userGuess);
      guessLeft--;
      document.getElementById("loss").innerHTML = guessLeft;
      var div = document.createElement("p");
      var Guess = document.createTextNode(userGuess);
      div.appendChild(Guess);
      document.getElementById("userguess").appendChild(div);
     
     }

    //Game Start Function: Game win logic =================================================
    if (underScores.indexOf("_ ") == -1) {
      alert("Congrats you win! The word was: " + wordPick);
      win++;
      document.getElementById("wins").innerHTML = win;
      gamestart();
    }
    
    //Game Start Function: Game Lose logic ================================================
    else if (guessLeft == 0) {
      alert("You Lose. The word was: " + wordPick);
      win = 0;
      guessLeft = 10;
      document.getElementById("images").innerHTML = "";
      gamereset();
    }

    //Game Start Function: Display "WordGuess" progression images =========================
    if (guessLeft == 9) {
      img.setAttribute("src", "assets/images/9.jpg");
    }
    if (guessLeft == 8) {
      img.setAttribute("src", "assets/images/8.jpg");
    }
    if (guessLeft == 7) {
      img.setAttribute("src", "assets/images/7.jpg");
    }
    if (guessLeft == 6) {
      img.setAttribute("src", "assets/images/6.jpg");
    }
    if (guessLeft == 5) {
      img.setAttribute("src", "assets/images/5.jpg");
    }
    if (guessLeft == 4) {
      img.setAttribute("src", "assets/images/4.jpg");
    }
    if (guessLeft == 3) {
      img.setAttribute("src", "assets/images/3.jpg");
    }
    if (guessLeft == 2) {
      img.setAttribute("src", "assets/images/2.jpg");
    }
    if (guessLeft == 1) {
      img.setAttribute("src", "assets/images/1.jpg");
    }
  };
}

gamestart();
