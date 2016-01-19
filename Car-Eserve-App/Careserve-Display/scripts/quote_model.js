var quoteModel = Backbone.Model.extend({});
var quoteCollection = Backbone.Collection.extend({
	model : quoteModel,
	initialize: function(){
	},
	comparator:function(a){
//		return a.get('price');
	}
});
