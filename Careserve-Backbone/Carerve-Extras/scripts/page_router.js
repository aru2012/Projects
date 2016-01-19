var pageRouter = Backbone.Router.extend({
	routes:{
		'' : 'showExtras'
	},
	showExtras : function(){
		this.basePresenterRef = new pagePresenter();
		this.basePresenterRef.showExtrasView(); 
	}
});