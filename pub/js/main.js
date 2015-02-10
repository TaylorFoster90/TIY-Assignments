function piece(piece,row,rank){
	this.piece = piece;
	this.row = row;
	this.rank = rank;
}

var pawn = new piece('pawn', 'E', '8');


console.log(pawn)