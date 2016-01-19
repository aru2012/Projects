var pageModel = Backbone.Model.extend({	
	initialize:function (response) {
		this.model = response.model;
		if(this.model){
			var extras_listModelObj = new extras_listModel(this.model);
			this.set('model', extras_listModelObj);
		}
		this.itinerary = response.itinerary;
		if(this.itinerary){
			var itineraryModelObj = new itineraryModel(this.itinerary);
			this.set('itinerary', itineraryModelObj);
		}
		this.rateDetails = response.rateDetails;
		if(this.itinerary){
			var carRateModelObj = new carRateModel(this.rateDetails);
			this.set('rateDetails', carRateModelObj);
		}
	}
});

