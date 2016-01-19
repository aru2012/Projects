//page view
var pageView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.render();
	},
	render:function(){
		this.renderExtraslistView();
		this.renderitineraryView();
		this.rendercarRateView();
		return this;
	},
	renderExtraslistView : function(){	
		var extras_listViewObj = new extras_listView({el:".container", model:this.model.get('model')});
	},
	renderitineraryView : function(){	
		var itineraryViewObj = new itineraryView({el:this.$el.find(".itinerary_details"),template:"#itinerary-template", model:this.model.get('itinerary')});
	},
	rendercarRateView : function(){	
		var carRateViewObj = new carRateView({el:this.$el.find(".car_details"),template:"#car-template", model:this.model.get('rateDetails')});
	}

});
