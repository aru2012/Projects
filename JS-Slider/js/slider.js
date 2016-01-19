var image_object = [
			{
			    images: [
			    	
			    		"images/banner1.jpg",
						"images/banner1text.jpg",
						"images/btn.png"					
				]
			},
			{
			    images: [
			    	
			    		"images/banner2.jpg",
						"images/banner2text.jpg",
						"images/btn.png"
					
				]
			},
			{
			    images: [
			    	
			    		"images/banner3.jpg",
						"images/banner3text.jpg",
						"images/btn.png"
					
				]
			},
			{
			    images: [
			    	
			    		"images/banner4.jpg",
						"images/banner4text.jpg",
						"images/btn.png"
					
				]
			}
	];
	var image_list = document.getElementById('thumb-images');	
	var image_list_item = image_list.getElementsByTagName('img');
	var timeOut4, timeOut1, timeOut2, timeOut3, timeOut5;
	function slide(){
		document.getElementById("banner").getElementsByTagName("img")[0].src = image_object[0].images[0];
		slideImage(0);
		onThumbClick();
	}
	function slideImage(n){
		if(n<image_object.length ){
			highlightThumb(n);
			//$('#banner img').fadeTo(1000,0, function(){
			timeOut1 = setTimeout(function(){
				document.getElementById("banner").getElementsByTagName("img")[0].src = image_object[n].images[0];},0);
			//});
			//document.getElementById("banner").getElementsByTagName("img")[0].src= image_object[n].images[1].fadeTo(1500,1);
			timeOut2 = setTimeout(function(){
			//	$('#banner img').fadeTo(20,1, function(){
				document.getElementById("banner").getElementsByTagName("img")[0].src = image_object[n].images[1];

			//});
			},2000);
			timeOut3 = setTimeout(function(){
				$('#banner div img').fadeTo(20,1, function(){
				document.getElementById("banner-button").getElementsByTagName("img")[0].src = image_object[n].images[2];
				});
				
			},3000);

			timeOut4 = setTimeout(function(){$('#banner div img').fadeTo(0,0);unhighlightThumb(n);},5000);
		}
		timeOut5 = setTimeout(function(){
			if(n==3){
				slideImage(0);
			}
			else if(timeOut4!=0){
				slideImage(n+1);
			}
		},5000);
		
	}
	function highlightThumb(t){
		addActiveClass(image_list_item[t]);
	}
	function unhighlightThumb(t){		
		removeActiveClass(image_list_item[t]);
	}	
	function addActiveClass(slide_list){
		slide_list.className += 'active';
	}
	function removeActiveClass(slide_list){
		slide_list.classList.remove('active');	
	}
	function onThumbClick(){
		$('#thumb-images').on('click','li', function (e) {		
			clearTimeout(timeOut5);
			clearTimeout(timeOut4);
			clearTimeout(timeOut3);
			clearTimeout(timeOut2);
			clearTimeout(timeOut1);
    		var thumbId = e.target.id;
    		console.log(thumbId);
    		$('img').removeClass('active');
    		switch(thumbId)
			{
			case "one":
				slideImage(0);
				break;
			case "two":
				slideImage(1);
				break
			case "three":
				slideImage(2);
				break;
			case "four":
				slideImage(3);
				break;
			}
		});
	}	
	/*function loop(){
		for(var i=0;i<image_object.length;i++){
			slideImage(i);
		}
	}
	function timer(n){
		myTimer =setInterval(function(){slideImage(n);},24000);	
	}
	function stopTimer(x){
		clearTimeout(x);
	}*/
	


