var events = require('../apis/github/users/TaylorFoster90/events.json');
var assert = require('assert');
var _ = require('lodash');
var pushEvents = events.filter(function(item){
	return item.type == "PushEvent";
});
var otherEvents = events.filter(function(item){
	return item.type != "PushEvent";
});
var first = _.first(events), 
	last = _.last(events);


function answer(){
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
it('should have 13 PushEvent', function (){
	assert.equal(theAnswer.PushEvent.total, 13)
});
it('shold have some perDay stats', function(){
	assert(first);
	assert(last);

	assert(first.created_at);
	console.log(first.created_at.slice(8,10));
	assert(last.created_at);
	console.log(last.created_at.slice(8,10));

	console.log(
		_(events)
			.pluck('created_at')
			.map(function(date){
				return date.slice(0,10);
			})
			.uniq()
			.value();
		);






});