var pagePresenter = function(){
	return{
		showExtrasView : function(){
			var page_Model = new pageModel(extrasData.data);
			var pageViewObj = new pageView({el:".container", model:page_Model});
		}
	}
}
