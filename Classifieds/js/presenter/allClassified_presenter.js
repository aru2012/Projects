define([
  'jquery',
  'underscore',
  'backbone', 
  ], function($, _, Backbone, allClassifiedCollection){
	var allClassifiedController = function(){
	return {
		showAllClassifieds: function(){
			$.ajax({
				type: "GET",
				url: "../taclassifieds/codebase/getAllClassifieds.php", 
				success:function(result){
					require(['models/allClassified_model','views/allClassified_view'],function(allClassifiedCollection, allClassifiedView){
						var allCollectionObj = new allClassifiedCollection(result.allClassifieds);
						var allClassifiedViewObj = new allClassifiedView({el:".content", template:"#all-classified-tpl", model:allCollectionObj.models});
					});
				},
				error : function(error){
					alert("error : " + error.status +" " + error.statusText);
				},
			});
		}
	}
}
return allClassifiedController;
});
