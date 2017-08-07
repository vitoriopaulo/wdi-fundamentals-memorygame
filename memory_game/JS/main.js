console.log("Up and running!");

var cards = [
{
rank: "Queen",
suite: "Hearts",
cardImage: "images/queen-of-hearts.png"
},

{
rank: "Queen",
suite: "Diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "King",
suite: "Hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "King",
suite: "Diamonds",
cardImage: "images/king-of-diamonds.png"	
}
];

var cardsInPlay = [];


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match! Congrats! :)");
	} else {
		alert("Sorry, try again. :(");
	}
}


var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);
	this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	checkForMatch();
  }
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) { 
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	
}


createBoard();