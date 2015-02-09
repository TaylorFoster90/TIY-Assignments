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
    $('#avatar').html('<img src="'+user.avatar_url+'" >').css("height", "230px", "width", "230px");
    console.log('mic check 1 2');
   });
});

})(window);