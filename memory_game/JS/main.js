var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

while (cardsInPlay < 2)
	{cardsInPlay += 1}
	console.log(cardsInPlay);


if (cardOne === cardTwo) {alert("You found a match");}
else {alert("Sorry, try again");}




