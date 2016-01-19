define([
  'jquery',
  'underscore',
  'backbone',
  'models/login_model',
], function($, _, Backbone, loginModel){
	
var loginView = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
		this.template = this.options.template;
		this.model = this.options.model;
		this.render();
	},
	events : {
		'click #lg-submit' : 'checkInput', 	
	},
	checkInput : function(event){
		event.preventDefault();
			var data = {
			'username':$('.username').val(),
			'password' : $('.password').val(),
			'queryStr' : null,
			};
			data.queryStr = "loginValidate";
			var logObj = new loginModel(data);
			logObj.save({},{
				type: "POST",
				dataType:"JSON",
				success:function(model, result){
					sessionStorage.setItem("username",data.username);
					window.location = '#'+ result.url;
				},
				error : function(model, error){	
					$('.invalid').html(error.responseJSON.responseText);
				},		
			});
		
			if(logObj.attributes.hasOwnProperty('err')){
				var errors = $("<div></div>");
				errors.addClass('err');
				
				for(var i=0; i< logObj.attributes.err.length;i++){
					var errMsg=$("<p></p>");
					errMsg.append(logObj.attributes.err[i]);
					errors.append(errMsg);
				}
				if($('#errors-list').children().length>0){
				$('#errors-list').empty();
				}
				$('#errors-list').append(errors);
			}
			
	},	
	validationError: function(){
		this.$el.append("username or password not valid.");
	},
	render:function(){
		this.$el.children().remove();
		this.$el.append(_.template($(this.template).html()));
	},
	//data: JSON.stringify(data),
});
	
	
  return loginView;
});

	

