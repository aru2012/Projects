//quote view
var quoteView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
		this.render();
	},
	render:function(){
		var self = this;
		$.each(self.model, function(index, quoteItem){
			if(quoteItem){
				self.$el.append(_.template($(self.template).html())({quotes:quoteItem.attributes}));
			}
		});
	}
});