/* My new guessing game */
alert ("The guessing game's start");
var Answer =  Math.round((Math.random()*100)+ 1);
var Turns = 0;
alert (Answer);
do{
	var Guess = prompt("Guess a number between 1 and 100");
	Turns = Turns+1;
	if (Guess < Answer){
		alert ("Guess Higher");
	}
	else if (Guess > Answer){
		alert ("Guess Lower");
	}
}
while (Guess != Answer);
alert ("Your answer is correct in "+Turns+" turns.");

