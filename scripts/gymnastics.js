var events = require('../apis/github/users/TaylorFoster90/events.json');
var assert = require('assert');
var _ = require('lodash');

function answer(){
	var pushEvents = events.filter(function(item){
		return item.type == "PushEvent";

	});
	var otherEvents = events.filter(function(item){
		return item.type != "PushEvent";
	});

	return {
		'PushEvent': {
			'total': pushEvents.length
		},
		'other': {
			'total': otherEvents.length
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

it('should have PushEvent', function() {
	assert(theAnswer.PushEvent);
	assert(theAnswer.PushEvent.total);
});