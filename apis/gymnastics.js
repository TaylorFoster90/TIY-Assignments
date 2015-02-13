var events = require('./github/users/taylorfoster90/events.json');
var _ = require('lodash');

//variables for my 'answers'
var pushEvents = events.filter(function(item){
	return item.type == 'PushEvent'
});

var pushDates = _.pull(pushEvents, {'created_at' :});

console.log(pushDates)


function answer(){
	return {
		total: events.length
	}
}

