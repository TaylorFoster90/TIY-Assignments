var events = require('../apis/github/users/TaylorFoster90/events.json');
var assert = require('assert');

function answer(){

	return {
		'total': events.length,
		'PushEvent': {
			'total': 5

		}
	}

}
var theAnswer = answer();
it('should have events', function(){
	assert(events);
});

it('should return answer exists', function() {
	assert(answer);
});

it('should return the length of events', function() {
	assert.equal(theAnswer.total, 30);
});
it('should have PushEvent', function() {
	assert(theAnswer.PushEvent);
	assert(theAnswer.PushEvent.total);
});