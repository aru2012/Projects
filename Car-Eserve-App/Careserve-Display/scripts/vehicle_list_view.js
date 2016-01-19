//vehicle_list view
var vehiclelistView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
		this.isAllVehicles = this.options.isAllVehicles;
		this.render();
	},
	render:function(){		
		var self = this;
		if(this.isAllVehicles){
			$.each(self.model, function(index, vehicleItem){
				self.$el.append(new vehicleView({template:"#vehicle-template", model:vehicleItem}).render().el);
			});	
		}
		else{
			$.each(self.model.slice(0,10), function(index, vehicleItem){
				self.$el.append(new vehicleView({template:"#vehicle-template", model:vehicleItem}).render().el);
			});	
		}
		/*$('.quote_wrapper').each(function() {
			var $this = $(this);
			var total = $this.children('.quote').length;
				if (total==2) { 
					$this.find('.quote:first-child .pay_later').addClass('addBottomPadding');
				}
		});*/
	}
});