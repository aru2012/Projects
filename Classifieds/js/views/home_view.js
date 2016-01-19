define('views/home_view',[
  'jquery',
  'underscore',
  'backbone',
  'models/home_model',
], function($, _, Backbone, classifiedsCollection){
 var homeView = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
		this.template = this.options.template;
		this.render();
	},
	render:function(){
		this.$el.empty();
		$('.user-name').html(sessionStorage.getItem('username'));
		this.$el.append(_.template($(this.template).html())({homepageData:this.model}));
	},

});
  // Our module now returns our view
  return homeView;
});