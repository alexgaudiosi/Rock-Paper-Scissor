function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
	Rock: {'Scissors': 'cuts up', 'Turtle': 'stomps'},
	Towelie: {'Rock': 'covers', 'Spock': 'blinds'},
	Scissors: {'Towelie': 'slices', 'Turtle': 'chops up'},
	Spock: {'Rock': 'breaks', 'Scissors': 'punches'},
	Turtle: {'Towelie': 'pees on', 'Spock': 'eats'}
}

Game.prototype.computerChoice = function() {
	x = Math.random();

	if (x < 0.2) {
		return "Rock";
	} else if(x <= 0.4) {
		return "Towelie";
	} else if(x <= 0.6) {
		return "Scissors";
	} else if(x <= 0.8) {
		return "Towelie";
	} else {
		return "Spock";
	}
}

Game.prototype.winner = function() {
	if(this.isSamePick()) {
		return null;
	}

		if(this.PAIRS[this.player1.pick][this.player2.pick]) {
			this.win = this.player1
			this.lose = this.player2
			return this.player1;
		}
		else if(this.PAIRS[this.player2.pick][this.player1.pick]){
			this.win = this.player2
			this.lose = this.player1
			return this.player2;
		}
}

Game.prototype.isSamePick = function() {
 message = "Draw!"; 
 return this.player1.pick === this.player2.pick;
}

Game.prototype.message = function() {
	if(this.isSamePick()) return 'Draw!';
	return (this.win.pick + " " + this.PAIRS[this.win.pick][this.lose.pick] + " " + this.lose.pick);
}
