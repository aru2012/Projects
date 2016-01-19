//categories view
var categoriesView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
		this.render();
	},
	render:function(){
		var self = this;
		$.each(self.model, function(index, categoryItem){
			self.$el.append(new categoryView({template:"#category-template", model:categoryItem}).render().el);
		});
	}
});