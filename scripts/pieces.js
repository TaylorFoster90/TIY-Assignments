var assert = require('assert');
function Piece(color, name, position){
	this._color = color,
	this._name = name, 
	this._position = position
}
Piece.prototype = {
	getPosition: function(){
		return this._position;
	},
	getColor: function(){
		return this._color;
	},
	getName: function(){
		return this._name;
	},
	getAbbrev: function(){
		//This function returns 'black' pieces to upperCase and 'white' to lowerCase
		if(this._color == 'black'){
			return this._name.substring(0,1).toUpperCase();
		}
		if(this._color == 'white'){
			return this._name.substring(0,1).toLowerCase();
		}
	},
	getString: function(){
		return (this._color + " " + this._name + " " + this._position).toString();
	},
	getHTML: function(){
		//confused on this function
		
	},
	getUTF: function(){
		// confused on this function
	}
}

var rook = new Piece('black', 'rook', 'queenside');
console.log(rook.getAbbrev());
console.log(rook.getString());
console.log(String.fromCharCode(9812));

it('should test Knights', function() {
	var Knight = new Piece('black', 'knight', 'queenside');
	assert.equal(Knight.getColor(), 'black');
	assert.equal(Knight.getName(), 'knight');
	assert.equal(Knight.getAbbrev(), 'K');
	assert.equal(Knight.getString(), 'black knight queenside');
});

it('should test Pawns', function() {
	var Pawn = new Piece('white', 'pawn', 'e4');
	assert.equal(Pawn.getColor(), 'white');
	assert.equal(Pawn.getName(), 'pawn');
	assert.equal(Pawn.getAbbrev(), 'p');
	assert.equal(Pawn.getString(), 'white pawn e4');
});

it('should test Queens', function() {
	var Queen = new Piece('black', 'queen', 'a5');
	assert.equal(Queen.getColor(), 'black');
	assert.equal(Queen.getName(), 'queen');
	assert.equal(Queen.getAbbrev(), 'Q');
	assert.equal(Queen.getString(), 'black queen a5');
});