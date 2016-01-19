//extras view
var extrasView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.template = this.options.template;
		this.render();
	},
	render:function(){
		var self = this;
		$.each(self.model, function(index, extrasItem){
			if(extrasItem){
				self.$el.append(_.template($(self.template).html())({extras:extrasItem.attributes}));
			}
		});
	}
});