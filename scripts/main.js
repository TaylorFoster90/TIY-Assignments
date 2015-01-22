/**
 * @param Number A
 * @param Number B
 * @return sum of A and B
 */

var assert = require('assert');

function add(A, B){
	return A + B;
};
assert(add);
assert.equal(add(1,3),4);
assert.equal(add(4,4),8);

// subtraction // 

function diff(A, B){
	return A - B;
}
assert(diff);
assert.equal(diff(4,4),0);

//multiplication//

function prod(A, B){
	return A * B;
}

assert(prod);
assert.equal(prod(2,7),14);

// division //

function div(A, B){
	return A / B;
}

assert(div);
assert.equal(div(8,4),2);


assert.equal(prod(3,5),diff(20,5));
assert.equal(prod(2,10), div(40,2), add(35,5), diff(100,80));



