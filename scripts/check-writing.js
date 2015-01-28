var assert = require('assert');

var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

function toEnglish(a) {
	console.log(numbers[a])
	return numbers[a]
}

it('should take a number and make it a string', function(){
	assert.equal(toEnglish(0), "zero")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(1), "one")
});
it('should take a number and make it a string', function(){
	assert(toEnglish(2) == "two")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(3), "three")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(4), "four")
});

it('should take a number and make it a string', function(){
	assert.equal(toEnglish(5), "five")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(6), "six")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(7), "seven")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(8), "eight")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(9), "nine")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(10), "ten")
});
it('should take a number and make it a string', function (){
	assert.equal(toEnglish(11), "eleven")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(12), "twelve")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(13), "thirteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(14), "fourteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(15), "fifteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(16), "sixteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(17), "seventeen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(18), "eighteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(19), "nineteen")
});
it('should take a number and make it a string', function(){
	assert.equal(toEnglish(20), "twenty")
});
