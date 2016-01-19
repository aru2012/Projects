define([
  'jquery',
  'underscore',
  'backbone',
  'views/postClassified_view',
  'models/postClassified_model',
], function($, _, Backbone, postClassifiedView, postClassifiedModel){
	var postClassifiedController = function(){
		return {
			showPostClassified: function(){
				var postViewObj = new postClassifiedView({el:".content", template:"#post-classified-tpl"});
			}
		}
	}
return postClassifiedController;
});