(function (window) { 
    'use strict';
jQuery(document).ready(function() {
    
alert('another');   
console.log('what');
    
jQuery.getJSON('/octocat.json', function(json) {
    var user = json;
    $.('#login').html(user.login); //why the fuck wont this work
//    console.log(user.login);
//    alert(user); 
//    alert('anything');
   });
});

})(window);