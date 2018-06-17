//touch any key to start game

//Array of words
var words = ["Tunisia", "Argentina", "Saudi Arabia", "Costa Rica", "Switzerland", "Senegal", "Iceland", "South Korea", "Spain", "Germany"];

//pick a random word from array
var wordOG = words[Math.floor(Math.random() * words.length)];
var word = wordOG.toLowerCase();

//Set up underscore array
var blankArray = [];
//Push underscores into answerArray
for(var i = 0; i < word.length; i++) {
    blankArray.push("_");   
}

var missedArray = [];
var lives = 7;
var remainingChar = word.length;

//dynamic JS html
var outcome = document.getElementById("outcome");

document.getElementById("blank-spaces").innerHTML = 
        "<p>" + blankArray.join(" ") + "</p>"

document.getElementById("new-word").innerHTML = 
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
            //if user inputs repetitive wrong letter
            else {
                alert("Please try a different letter");
            }
            //win logic
            if(blankArray.join("") === word) {
                outcome.innerHTML = "<span style='color:green'>" + "GOOOAAALLLLL" + "</span>" +
                                    "<p>" + "Please select 'Reset' to play again" + "<p>"
            }
            if(lives < 1) {
                outcome.innerHTML = "<span style='color:red'>" + "Sorry, You Lose" + "</span>" +
                                    "<p>" + "Please select 'Reset' to play again" + "<p>"
            }
    
    document.getElementById("blank-spaces").innerHTML = 
            "<p>" + blankArray.join(" ") + "</p>"
    
    document.getElementById("new-word").innerHTML = 
            "<p>" + "remaining letters left to guess: " + remainingChar + "<p>" +
            "<p>" + "Missed: " + missedArray.join(" ") + "<p>" +
            "<p>" + "lives: " + lives + "</p>"       

});

//reset failed attempt

// var reset = document.getElementById("reset");
// reset.addEventListener("click", function(r) {
//     blankArray = []
//     missedArray = []
//     lives = 7
//     document.getElementById("blank-spaces").innerHTML = 
//               "<p>" + blankArray.join(" ") + "</p>"
    
//     document.getElementById("new-word").innerHTML = 
//             "<p>" + "remaining letters left to guess: " + remainingChar + "<p>" +
//             "<p>" + "Missed: " + missedArray.join(" ") + "<p>" +
//             "<p>" + "lives: " + lives + "</p>"
//     outcome.innerHTML = "";





        



