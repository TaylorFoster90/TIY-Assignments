var assert = require('assert');

function toEnglish(A) {
	if(A == 1){
		return "one"
	}else if(A == 2){
		return "two"
	}else if(A == 3){
		return "three"
	}else if(A == 4){
		return "four"
	}else if(A == 5) {
		return "five"
	}else if(A == 6){
			return "six"
	}else if(A == 7){
		return "seven"
	}else if(A == 8){
		return "eight"
	}else if(A == 9){
		return "nine"
	}else if(A == 10){
		return "ten"
	}else if(A == 0){
		return "zero"
	}
}
it('should take 0 and return "zero"', function(){
	assert.equal(toEnglish(0), "zero");
});

it('should take 1 and return "one"', function(){
	assert.equal(toEnglish(1), "one");
});

it('should take 2 and return "two"', function(){
	assert.equal(toEnglish(2), "two");
});

it('should take 3 and return "three"', function(){
	assert.equal(toEnglish(3), "three");
});

it('should take 4 and return "four"', function(){
	assert.equal(toEnglish(4), "four");
});

it('should take 5 and return "five"', function(){
	assert.equal(toEnglish(5), "five");
});

it('should take 6 and return "six"', function(){
	assert.equal(toEnglish(6), "six");
});

it('should take 7 and return "seven"', function(){
	assert.equal(toEnglish(7), "seven");
});

it('should take 8 and return "eight"', function(){
	assert.equal(toEnglish(8), "eight");
});

it('should take 9 and return "nine"', function(){
	assert.equal(toEnglish(9), "nine");
});

it('should take 10 and return "ten"', function(){
	assert.equal(toEnglish(10), "ten");
});






