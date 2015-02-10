var assert = require('assert');

function Piece(color, name, position){
	this._color = color,
	this._name = name, 
	this._position = position
}

console.log(assert.typeOf(Piece, 'Object', 'Piece should be an object'));
