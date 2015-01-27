var assert = require('assert');

var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

function toEnglish(a) {
	console.log(numbers[a])
	return numbers[a]
}

it('should take a number and make it a string', function(){
	assert(toEnglish(0), "zero")
})