var extras_listModel = Backbone.Model.extend({	
	initialize:function (response) {
		this.categories = response.categories;
		if(this.categories){
			var categoriesCollectionObj = new categoriesCollection(this.categories);
			this.set('categories', categoriesCollectionObj);
		}
	}
});

