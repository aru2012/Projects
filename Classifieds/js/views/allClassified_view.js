define('views/home_view',[
  'jquery',
  'underscore',
  'backbone',
 'models/allClassified_model'
], function($, _, Backbone){
		
	var allClassifiedView = Backbone.View.extend({
		initialize: function(options){
			this.options = options || {};
			this.template = this.options.template;
			this.render();
		},
		render:function(){
			if(this.$el.children().length > 0){
				this.$el.empty();
			}
			$('.log').empty();
			$('.user-login').html(sessionStorage.getItem('username'));
			$('.sign-log a').attr("href",'').html("LogOut");
			this.$el.append(_.template($(this.template).html())({allClassifiedData:this.model}));
		}
	});
  // Our module now returns our view
  return allClassifiedView;
});

	
	