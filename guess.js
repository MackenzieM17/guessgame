/* My new guessing game */
alert ("The guessing game's start");
var Answer =  Math.round((Math.random()*100)+ 1);
alert (Answer);
var Guess = prompt("Guess a number between 1 and 100");
if (Guess==Answer){
	alert ("Your answer is correct");
}
if (Guess< Answer){
alert ("Guess Higher");
}
if (Guess> Answer){
alert ("Guess Lower");
}