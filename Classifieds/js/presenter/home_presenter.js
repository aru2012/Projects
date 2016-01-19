define([
  'jquery',
  'underscore',
  'backbone',
  'models/home_model',
  'views/home_view',
], function($, _, Backbone, classifiedsCollection, homeView){
	var homeController = function(){
	return {
		showHome: function(){
			$.ajax({
				url:"../taclassifieds/codebase/getClassifiedsForHomePage.php", 
				success:function(result){
					var collectionObj = new classifiedsCollection(result);
					var homeViewObj = new homeView({
						el:".content", 
						template:"#home-tpl", 
						model:collectionObj.models
					});
				},
				error : function(error){
					alert("error : " + error.status +" " + error.statusText);
				},
			});
		},
		
	}
}
return homeController;
});