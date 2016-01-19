
var categoriesModel = Backbone.Model.extend({	
	initialize:function (res) {
		this.extras = res.extras;
		if(this.extras){
			var extrasCollectionObj = new extrasCollection(this.extras);
			this.set('extras', extrasCollectionObj);
		}
	}
});
var categoriesCollection = Backbone.Collection.extend({
	model : categoriesModel,
});