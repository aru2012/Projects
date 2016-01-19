//category view
var categoryView = Backbone.View.extend({
	className:"category_info",
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
	},
	render:function(){
		this.$el.append(_.template($(this.template).html())({categories:this.model.attributes}));
		this.renderExtrasView(this.model.get('extras'));
		return this;
	},
	renderExtrasView : function(extras){	
		var extrasview = new extrasView({el:this.$el.find(".category_extras"), template:"#extras-template", model:extras.models});
	}
});