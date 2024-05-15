function shuffle(array) {
	let currentIndex = array.length;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  let randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
}

function createAction (name, cost, action){
	this.name = name;
	this.type = "Action";
	this.cost = cost;
	this.action = action;
}

function createTreasure (name, cost, worth){
	this.name = name;
	this.type = "Treasure";
	this.cost = cost;
	this.worth = worth;
}

function createVictory (name, cost, points){
	this.name = name;
	this.type = "Victory";
	this.cost = cost;
	this.points = points;
}


let River = {
	copper: [],
	silver: [],
	gold: [],
	estate: [],
	dutchy: [],
	province: [],
}

function populateRiver() {

	const coinCount = 20;
	const vpCount = 10;

	for (let i = 0; i < coinCount; i++) {
		River.copper.push(new createTreasure("Copper", 0, 1))
		River.silver.push(new createTreasure("Silver", 3, 2))
		River.gold.push(new createTreasure("Gold", 6, 3))
	}

	for (let i = 0; i < vpCount; i++) {
		River.estate.push(new createVictory("Estate", 2, 1))
		River.dutchy.push(new createVictory("Dutchy", 5, 3))
		River.province.push(new createVictory("Province", 8, 6))
	}
}

populateRiver()

function dealHand(player) {
	for (let i = 0; i < 5; i++) {
		player.hand.push( player.deck[0] )
		player.deck.splice(0,1)
	}
}

function initialDeal(player) {
	const copperCount = 7;
	const estateCount = 3;

	for (let i = 0; i < copperCount; i++) {
		player.deck.push( River.copper[0] )
		River.copper.splice(0,1)
	}

	for (let i = 0; i < estateCount; i++) {
		player.deck.push( River.estate[0] )
		River.estate.splice(0,1)
	}

	shuffle(player.deck)

	dealHand(player)
}



