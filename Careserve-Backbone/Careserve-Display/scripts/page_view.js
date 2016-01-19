//page view
var pageView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.render();
	},
	events: {
		'click #sort_price' : 'sort_by_price',
		'click #show_all_vehicles' : 'showAll',
	},
	showAll: function(){
		$('.display_all').show();
		$('.result_range').hide();
		$('#show_ten_vehicles').show();
		this.renderVehicleView(true);
	},
	sort_by_price: function(){
		alert('hello');	
	},
	render:function(){
		this.renderVehicleView(false);
		return this;
	},
	renderVehicleView : function(allVehicles){	
		var vehicleview = new vehiclelistView({el:this.$el.find(".vehicles_container"), template:"#vehicle-template", model:this.model.get('vehicles').models, isAllVehicles : allVehicles});
	}
});
