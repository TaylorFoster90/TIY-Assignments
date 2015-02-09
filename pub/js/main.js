(function (window) { 
    'use strict';
jQuery(document).ready(function() {
    
jQuery.getJSON('/octocat.json', function(json) {
    var user = json;
    $('#login').html(user.login);
    $('#email').html(user.email);
    $('#location').html(user.location);
    $('#website').html(user.blog);
    $('#company').html(user.company);
    $('#joined').html(user.created_at);
    $('aside').prepend('<img src="'+user.avatar_url+'" id="avatar" >');
    $('#followers').html(user.followers + '<br> Followers');
    $('#following').html(user.following + '<br> Following');
    console.log('mic check 1 2');
    
    var userRepos = user.repos_url;
    console.log(userRepos);
})
});
})(window);