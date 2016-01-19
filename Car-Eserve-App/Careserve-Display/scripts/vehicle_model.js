var vehicle_list_Model = Backbone.Model.extend({	
	initialize:function (res) {
		this.quotes = res.quotes;
		if(this.quotes){
			var quoteModelObj = new quoteCollection(this.quotes);
			this.set('quotes', quoteModelObj);
		}
	}
});
var vehicle_listCollection = Backbone.Collection.extend({
	model : vehicle_list_Model,
});

var vehicle_sortedlistCollection = Backbone.Collection.extend({
	model : vehicle_list_Model,
	comparator:function(a){
		return a.attributes.quotes.models[0].get('price');
	}
})
