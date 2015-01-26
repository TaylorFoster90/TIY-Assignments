var board = [ 
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];


function print(board) {
  console.log(board.join('\n') + '\n\n');
 }

function movePawnW(){
	board[4][3] = board[6][3];
	board[6][3] = ' ';
}
movePawnW();
function movePawnW2() {
	board[4][2] = board[6][2];
	board[6][2] = ' ';
}
movePawnW2();
function moveKnightW(){
	board[5][5] = board[7][6];
	board[7][6] = ' ';
}
moveKnightW();
function movePawnW3() {
	board[5][6] = board[6][6];
	board[6][6] = ' ';
}
movePawnW3();
function moveBishopW() {
	board[6][6] = board[7][5];
	board[7][5] = ' ';
}
moveBishopW();
function movePawnB(){
	board[3][3] = board[1][3];
	board[1][3] = ' ';
}
movePawnB();
function movePawnB2() {
	board[2][4] = board[1][4];
	board[1][4] = ' ';
}
movePawnB2();
function moveKnightB() {
	board[2][5] = board[0][6];
	board[0][6] = ' ';
}
moveKnightB();
function moveBishopB(){
	board[1][4] = board[0][5];
	board[0][5] = ' ';
}
moveBishopB();
print(board);