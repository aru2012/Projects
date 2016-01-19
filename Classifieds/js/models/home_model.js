define([
   'backbone'
], function(Backbone){
  var classifiedsModel = Backbone.Model.extend({});

var classifiedsCollection = Backbone.Collection.extend({
	model : classifiedsModel,
});
  // Return the model for the module
  return classifiedsCollection;
});

