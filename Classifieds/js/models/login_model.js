define([
   'backbone'
], function(Backbone){
	var loginModel = Backbone.Model.extend({
		defaults: {
			'username' : 'null',
			'password' : 'null',
			'queryStr' : 'loginValidate',
		},
		initialize:function(){
		},
		url: "../taclassifieds/codebase/validateUser.php", 
		validate : function(attrs, options){
			var pattern2 = /[A-z0-9- .@&_$]/;
			var pattern1 = /[A-z0-9._%+-@]/;
			var errlist = [];
			if(attrs.username == '') {
				errlist.push("Please type a username ");
			}
			else if(!attrs.username.match(pattern1)){
				errlist.push("Please type a valid username");	
			}	
			if(attrs.password === '') {
				errlist.push("Please type a password");
			}
			else if(!attrs.password.match(pattern2)){
				errlist.push("Please type a valid password");	
			}	
			if(errlist.length >0){
				this.set('err', errlist);
			}
		}

	});
  // Return the model for the module
  return loginModel;
});

