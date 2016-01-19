//vehicle view
var vehicleView = Backbone.View.extend({
	className:'test',
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
	},
	render:function(){
		this.$el.append(_.template($(this.template).html())({vehicle:this.model.attributes}));
		this.renderQuoteView(this.model.get('quotes'));
		return this;
	},
	renderQuoteView : function(quotes){	
		var quoteview = new quoteView({el:this.$el.find(".quote_wrapper"), template:"#quote-template", model:quotes});
	}
});