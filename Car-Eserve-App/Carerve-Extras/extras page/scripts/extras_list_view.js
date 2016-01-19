//extras_list view
var extras_listView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.render();
	},
	render:function(){
		this.renderCategoriesView();
		return this;
	},
	renderCategoriesView : function(){	
		var categories_view = new categoriesView({el:this.$el.find(".extras_container"), model:this.model.get('categories').models});
	}
});
