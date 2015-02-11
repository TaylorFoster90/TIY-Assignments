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
	return key(A) + key(B);
}

it('should add "one" and "one" to equal 2', function(){
	assert(add("one","one") == 2)
});

it('should add "one" and "five" and equal 6', function(){
	assert.equal(add("one", "five"), 6)
});

it('should add "ten" and "seven" and equal 17', function(){
	assert.equal(add("ten", "seven"), 17)
});

it('should add "four" and "two" and equal 6', function(){
	assert.equal(add("four", "two"), 6)
});

it('should add "three" and "eight" and equal 11', function(){
	assert.equal(add("three", "eight"), 11)
});

it('should add "six" and "nine" and equal 15', function(){
	assert.equal(add("six", "nine"), 15)
});