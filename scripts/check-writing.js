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

it('should take 1 and return "one"', function(){
	assert.equal(toEnglish(1), "one");
});