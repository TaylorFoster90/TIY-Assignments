var assert = require('assert');

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
	ten: 10
}


function plus(a,b){
	return numbers[a] + numbers[b];
};

it('should add "one" and "one" and equal number 2', function(){
	assert.equal(plus("one", "one"), 2);
});

it('should add "two" and "two" and equal number 4', function(){
	assert.equal(plus("two", "two"), 4);
});

it('should add "three" and "three" and equal number 2', function(){
	assert.equal(plus("three", "three"), 6);
});