function printPlayerHand(player) {
	let div = document.getElementById("playerHand")

	div.innerText = "";

	for (let i = 0; i < player.hand.length; i++) {
		const card = player.hand[i];
		
		div.innerText += card.name + "\n"

	}
}

function createPlayer (name) {
	this.name = name;
	this.hand = [];
	this.deck = [];
	this.discard = [];
}

let player1 = new createPlayer("Charloto");

initialDeal(player1);
printPlayerHand(player1)