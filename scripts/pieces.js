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
		return this._name.substring(0,1);
	},
	getString: function(){
		return (this._name + " " + this._color + " " + this._position).toString();
	},
	getHTML: function(){
		return 
	}	
}

var rook = new Piece('white', 'rook', 'queenside');
console.log(rook.getAbbrev());
console.log(rook.getString());


it('should show that a new "Piece" "rook" has been a color of white', function(){
	assert.equal(rook.getColor(), 'white');
});
