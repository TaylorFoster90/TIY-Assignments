
var numbers = [1,2,3,4,5,6,7,8];
var letter = ["a","b","c","d","e","f","g","h"];

for (var i = 0; i < letter.length ;i++){
	var list = letter[i];
	console.log(list)
}

var vm = new Vue({
	el: '#chessboard',
	data: {
		message: 'hello from Vue',
	},

});

