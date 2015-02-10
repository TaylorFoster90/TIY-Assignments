var assert = chai.assert;
//piece constructor
function piece(piece,row,rank){
	this.piece = piece;
	this.row = row;
	this.rank = rank;
}

/** 
@param String Color
@param String Name
@param String position
@returns Pbject with {color: String, name: String, position: String}

**/
function pieceFactory(color, name, position) {
	//given color of "white" or "black"
	//given name of 'pawn' or 'bishop'
	//when color is "black" and name is "pawn" 
	//then make a blackPawn at A7

	//when color is "white" and name is "bishop"
	//then make a whiteBishop at C1
}
function Piece(color, name, position){ //naming with capital letter means CONSTRUCTOR
	//Attach 'properties' here..
	this.color = color;
	this.name = name;
	this.position = position;
}
Piece.prototype = {
	//Attach 'methods' here..
	getName: function() {
		return this.name;
	},
	getFullName: function(){
		return this.color + " " + this.name;
	}
};

var whiteQueen = new Piece('white', 'queen', 'D1');
assert.equal(whiteQueen.getName(), 'queen');

function Rook(color, queenside){
	//Given 'color' of 'white' or 'black'
	//given 'queenside' is 'true' or 'false'
	//when color is white and 'queenside' is 'true'
	//then color is 'white', name is 'rook', position is 'h7'
	Piece.call(this, color,'rook',position);
}
Rook.prototype = new Piece(); // ?!?!?!?!?!?!?!?!?!?!?!?!?!?!
var blackPawnA2 = {
	color: 'black',
	name: 'pawn',
	position: 'a7' 
}
var whiteBishopQueenside = {
	color: 'white',
	name: 'bishop',
	position: 'f1'
}