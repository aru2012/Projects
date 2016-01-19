define([
  'jquery',
  'underscore',
  'backbone',
  'models/header_model',
], function($, _, Backbone, headerModel){
		var headerView = Backbone.View.extend({
		initialize: function(options){
			this.options = options || {};
			this.template = this.options.template;
			this.render();
		},
		events:{
			'click .logout' : 'clearSession'
		},
		clearSession: function(event){
			$('.logout').attr("href", '');
			sessionStorage.clear();
		},
		render:function(){
			this.isLogged();
			this.$el.html(_.template($(this.template).html())({isLoggedIn:this.model.get('isLoggedIn')}));
		},
		isLogged:function(){
			if(sessionStorage.getItem("username")!=null){
				this.model.set('isLoggedIn', true);
			} else {
				this.model.set('isLoggedIn', false);
			}
		},
		});
  // Our module now returns our view
  return headerView;
});

	
	