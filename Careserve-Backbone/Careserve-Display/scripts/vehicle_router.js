var vehicleRouter = Backbone.Router.extend({
	routes:{
		'' : 'showVehicles'
	},
	showVehicles : function(){
		this.basePresenterRef = new vehiclePresenter();
		this.basePresenterRef.showVehicleView(); 
	}
});