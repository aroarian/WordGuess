var words = ["pickle","motherboard","absurd","exodus","ivy","quartz","unworthy","witchcraft","transcript","kilobyte"];
var currentWord = [];

window.onload = function(event){
    var wordPick = words[Math.floor(Math.random() * words.length)];
    currentWord.push(wordPick);
    console.log(currentWord);
};