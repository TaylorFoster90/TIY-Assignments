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
var eventDates = _.map(events, 'created_at')
var pushDates = _.map(pushEvents, 'created_at')
//I made this more complicated than it needed to be but hey, it works 
function getAvg () {
	//pulls first date and last date so I can see how many days are logged into this json
	var mostRecent =  _.first(eventDates).substring(0,10);
	var leastRecent = _.last(eventDates).substring(0,10);
	//lets get the difference between those
	var getDiff = mostRecent.localeCompare(leastRecent);
	it('should have a difference of 2, which is technically 3 days total', function(){
		getAvg();
		assert.equal(getDiff,2);
	})

	it('should show the average number of pushEvents per day is 5', function(){
		assert.equal(pushEvents.length / (getDiff + 1), 5);
	})
	//the difference is 2 so because date math is wierd it's technically a span of 3 days
	return pushEvents.length / (getDiff + 1)

}


function answer(){
	return {
		total: events.length,
		PushEvent: {
			total: pushEvents.length,
			perDay: getAvg()
		},
		other: {
			total: otherEvents.length
		}
}
}
