
define([
   'backbone',
   'presenter/myClassified_presenter',
   'views/myClassified_view',
], function(Backbone){
	var myClassifiedModel= Backbone.Model.extend({	
});
var myClassifiedCollection = Backbone.Collection.extend({
	model : myClassifiedModel,
});
  // Return the model for the module
  return myClassifiedCollection;
});

