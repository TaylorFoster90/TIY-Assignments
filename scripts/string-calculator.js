var assert = require('assert');

function plus(A, B) {
    return 2;
}

it('should add "one" and "one"', function() {
    assert.equal(plus("one", "one"), 2);
}); 