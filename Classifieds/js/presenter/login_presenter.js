define([
  'jquery',
  'underscore',
  'backbone',
  'views/login_view',
  'models/login_model',
], function($, _, Backbone, loginView, loginModel){
	var loginController = function(){
		return {
			showLogin: function(){
				var loginObj = new loginModel();
				var loginViewObj = new loginView({el:".content", template:"#login-tpl", model:loginObj});
			}
		}
	}
	return loginController;
});