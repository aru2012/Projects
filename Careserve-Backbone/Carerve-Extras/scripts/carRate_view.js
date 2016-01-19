//itinerary view
var carRateView = Backbone.View.extend({
	initialize:function(options){
		this.options = options || {};
		this.template = options.template;
		this.render();
	},
	render:function(){
		this.$el.append(_.template($(this.template).html())({rateDetails:this.model.attributes}));
	}

});
