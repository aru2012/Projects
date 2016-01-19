
var loginView = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
		this.template = this.options.template;
		this.model = this.options.model;
		this.render();
	},

	events : {
		'click #lg-submit' : 'checkInput', 	
	},
	checkInput : function(event){
		event.preventDefault();
		var err = false;
		var done = false;
		var self = this;
		while(!err && !done){
			
			$("#loginForm input[type=text]").each(function(){ 
				var input = this;
				if(!input.value){
					err = true;
				}
				else if(input.name=="username"){
					self.model.username=input.value;
				}
				else if(input.name=="password"){
					self.model.password=input.value;
				}
			});
			done = true;
		}
		if(!err){
			var data = {
			'username':this.model.username,
			'password' : this.model.password,
			'queryStr' : null,
			};
			data.queryStr = "loginValidate";
			$.ajax({
				type: "POST",
				url:"../taclassifieds/codebase/validateUser.php",
				dataType:"JSON",
				data: JSON.stringify(data),
				success:function(model, result){
					alert(result);
					sessionStorage.setItem("username",data.username);
					window.location = '#'+model.url;
					},
				error : function(model, error){
					alert("error");
				},		
			});
		
		}
		else{
			this.showError();
		}
	},
	showError : function(){
		
		var errors = $("<div></div>");
		errors.addClass('err');
		$("#loginForm input").each(function(){ 
			var input =this;
			var errMsg=$("<p></p>");
			if(!input.value){
				if(input.name==='username'){
				errMsg.append('Please enter username');
				}
				if(input.name==='password'){
				errMsg.append('Please enter password');
				}
			}
			errors.append(errMsg);
		});
		if($('#errors-list').children().length>0){
			$('#errors-list').empty();
		}
		$('#errors-list').append(errors);
	},
	render:function(){
		this.$el.children().remove();
		this.$el.append(_.template($(this.template).html()));
	},
	
});