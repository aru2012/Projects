//itinerary view
var itineraryView = Backbone.View.extend({
	initialize:function(options){
		this.options = options || {};
		this.template = options.template;
		this.render();
	},
	render:function(){
		this.$el.append(_.template($(this.template).html())({itinerary:this.model.attributes}));
	}

});
