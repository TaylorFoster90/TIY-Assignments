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
		//confused on this functions
	},
	getUTF: function(){
		// confused on this functions
	}
}

var rook = new Piece('black', 'rook', 'queenside');
console.log(rook.getAbbrev());
console.log(rook.getString());

it('should test Knights', function() {
	var Knight = new Piece('black', 'knight', 'queenside');
	assert.equal(Knight.getColor(), 'black');
	assert.equal(Knight.getName(), 'knight');
	assert.equal(Knight.getAbbrev(), 'K');
	assert.equal(Knight.getString(), 'black knight queenside');
});


