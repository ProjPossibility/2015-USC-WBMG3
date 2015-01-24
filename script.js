var fbRef = new Firebase("https://mathsup.firebaseio.com");
// fbRef.authWithOAuthPopup("facebook", function(error, authData) {
// 	alert(authData);
// 	alert(error);
// });
$(document).ready(function(){
	$('form').submit(function(e) {

		// fbRef.authWithOAuthPopup('facebook', function(error, authData) {	
		// });
		// alert('our new page comes here');
	var authClient = new FirebaseSimpleLogin(myRef, function(error, user) { ... });
	authClient.login('facebook', {
  	rememberMe: true,
  	scope: 'email,user_likes'
});
	});
}); 