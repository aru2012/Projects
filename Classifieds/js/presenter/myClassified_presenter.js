define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var myClassifiedController= function(){
		return {
			showMyClassified: function(){
				$.ajax({
					type: "POST",
					url: "../taclassifieds/codebase/getAllMyClassifieds.php", 
					dataType: "JSON",
					data: {empemail: sessionStorage.username},
					success:function(result){
						require(['models/myClassified_model','views/myClassified_view',],function(myClassifiedCollection, myClassifiedView){
							var myCollectionObj = new myClassifiedCollection(result.allMyClassifieds);
							var myClassifiedViewObj = new myClassifiedView({el:".content", template:"#classified-tpl", model:myCollectionObj.models});
						});
					},
					error : function(error){
						alert("error : " + error.status +" " + error.statusText);
					},
				});
			}
		}
	}

return myClassifiedController;
});