//  //
var wins= 0;
var losses= 0;
var GuessesLeft= 0;

//this is where the answer lives //
var answer= ["a", "c", "d", "f", "g", "i", "j", "l", "m", "x"];
console.log(answer(0))

//references for where things will display in html//
var WinsText= document.getElementById("Wins-text");
var LossesText= document.getElementById("Losses-text");
var GuessesLeftText= document.getElementById("GuessesLeft-text");
var GuessesSoFarText= document.getElementById("GuessesSoFar-text");


document.onKeyUp = function(event) {

    var userGuess= event.key;

    var answer= answer[math.floor(math.random() * answer.length)];

if (userGuess === answer) {
    wins++;
    
} else {
    losses++;
}

};