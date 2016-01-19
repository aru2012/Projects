var vehiclePresenter = function(){
	return{
		showVehicleView : function(){
			var page_Model = new pageModel(vehicleData.data.model);
			var pageViewObj = new pageView({el:".container", model:page_Model});
		}
	}
}
