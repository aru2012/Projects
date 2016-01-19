/**Create a script file with min of 5 functions such as sort, min, max etc which we can reuse for different forms.
(External Javascript File)- Include this as part of HTML and try to invoke the functionalities.**/
function sorted() {
	// get all the values from the table and check one 
    var table_data = document.getElementById('table_data').getElementsByTagName('tbody').item(0);
    var row_data = table_data.getElementsByTagName('tr');            
        for(var i = 0; i < row_data.length - 1; i++){
            for(var j = 0; j < row_data.length-(i+1); j++){
                if(parseInt(row_data.item(j).getElementsByTagName('input').item(0).value) > parseInt(row_data.item(j+1).getElementsByTagName('input').item(0).value)){
                    table_data.insertBefore(row_data.item(j+1),row_data.item(j));
            	}
            }                                                                                                                                                  
		}
}
function add() {
	// add the two input values
    var add = parseInt(document.functions.first.value) + parseInt(document.functions.second.value); 
   document.getElementById("result").innerHTML = add;
}

function subtract() {
	// subtract the two input values
     var subtract = parseInt(document.functions.first.value) - parseInt(document.functions.second.value); 
   document.getElementById("result").innerHTML = subtract;
}
function multiply() {
    // subtract the two input values
     var multiply = parseInt(document.functions.first.value) * parseInt(document.functions.second.value); 
   document.getElementById("result").innerHTML = multiply;
}
function reverse(){

    var input1 = document.functions.first.value;
    var input2 = document.functions.second.value;
    if(input1!="" && input2==""){
        document.getElementById("result").innerHTML = input1.split('').reverse().join('');
    }
    if(input2!="" && input1==""){
        document.getElementById("result").innerHTML = input2.split('').reverse().join('');
    }
    if(input1=="" && input2==""){
        document.getElementById("result").innerHTML = "";
    }
    if(input1!="" && input2!=""){
        document.getElementById("result").innerHTML = "Give only one input value";
    }
}
function reset() {
        // reset the page...
        document.functions.reset();
        document.sort_form.reset();
        window.location.reload();
}