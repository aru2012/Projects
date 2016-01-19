var pageModel = Backbone.Model.extend({	
	initialize:function (response) {
		this.vehicles = response.vehicles;
		if(this.vehicles){
			var vehicleModelObj = new vehicle_listCollection(this.vehicles);
			this.set('vehicles', vehicleModelObj);
		}
	}
});
