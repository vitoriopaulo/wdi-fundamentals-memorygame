console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match! Congrats! :)");
	} else {
		alert("Sorry, try again. :(");
	}
}


var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);


if (cardsInPlay.length === 2) {
	checkForMatch();
  }
}

flipCard(0);
flipCard(2);
