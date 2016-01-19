
function move_disc(clicked_button) {
	// body...
		var move= document.getElementById(clicked_button).value;
		var disc =document.getElementById("disc");
		var left_value = parseInt(disc.style.left, 10);
		var top_value = parseInt(disc.style.top, 10);
	
	switch(move){

		case 'left':
				disc.style.left ="0px";
				disc.style.left = (left_value - 5) + "px";
				break;
		case 'right':
				disc.style.left="10px";
				disc.style.left = (left_value + 5) + "px";
				break;
		case 'top':	
				disc.style.top="0px";
				disc.style.top = (top_value - 5) + "px";
				break;
		case 'bottom':
				disc.style.top="10px";
				disc.style.top = (top_value + 5) + "px";
				break;
	}
}
function moving_disc(event){
	
	var left_value = parseInt(disc.style.left, 10);
	var top_value = parseInt(disc.style.top, 10);
	
	switch(event.keyCode){

		case 37:
				disc.style.left ="0px";
				disc.style.left = (left_value - 5) + "px";
				break;
		case 39:
				disc.style.left="10px";
				disc.style.left = (left_value + 5) + "px";
				break;
		case 38:	
				disc.style.top="0px";
				disc.style.top = (top_value - 5) + "px";
				break;
		case 40:
				disc.style.top="10px";
				disc.style.top = (top_value + 5) + "px";
				break;
	}
}

