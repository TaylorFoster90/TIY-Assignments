var events = require('./github/users/taylorfoster90/events.json');
var _ = require('lodash');

//variables for my 'answers'
var pushEvents = events.filter(function(item){
	return item.type == 'PushEvent'
});
var eventDates = _.map(events, 'created_at')
var pushDates = _.map(pushEvents, 'created_at')

function getAvg () {
	//pulls first date and last date so I can see how many days are logged into this json
	var mostRecent =  _.first(eventDates).substring(0,10);
	var leastRecent = _.last(eventDates).substring(0,10);
	//looks like it took place over 3 days
	return (pushEvents.length / 3); 

}


function answer(){
	return {
		total: events.length,
		PushEvent: {
			total: pushEvents.length,
			perDay: getAvg()
		}
	}
}

console.log(answer().PushEvent.perDay);
console.log(eventDates)
console.log(getAvg())