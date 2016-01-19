define([
  'backbone'
], function(Backbone){
		var allClassifiedModel= Backbone.Model.extend({	
		});
		var allClassifiedCollection = Backbone.Collection.extend({
			model : allClassifiedModel,
		});
	return allClassifiedCollection;
});

