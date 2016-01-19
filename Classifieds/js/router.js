define([
  'jquery',
  'underscore',
  'backbone',
  'presenter/login_presenter',
  'presenter/signup_presenter',
  'presenter/postClassified_presenter',
  'models/header_model',
  'views/header_view',
], function($, _, Backbone, loginController, signupController, postClassifiedController, headerModel, headerView){
	var classifiedsRouter = Backbone.Router.extend({
		routes:{
			'' : 'renderHomeView',
			'all' : 'showAll',
			'login' : 'renderLoginView',
			'signup' : 'renderSignupView',
			'classifieds' : 'renderMyClassified',
			'postclassified' : 'renderPostClassified'
		},
		renderHomeView : function(){
			require(['presenter/home_presenter'], function(homeController){
				var classifiedsControllerObj = new homeController();
				classifiedsControllerObj.showHome();
				var headerModelObj1 = new headerModel();
				var headerViewObj1 = new headerView({el:'.account-nav .r-nav',template:'#header-tpl', model:headerModelObj1});
			});
		},
		showAll : function(){
			require(['presenter/allClassified_presenter'], function(allClassifiedController){
				var presenterRef = new allClassifiedController();
				presenterRef.showAllClassifieds();
			});	
		},
		renderLoginView : function(){
			var loginControllerObj = new loginController();
			loginControllerObj.showLogin();
		},
		renderSignupView : function(){
			var signupControllerObj = new signupController();
			signupControllerObj.showSignup();

		},
		renderMyClassified : function(){
			require(['presenter/myClassified_presenter'], function(myClassifiedController){
				var myClassifiedControllerObj = new myClassifiedController();
				myClassifiedControllerObj.showMyClassified();
			});
		},
		renderPostClassified : function(){
			var postClassifiedControllerObj = new postClassifiedController();
			postClassifiedControllerObj.showPostClassified();
		},
		initialize : function(){
			var headerModelObj = new headerModel();
			var headerViewObj = new headerView({el:'.account-nav .r-nav',template:'#header-tpl', model:headerModelObj});
		}
	});

  return classifiedsRouter;
});