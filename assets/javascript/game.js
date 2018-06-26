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
var currentWord = [];

window.onload = function(event) {
  var wordPick = words[Math.floor(Math.random() * words.length)];
  currentWord.push(wordPick);
  var wordString = currentWord.toString();
  var wordLength = wordString.length;
  var underScore = "‾ ".repeat(wordLength);
  document.getElementById("underscore").innerHTML= underScore;
  console.log(wordLength);
  console.log(currentWord);
  console.log(wordString);
};
