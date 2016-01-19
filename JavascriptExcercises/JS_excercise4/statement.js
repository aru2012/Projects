function format () {

	var apply= document.stmt_style.input_value.value;

	// change background color
	
	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="background-color"){
		document.getElementById("stmt-1").style.backgroundColor = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="background-color"){
		document.getElementById("stmt-2").style.backgroundColor = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="background-color"){
		document.getElementById("stmt-3").style.backgroundColor = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="background-color"){
		document.getElementById("stmt-4").style.backgroundColor = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="background-color"){
		document.getElementById("stmt-5").style.backgroundColor = apply;
	}

	//change statement color

	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="color"){
		document.getElementById("stmt-1").style.color = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="color"){
		document.getElementById("stmt-2").style.color = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="color"){
		document.getElementById("stmt-3").style.color = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="color"){
		document.getElementById("stmt-4").style.color = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="color"){
		document.getElementById("stmt-5").style.color = apply;
	}
	//change statement Font-Style

	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="fstyle"){
		document.getElementById("stmt-1").style.fontStyle = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="fstyle"){;
		document.getElementById("stmt-2").style.fontStyle = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="fstyle"){
		document.getElementById("stmt-3").style.fontStyle = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="fstyle"){
		document.getElementById("stmt-4").style.fontStyle = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="fstyle"){
		document.getElementById("stmt-5").style.fontStyle = apply;
	}	

	//change statement Margin
	
	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="margin"){
		document.getElementById("stmt-1").style.margin = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="margin"){;
		document.getElementById("stmt-2").style.margin = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="margin"){
		document.getElementById("stmt-3").style.margin = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="margin"){
		document.getElementById("stmt-4").style.margin = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="margin"){
		document.getElementById("stmt-5").style.margin = apply;
	}	
	
	//change statement Padding

	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="padding"){
		document.getElementById("stmt-1").style.padding = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="padding"){;
		document.getElementById("stmt-2").style.padding = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="padding"){
		document.getElementById("stmt-3").style.padding = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="padding"){
		document.getElementById("stmt-4").style.padding = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="padding"){
		document.getElementById("stmt-5").style.padding = apply;
	}	
	
	//change statement Border

	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="border"){
		document.getElementById("stmt-1").style.border = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="border"){;
		document.getElementById("stmt-2").style.border = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="border"){
		document.getElementById("stmt-3").style.border = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="border"){
		document.getElementById("stmt-4").style.border = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="border"){
		document.getElementById("stmt-5").style.border = apply;
	}
	
	//Display or hide Statements

	if(stmt_style.stmt.value=="st-1" && stmt_style.format.value=="display_stmt"){
		document.getElementById("stmt-1").style.display = apply;
	}
	if(stmt_style.stmt.value=="st-2" && stmt_style.format.value=="display_stmt"){;
		document.getElementById("stmt-2").style.display = apply;
	}
	if(stmt_style.stmt.value=="st-3" && stmt_style.format.value=="display_stmt"){
		document.getElementById("stmt-3").style.display = apply;
	}
	if(stmt_style.stmt.value=="st-4" && stmt_style.format.value=="display_stmt"){
		document.getElementById("stmt-4").style.display = apply;
	}
	if(stmt_style.stmt.value=="st-5" && stmt_style.format.value=="display_stmt"){
		document.getElementById("stmt-5").style.display = apply;
	}	
}
function reset(){
	window.location.reload();
	document.stmt_style.reset();
}