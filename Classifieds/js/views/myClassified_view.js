define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
		
	var myClassifiedView = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
		this.template = this.options.template;
		this.model = this.options.model;
		this.render();
	},
	render:function(){
		if(this.$el.children().length>0){
			this.$el.empty();
		}
		$('.user-name').html(sessionStorage.getItem('username'));
		this.$el.append(_.template($(this.template).html())({myclassifiedData:this.model}));
	}
});
  return myClassifiedView;
});

	

