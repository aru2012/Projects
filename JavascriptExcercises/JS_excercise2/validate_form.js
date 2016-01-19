function validateForm () {
	
	//find all errors and push in an array
	var errors=[];
	//allowed input type regex
	var allowed_name = /^[a-zA-Z ]+$/;
	var allowed_password = /^[a-zA-Z0-9$#._-]{8,16}$/;
	var allowed_email=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
    var allowed_mobile = /^[0-9+-]{10,14}$/;
    var allowed_pincode = /^[0-9]{5,6}$/;
     //Name Input Validation
	if(document.form.name.value==""){
		document.getElementById("name_error").innerHTML="Please type the name.";
		return false;
	}
	else if(!allowed_name.test(document.form.name.value)){
		//invalid characters
		document.getElementById("name_error").innerHTML="Invalid name, should contain only alphabets";
		return false;
	}

	//Password and Confirm Password Validation
	if(document.form.password.value==""){
		document.getElementById("password_error").innerHTML="Please type the password.";
		return false;
	} else if(!allowed_password.test(document.form.password.value)){
		document.getElementById("password_error").innerHTML="Password value is invalid! It should be atleast 8 characters!";
		return false;

	}
	if(document.form.conf_password.value==""){
		document.getElementById("conf_password_error").innerHTML="Please type the password.";
		return false;
	} else if(document.form.password.value!=document.form.conf_password.value){
		document.getElementById("conf_password_error").innerHTML="Passwords value do not match. Please type again!";
		return false;
	}
	//Email-Validation
	if(document.form.email.value==""){
		document.getElementById("email_error").innerHTML="Please type the email id.";
		return false;	
			} else if(!allowed_email.test(document.form.email.value)){
		document.getElementById("email_error").innerHTML="Invalid Email id.";
		return false;
	}
	//Mobile Validation
	if(document.form.mobile_number.value==""){
		document.getElementById("mobile_error").innerHTML="Please type the mobile number.";
		return false;
	} else if(!allowed_mobile.test(document.form.mobile_number.value)){
		document.getElementById("mobile_error").innerHTML="Invalid Mobile Number! Mobile number should contain 10-14 digits!";
		return false;
	}
	//Pincode Validation
	if(document.form.pincode.value==""){
		document.getElementById("pincode_error").innerHTML="Please type the pincode.";
		return false;
	} else if(!allowed_pincode.test(document.form.pincode.value)){
		document.getElementById("pincode_error").innerHTML="Invalid Pincode! Pincode should contain 5-6 digits!";
		return false;
	}
	if(document.form.gender.value==""){
		document.getElementById("radio_error").innerHTML="Chose an option";
	}
	else{
		document.getElementById('submit_success').innerHTML = "Form Successfully submitted";
		document.getElementById("display_name").innerHTML = document.form.name.value;
    	document.getElementById("display_password").innerHTML = document.form.password.value;
		document.getElementById("display_conf_password").innerHTML = document.form.conf_password.value;
		document.getElementById("display_email").innerHTML = document.form.email.value;
    	document.getElementById("display_mobile").innerHTML = document.form.mobile_number.value;
    	document.getElementById("display_country").innerHTML = document.form.country.value;
    	document.getElementById("display_state").innerHTML = document.form.state.value;
    	document.getElementById("display_city").innerHTML = document.form.city.value;
    	document.getElementById("display_pincode").innerHTML = document.form.pincode.value;
    	document.getElementById("display_gender").innerHTML=document.form.gender.value;
	}

	return false;
}
function reset(){
	document.form.reset();
}