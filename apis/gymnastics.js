var events = require('./github/users/taylorfoster90/events.json');
var assert = require('assert')
var _ = require('lodash');

//variables for my 'answers'
var pushEvents = events.filter(function(item){
	return item.type == 'PushEvent'
});
var otherEvents = events.filter(function(item){
	return item.type != 'PushEvent'
});
var createEvent = events.filter(function(item){
	return item.type == 'CreateEvent'
});
var issueEvent = events.filter(function(item){
	return item.type == 'IssuesEvent'
});
var deleteEvent = events.filter(function(item){
	return item.type == 'DeleteEvent'
});
var prEvent = events.filter(function(item){
	return item.type == 'PullRequestEvent'
});
function getDate(a){ 
	return _.map(a, 'created_at')
}
function getDiff(a,b){
	return _.first(a).substring(0.10).localeCompare(_.last(b).substring(0.10)) + 1;
}
function avg(item) {
	var diff = getDiff(getDate(events),getDate(events));
	return item.length / diff

}

function answer(){
	return {
		total: events.length,
		PushEvent: {
			total: pushEvents.length,
			perDay: avg(pushEvents)
		},
		CreateEvent: {
			total: createEvent.length,
			perDay: avg(createEvent)
		},
		IssueEvent: {
			total: issueEvent.length,
			perDay: avg(issueEvent)
		},
		DeleteEvent: {
			total: deleteEvent.length,
			perDay: avg(deleteEvent)
		},
		PullRequestEvent: {
			total: prEvent.length,
			perDay: avg(prEvent)
		}
}
}


