
//select the type of the list
	function select_list () {

		if(dropdown_form.dropdown_1.value=="ordered"){
			document.getElementById("dropdown_2").style.display="inline";
			document.getElementById("dropdown_3").style.display="none";
		}
		if(dropdown_form.dropdown_1.value=="unordered"){
			document.getElementById("dropdown_3").style.display="inline";
			document.getElementById("dropdown_2").style.display="none";
		}
		
	}
	//select various list types for unordered list
	function unordered_list_type(){
		
		if(dropdown_form.dropdown_3.value=="disc"){
		document.getElementById("list").style.listStyle="disc inside"; 
			}
		if(dropdown_form.dropdown_3.value=="square"){
		document.getElementById("list").style.listStyle="square inside"; 
			}
		if(dropdown_form.dropdown_3.value=="circle"){
		document.getElementById("list").style.listStyle="circle inside"; 
			}
	}
	//select various list types for unordered list
	function ordered_list_type(){
		/*var list = document.createElement("li");
		var list_text = document.createTextNode("This is another list item .");
		list.appendChild(list_text);
		document.getElementById("list").appendChild(list); 
		*/	
		if(dropdown_form.dropdown_2.value=="default"){
		document.getElementById("list").style.listStyle="decimal inside"; 
			}
		if(dropdown_form.dropdown_2.value=="alpha-lower"){
		document.getElementById("list").style.listStyle="lower-alpha inside"; 
			}
		if(dropdown_form.dropdown_2.value=="alpha-upper"){
		document.getElementById("list").style.listStyle="upper-alpha inside"; 
			}
		if(dropdown_form.dropdown_2.value=="roman-lower"){
		document.getElementById("list").style.listStyle="lower-roman inside"; 
			}		
		if(dropdown_form.dropdown_2.value=="roman-upper"){
		document.getElementById("list").style.listStyle="upper-roman inside"; 
			}
	}
	function reset () {
		// body...
		window.reload();
	}