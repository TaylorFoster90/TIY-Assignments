var assert = require('assert');
var _ = require('lodash');

var numbers = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14, 
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eighteen: 18,
	nineteen: 19,
	twenty: 20
}
//what turned into a great idea became a complete wreck will revisit later
function twen(){
	var input = 2;
	for(input=0; input < numbers[8]; input++)
		return input[i];
}

console.log(twen());

function plus(a,b){
	return numbers[a] + numbers[b];
};

it('should add "one" and "one" and equal number 2', function(){
	assert.equal(plus("one", "one"), 2);
});

it('should add "two" and "two" and equal number 4', function(){
	assert.equal(plus("two", "two"), 4);
});

it('should add "three" and "three" and equal number 6', function(){
	assert.equal(plus("three", "three"), 6);
});

it('should add "four" and "four" and equal number 8', function(){
	assert.equal(plus("four", "four"), 8);
});

it('should add "five" and "five" and equal number 10', function(){
	assert.equal(plus("five", "five"), 10);
});