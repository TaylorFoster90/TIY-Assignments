$(document).ready(function(){
	$.get('../apis/github/users/octocat.json', function (data){
		console.log(data)
	});
});
