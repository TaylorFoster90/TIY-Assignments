/**
 * @constructor Board
 *
 * @method move(start, end) -- move `Piece` from `start` to `end`
 * @param String start position, e.g. "a7"
 * @param String end position, e.g. "a5"
 *
 * @method capture(position) -- capture `Piece` at `position`
 * @param String position of captured `Piece`, e.g. "d8"
 *
 * @method castle(rook) -- perform a castle maneuver
 * @param Boolean rook position to castle from
 * @uses move on `Rook` and `King` in one turn
 *
 * @method pieceAt(position) -- retrieve `Piece` at `position` or `null` if empty
 * @param String position to inspect, e.g. "a2", "c5"
 * @returns Piece|null if {row, col} is empty
 *
 * @method toString() -- simple representation of Board for debugging
 *
 * @method toArray() -- probably unnecssary
 */
function Board(){
  // Constructor

}

Board.prototype = {
	move: function(start, end){
		return this.start;
		return this.end;
	},
	
} // END Board.prototype