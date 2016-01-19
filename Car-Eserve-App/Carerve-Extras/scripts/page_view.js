//page view
var pageView = Backbone.View.extend({
	initialize: function(options){
		this.options =  options || {};
		this.render();
	},
	events:{
		'click [type="checkbox"]': 'onSelect',
	},
	onSelect:function(ev){
		var id =  ev.currentTarget.parentElement.parentElement;
	if (typeof(Storage) !== "undefined") {
    //Store
    var extra_object = {'extra_item': $(id).find('.desc h5').text(),'extra_item_price':$(id).find('.price .value').text(),'extra_item_rate':$(id).find('.price p:last').text()};
    	
        localStorage.setItem('extra_object', JSON.stringify(extra_object));
		//objects = JSON.parse(localStorage.getItem("extra_objects"));
        $('.selected_extras').show();
        var extra_item_array = [];
		extra_item_array.push(extra_object); 
		localStorage.setItem('array', JSON.stringify(extra_item_array));
		if(localStorage.getItem('array')!= null){
		var new_array = JSON.parse(localStorage["array"]);
		
	}

    //Retrieve
    var $newextras = $( "<p class='extras_one'/>" );
    var str = extra_object.extra_item_rate;
    var res = str.split(" ", 1);
    $("<span></span>").text(extra_object.extra_item).css({"float":"left","width": "60%"}).appendTo($newextras);
    $("<span></span>").text(extra_object.extra_item_price+ res).css({"float":"right"}).appendTo($newextras);
    $(".add_extras").append($newextras);
	} else {
     $('.extras_rate').innerHTML = "Sorry, your browser does not support.";
	}
		//new carRateView();
	},
	addObject:function(object){
		var extra_item_array = [];
		extra_item_array.push(object); 
	},
	render:function(){
		this.renderExtraslistView();
		this.renderitineraryView();
		this.rendercarRateView();
		return this;
	},
	renderExtraslistView : function(){	
		var extras_listViewObj = new extras_listView({el:".container", model:this.model.get('model')});
	},
	renderitineraryView : function(){	
		var itineraryViewObj = new itineraryView({el:this.$el.find(".itinerary_details"),template:"#itinerary-template", model:this.model.get('itinerary')});
	},
	rendercarRateView : function(){	
		var carRateViewObj = new carRateView({el:this.$el.find(".car_details"),template:"#car-template", model:this.model.get('rateDetails')});
	}

});

