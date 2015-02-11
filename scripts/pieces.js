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
		if(this._color + this._name == 'white' + 'king') return "&#9812;";
		if(this._color + this._name == 'white' + 'queen') return "&#9813;";
		if(this._color + this._name == 'white' + 'rook') return "&#9814;";
		if(this._color + this._name == 'white' + 'bishop') return "&#9815;";
		if(this._color + this._name == 'white' + 'knight') return "&#9816;";
		if(this._color + this._name == 'white' + 'pawn') return "&#9817;";
		if(this._color + this._name == 'black' + 'king') return "&#9818;";
		if(this._color + this._name == 'black' + 'queen') return "&#9819;";
		if(this._color + this._name == 'black' + 'rook') return "&#9820;";
		if(this._color + this._name == 'black' + 'bishop') return "&#9821;";
		if(this._color + this._name == 'black' + 'knight') return "&#9822;";
		if(this._color + this._name == 'black' + 'pawn') return "&#9823;";	
	},
	getUTF: function(){
		if(this._color + this._name == 'white' + 'king') return "U+2654";
		if(this._color + this._name == 'white' + 'queen') return "U+2655";
		if(this._color + this._name == 'white' + 'rook') return "U+2656";
		if(this._color + this._name == 'white' + 'bishop') return "U+2657";
		if(this._color + this._name == 'white' + 'knight') return "U+2658";
		if(this._color + this._name == 'white' + 'pawn') return "U+2659";
		if(this._color + this._name == 'black' + 'king') return "U+265A";
		if(this._color + this._name == 'black' + 'queen') return "U+265B";
		if(this._color + this._name == 'black' + 'rook') return "U+265C";
		if(this._color + this._name == 'black' + 'bishop') return "U+265D";
		if(this._color + this._name == 'black' + 'knight') return "U+265E";
		if(this._color + this._name == 'black' + 'pawn') return "U+265F";
	}
}

var rook = new Piece('black', 'rook', 'queenside');
console.log(rook.getAbbrev());
console.log(rook.getString());
console.log(rook.getHTML());

it('should test Knights', function() {
	var Knight = new Piece('black', 'knight', 'queenside');
	assert.equal(Knight.getColor(), 'black');
	assert.equal(Knight.getName(), 'knight');
	assert.equal(Knight.getAbbrev(), 'K');
	assert.equal(Knight.getString(), 'black knight queenside');
	assert.equal(Knight.getHTML(), '&#9822;')
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