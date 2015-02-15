var vm = new Vue({
	el: '#chessboard',
	data: {
		message: 'hello from Vue',
	},

});
var numbers = [1,2,3,4,5,6,7,8];
var letter = ["a","b","c","d","e","f","g","h"];
// var cells = $('#row8').children('td');

$('#row8').children('td:nth-child(3)').html('<span>this</span>').css("position", "absolute");
// function rowMake(a,b){
// 	return cells.attr('id', letter[b] + 8)
// }
// $(cells[0]).attr('id', letter[0] + 8);
// $(cells[1]).attr('id', letter[1] + 8);
// $(cells[2]).attr('id', letter[2] + 8);
// $(cells[3]).attr('id', letter[3] + 8);
// $(cells[4]).attr('id', letter[4] + 8);
// $(cells[5]).attr('id', letter[5] + 8);
// $(cells[6]).attr('id', letter[6] + 8);
// $(cells[7]).attr('id', letter[7] + 8);
// $(cells[8]).attr('id', letter[8] + 8);
