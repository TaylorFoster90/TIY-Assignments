var assert = require('assert');
var _ = require('lodash')

var numbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];

function toEnglish(a){
	return numbers[a];
}

console.log(toEnglish(5));
