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