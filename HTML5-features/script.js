/*creating a canvas variable*/
	var t = document.getElementById("my_canvas");
	var draw = t.getContext("2d");

function draws(){

	// Get the value of all the keys 
  	var x = document.getElementById('x').value;
  	var y = document.getElementById('y').value;
  	var c = document.getElementById('color').value;
  	var b = document.getElementById('bcolor').value;
  	
  	//clear the canvas
  	draw.clearRect(0,0, t.width, t.height);
    //draw the line
    draw.beginPath();
	draw.moveTo(0,0);
	draw.lineTo(x,y);
	draw.lineWidth = "7";
	draw.strokeStyle =b;
	draw.stroke();

	//draw a rect
	draw.beginPath();
	draw.rect(x,y,100,150);
	draw.strokeStyle =b;
	draw.stroke();
	draw.fillStyle=c;
	draw.fill();
}

function store(form){
	// Check browser support
	if (typeof(Storage) != "undefined") {
    // Store
    var inputFname= document.getElementById("fname");
	localStorage.setItem("fname", inputFname.value);
	var inputLname= document.getElementById("lname");
	localStorage.setItem("lname", inputLname.value);
    var inputEmail= document.getElementById("email");
	localStorage.setItem("email", inputEmail.value);
	var inputAge= document.getElementById("age");
	localStorage.setItem("age", inputAge.value);
	var inputX= document.getElementById("x");
	localStorage.setItem("xVal", inputX.value);
	var inputY= document.getElementById("y");
	localStorage.setItem("yVal", inputY.value);
	var inputColor= document.getElementById("color");
	localStorage.setItem("colorVal", inputColor.value);
	var inputbColor= document.getElementById("bcolor");
	localStorage.setItem("bcolorVal", inputbColor.value);
	}  
	else {
		alert("Sorry, your browser does not support Web Storage...");
	}
	document.getElementById('coord_form').addEventListener('submit', function(e) {
		e.preventDefault();
      	draws();
    });
}

function retrieve(){
	 // Retrieve
	if(localStorage.getItem('fname')){
		document.getElementById('fname').value = localStorage.getItem('fname');
	}
	if(localStorage.getItem('lname')){
		document.getElementById('lname').value = localStorage.getItem('lname');
	}
	if(localStorage.getItem('email')){
		document.getElementById('email').value = localStorage.getItem('email');
	}
	if(localStorage.getItem('age')){
		document.getElementById('age').value = localStorage.getItem('age');
	}
	if(localStorage.getItem('xVal')){
		document.getElementById('x').value = localStorage.getItem('xVal');
	}
	if(localStorage.getItem('yVal')){
		document.getElementById('y').value = localStorage.getItem('yVal');
	}
	if(localStorage.getItem('colorVal')){
		document.getElementById('color').value = localStorage.getItem('colorVal');
	}
	if(localStorage.getItem('bcolorVal')){
		document.getElementById('bcolor').value = localStorage.getItem('bcolorVal');
	}
	
	/**loading local storage values and draw a line**/
	draw.beginPath();
	draw.moveTo(0,0);
	draw.lineTo(localStorage.getItem('xVal'),localStorage.getItem('yVal'));
	draw.lineWidth = "7";
	draw.strokeStyle =localStorage.getItem('bcolorVal');
	draw.stroke();
	//draw a rect
	draw.beginPath();
	draw.rect(localStorage.getItem('xVal'),localStorage.getItem('yVal'),100,150);
	draw.strokeStyle =localStorage.getItem('bcolorVal');
	draw.stroke();
	draw.fillStyle=localStorage.getItem('colorVal');
	draw.fill();
	
}

/**
window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form submissions
    document.getElementById('contactForm').addEventListener('submit', function() {
      // Get the value of the name field.
      var name = document.getElementById('fname').value;

      // Save the name in localStorage.
      localStorage.setItem('fname', name);
    });
	
  }
}

/******
var t = document.getElementById("my_canvas");
var draw = t.getContext("2d");
/* to draw a line*/
//draw.moveTo(0,0);
//draw.lineTo(200,100);
//draw.stroke();

/*to draw a circle*/
//draw.beginPath();
//draw.arc(95,50,40,0,2*Math.PI);
//draw.stroke();
/*to fill */
//draw.fillStyle="#700";
//draw.fillRect(0,200,150,75);
/*to draw a text*/
//draw.font = "30px Arial";
//draw.fillText("Hello World",150,50);
/*to draw a image*/
//window.onload = function(){
//var img = document.getElementById("minion");
//draw.drawImage(img,100,100);
//}
//to retrieve items
//window.onload = function() {
//if(localStorage.getItem('key_name')){
//document.getElementById('myId').value = localStorage.getItem('key_name');
//}
//}