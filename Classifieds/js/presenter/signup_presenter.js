define([
  'jquery',
  'underscore',
  'backbone',
  'views/signup_view'
], function($, _, Backbone, signupView){
	var signupController = function(){
		return {
			showSignup: function(){
				var signupViewObj = new signupView({el:".content", template:"#signup-tpl"});
			}
		}
	}
return signupController;
});