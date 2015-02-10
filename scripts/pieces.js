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
		return this_.color;
	},
	getName: function(){
		return this_.name;
	}	
}

var rook = new Piece('white', 'rook', 'queenside');

console.log(rook);