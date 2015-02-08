$('document').ready(function() {
$.getJSON('octocat.json', function(quack) {
    var users = quack;
    console.log(users);
});
});