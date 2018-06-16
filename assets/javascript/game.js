//touch any key to start game

//Array of words
var words = ["Tunisia", "Argentina", "Saudi Arabia", "Costa Rica", "Switzerland", "Senegal", "Iceland", "South Korea", "Spain", "Germany"];

//pick a random word from array
var wordOG = words[Math.floor(Math.random() * words.length)];
var word = wordOG.toLowerCase();
console.log(word);

var remainingChar = word.length;

//Set up underscore array
var blankArray = [];
//Push underscores into answerArray
for(var i = 0; i < word.length; i++) {
    blankArray.push("_");   
}
//Set up answer array
var answerArray = [];
var missedArray = [];

var lives = 7;

document.getElementById("new-word").innerHTML = 
        "<p>" + blankArray.join(" ") + "</p>" +
        "<p>" + "remaining letters left to guess: " + remainingChar + "<p>" +
        "<p>" + "Missed: " + missedArray.join(" ") + "<p>" +
        "<p>" + "lives: " + lives + "</p>"

// //Capture User Guess and set up conditionals
document.addEventListener('keypress', function(input) {
    var letter = input.key;
    var letterCount = 0;
    //if user guesses correct letter
    if(word.includes(letter)) {
        for(var j = 0; j < word.length; j++) {
            if(word[j] === letter) {
                blankArray[j] = letter;
                letterCount++;
            }                               
        }
                remainingChar -= letterCount;
    } 
    //capture wrong guess
            else if(missedArray.includes(letter) == false) {
                missedArray.push(letter);
                lives--;
            }
    //display outcomes Win/Loss
            if(blankArray.join("") === word) {
                alert("You Win!");
            }
            if(lives < 1) {
                alert("You Lose!");
            }
    
    document.getElementById("new-word").innerHTML = 
    "<p>" + blankArray.join(" ") + "</p>" +
    "<p>" + "remaining letters left to guess: " + remainingChar + "<p>" +
    "<p>" + "Missed: " + missedArray.join(" ") + "<p>" +
    "<p>" + "lives: " + lives + "</p>"
    
});
        



