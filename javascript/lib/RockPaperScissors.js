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

Game.prototype.PAIRS = solution = {
	rock: {'scissors': 'cuts up', 'lizard': 'stomps'},
	paper: {'rock': 'covers', 'Spock': 'blinds'},
	scissors: {'paper': 'slices', 'lizard': 'chops up'},
	Spock: {'rock': 'breaks', 'scissors': 'punches'},
	lizard: {'paper': 'pees on', 'Spock': 'eats'}

}

Game.prototype.winner = function() {
	if(this.isSamePick()) {
		return null;
	}

		if(solution[this.player1.pick].hasOwnProperty(this.player2.pick)) {
			this.win = this.player1
			this.lose = this.player2
			return this.player1;
		}
		else if(solution[this.player2.pick].hasOwnProperty(this.player1.pick)){
			this.win = this.player2
			this.lose = this.player1
			return this.player2;
		}
}



Game.prototype.isSamePick = function() {
 alert("Draw!"); 
 return this.player1.pick === this.player2.pick;
}

Game.prototype.message = function() {
	return (this.win.pick + " " + this.PAIRS[this.win.pick][this.lose.pick] + " " + this.lose.pick);
}

// {
// if ( player1 === player2) {
// 		console.log("It's a draw!"); }
// 	if (player1 === 'rock') {
// 		if (player2 === 'scissors') {
// 			return this.player1; }
// 		else { return this.player2;
// 				}
// 			}
// 	else if (player1 === 'paper') {
// 		if (player2 === 'rock') {
// 			return this.player1; }
// 		else { this.player2;
// 				}
// 			}
// 	else (player1 === 'scissors') {
// 		if (player2 === 'paper') {
// 			return this.player1; }
// 		else { this.player2;
// 					}
// 				}
// 			}
		
