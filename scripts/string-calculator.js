var assert = require('assert');

var num = {
	'zero': 0,
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9,
	'ten': 10
}
function key(n){
	return num[n];
}

function add(A,B){
	console.log(key(A) + key(B));
	return key(A) + key(B);
}

add('three','one');

