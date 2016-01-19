$(function(){
var op = "a"; 
var index = -1; 
var employees = localStorage.getItem("employees");
employees = JSON.parse(employees);
if(employees == null)
	employees = [];

$("#employee-form").on("submit",function(){
	var name = $('#name').val();
	var location = $('#location').val();
	var email =$('#email').val();
	var allowed_name = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
	if(name.length==0){

		$("#name").addClass("highlight");
		$("#name").focus(function() { 
				$.trim($(this).val()) != "" ? $(this).toggleClass("highlight", false) : $(this).toggleClass("highlight"); 
			});
		return false;
	}
	else if(email.length==0){

		$("#email").addClass("highlight");
		$("#email").focus(function() { 
			$.trim($(this).val()) != "" ? $(this).toggleClass("highlight", false) : $(this).toggleClass("highlight"); 
		});
		return false;
	}
	else if(location.value == "select"){	
		$('<span class="error_msg"></span>').appendTo('#location');
		$('.error_msg').append("Please type only alphabets!").fadeOut(2000);
		return false;
	}
	else if(!name.match(allowed_name)){
		
		$('<span class="error_msg"></span>').appendTo('#name');
		$('.error_msg').append("Please type only alphabets!").fadeOut(2000);
		$("#name").focus();

		return false;
	}
	else if(op == "a"){
		return add();
	}
	else
		return edit();
});

employee_list();

$(".btnEdit").on("click", function(event){
	event.preventDefault();
	op = "e";
	index = parseInt($(this).attr("alt").replace("edit", ""));
	
	var emp = JSON.parse(employees[index]);
	$("#name").val(emp.Name);
	$("#email").val(emp.Email);
	$("#location").val(emp.Location);
	$("#name").focus();
});

$(".btnDelete").on("click", function(event){
	event.preventDefault();
	index = parseInt($(this).attr("alt").replace("delete", ""));
	deleteEmp(index);
	employee_list();
});
$("#showList").on("click", function(event){
	event.preventDefault();
	$('table').show();
});
function employee_list(){		
	$("#tableData").html("");
	$("#tableData").html(
		"<thead>"+
		"	<tr>"+
		"	<th>Name</th>"+
		"	<th>Email</th>"+
		"	<th>Location</th>"+
		" <th>Edit/Delete</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody>"+
		"</tbody>"
		);
	for(var i in employees){
		var emp = JSON.parse(employees[i]);
	  	$("#tableData tbody").append("<tr>"+
									 "	<td>"+emp.Name+"</td>" + 
									 "	<td>"+emp.Email+"</td>" + 
									 "	<td>"+emp.Location+"</td>" +
									 "	<td><a href='' alt='edit"+i+"' class='btnEdit'>Edit</a> <a href='' alt='delete"+i+"'class='btnDelete'>Delete</a></td>" +   
	  								 "</tr>");
	}
}
function add(){
	var employee = JSON.stringify({
		Name  : $("#name").val(),
		Email : $("#email").val(),
		Location : $("#location").val()
	});
	employees.push(employee);
	localStorage.setItem("employees", JSON.stringify(employees));
	return true;
}

function edit(){
	employees[index] = JSON.stringify({
		Name  : $("#name").val(),
		Email : $("#email").val(),
		Location : $("#location").val()
	});
	localStorage.setItem("employees", JSON.stringify(employees));
	op = "a"; 
	return true;
}

function deleteEmp(s){
	employees.splice(s, 1);
	localStorage.setItem("employees", JSON.stringify(employees));
}


});