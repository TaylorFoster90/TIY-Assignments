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
		if(this._color + this._name == 'white' + 'king') return "\u2654";
		if(this._color + this._name == 'white' + 'queen') return "\u2655";
		if(this._color + this._name == 'white' + 'rook') return "\u2656";
		if(this._color + this._name == 'white' + 'bishop') return "\u2657";
		if(this._color + this._name == 'white' + 'knight') return "\u2658";
		if(this._color + this._name == 'white' + 'pawn') return "\u2659";
		if(this._color + this._name == 'black' + 'king') return "\u265A";
		if(this._color + this._name == 'black' + 'queen') return "\u265B";
		if(this._color + this._name == 'black' + 'rook') return "\u265C";
		if(this._color + this._name == 'black' + 'bishop') return "\u265D";
		if(this._color + this._name == 'black' + 'knight') return "\u265E";
		if(this._color + this._name == 'black' + 'pawn') return "\u265F";
	}
}

var pawn = new Piece('white','pawn','a7');

$(document).ready(function(){
	$('#A7, #B7, #C7, #D7, #E7, #F7, #G7, #H7').html(pawn.getUTF());
});