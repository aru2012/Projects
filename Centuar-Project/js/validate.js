function validate(){
			/**validation**/
		$("#btn").on("click",function(){
		var username = $('#username').val();
		var password = $('#password').val();
		var allowed_name = /^([a-zA-Z0-9]){5,10}$/;
		var allowed_password= /^[a-zA-z0-9*$._]{5,16}$/;
		var allowed="admin";

			if(username.length==0){
				
				$("#username").addClass("highlight");
				$("#username").focus(function() { 
						$.trim($(this).val()) != " " ? $(this).toggleClass("highlight", false) : $(this).toggleClass("highlight"); 
					});
				return false;
			}
			else if(!username.match(allowed_name)){
				
				$('<span class="error_msg"></span>').appendTo('#err1');	
				$('.error_msg').append("Please type only alphabets and numbers and atleast 5 characters!").fadeOut(2000);
				$("#username").focus();
				return false;
			}
			else if(password.length==0){
				
				$("#password").addClass("highlight");
				$("#password").focus(function() { 
						$.trim($(this).val()) != "" ? $(this).toggleClass("highlight", false) : $(this).toggleClass("highlight"); 
					});
				return false;
			}
			else if(!password.match(allowed_password)){

				$('<span class="error_msg"></span>').appendTo('#err2');
				$('.error_msg').append("Please type atleast 5 characters").fadeOut(2000);
				$("#password").focus();

				return false;
			}
			else if (username!='admin'){
				$('<span class="error_msg"></span>').appendTo('#err1');	
				$('.error_msg').append("Wrong Admin username").fadeOut(2000);
				$("#username").focus();
				return false;
				}	
			else if(password!='admin'){
					$('<span class="error_msg"></span>').appendTo('#err2');
					$('.error_msg').append("It is a wrong Password!").fadeOut(2000);
					$("#password").focus();
					return false;
				}
			return true;
		});

	}
