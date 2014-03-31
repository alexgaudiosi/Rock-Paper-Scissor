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
	rock: ['scissors', 'lizard'],
	paper: ['rock', 'Spock'],
	scissors: ['paper', 'lizard'],
	Spock: ['rock', 'scissors'],
	lizard: ['paper', 'Spock']

}

Game.prototype.winner = function() {
	if(this.player1.pick === this.player2.pick) {
		return null;
	}

		if(solution[this.player1.pick].indexOf(this.player2.pick) != -1) {
			return this.player1;
		}
		else if(solution[this.player2.pick].indexOf(this.player1.pick) != -1){
			return this.player2;
		}
};

Game.prototype.isSamePick = function() {
	return this.player1.pick === this.player2.pick;
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
		
