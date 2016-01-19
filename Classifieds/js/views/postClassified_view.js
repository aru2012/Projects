define([
  'jquery',
  'underscore',
  'backbone',
  'models/allClassified_model',
], function($, _, Backbone, postClassifiedModel){
		
var postClassifiedView = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
		this.template = this.options.template;
		this.render();
	},
	events : {
		'click #submit-classified' : 'showError', 	
	},
	showError : function(event){
		event.preventDefault();
		var errors = $("<div></div>");
		$("#postForm input").each(function(){ 
			var input =this;
			var errMsg=$("<p></p>");
			if(!input.value){
				if(input.name==='username'){
				errMsg.append('Please enter username');
				}
				if(input.name==='password'){
				errMsg.append('Please enter password');
				}
				if(input.name==='emailId'){
				errMsg.append('Please enter your email Id');
				}
				if(input.name==='employeeId'){
				errMsg.append('Please enter a employee Id');
				}
			}
			errors.append(errMsg);
		});
		if($('#errors-list').children().length>0){
			$('#errors-list').empty();
		}
	
		$('#errors-list').append(errors);
			
	},
	render:function(){
		this.$el.children().remove();
		this.$el.append(_.template($(this.template).html()));
	},
	
});
  // Our module now returns our view
  return postClassifiedView;
});

	
