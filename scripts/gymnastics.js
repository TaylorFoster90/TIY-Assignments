var events = require('../apis/github/users/TaylorFoster90/events.json');
var assert = require('assert');

function answer(){
	var pushEvents = events.filter(function(item){
		return item.type == "PushEvent";

	});
	var days = events.filter(function(item){
		return item.type == "updated_at";
	});
	return {
		'total': events.length,
		'PushEvent': {
			'total': pushEvents.length

		}
	}
}
var theAnswer = answer();
console.log(theAnswer)
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