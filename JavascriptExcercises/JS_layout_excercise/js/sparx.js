function expand_section(div){

	//Displaying the content section none 
	document.getElementById('footer').style.display = "none";
	document.getElementById('sub-footer').style.display = "none";
	document.getElementById('content').style.border= "none";
	
	if(div=="expand_icon1"){
		var w = document.getElementById('fast');
		document.getElementById('reward').style.borderLeft = "0px";
		document.getElementById('fast_para').style.display = "none";
		document.getElementById('expand1').style.display = "none";

		//Displaying Other two Sections On Right side

		var y =document.getElementById('value');
		y.style.borderTop ="10px solid #e1e1e1";
		y.style.borderBottom ="10px solid #e1e1e1";
		y.style.borderRight ="10px solid #e1e1e1";

		var z =document.getElementById('reward');
		z.style.borderRight ="10px solid #e1e1e1";
		z.style.borderBottom ="10px solid #e1e1e1";

		//creating close window image
		var d = document.createElement('div');
		var close = document.createElement("img");
		close.src ='images/close.jpg';
		close.setAttribute('onclick',"reset();");
		d.appendChild(close);
		document.getElementById('heading1').appendChild(d);
		document.getElementById('fast_heading').style.float="left";
		d.style.float="right";
		
		//adding elements, Attaching the image to the 'fast' div element
		var image = document.createElement("img");
		image.src ='images/faster_image.jpg';
		document.getElementById('fast').appendChild(image);

		//attaching the para element
		var para = document.createElement('p');
		var text = document.createTextNode("With Hertz Gold Plus Rewards service there is no more waiting at the counters or paperwork to complete. As a Hertz Gold Plus Rewards member:");
		para.appendChild(text);
		document.getElementById('fast').appendChild(para);
		para.style.fontSize = "12pt";
		para.style.marginTop = "20px";

		//attaching the ul element
		var ul_li = document.createElement('ul');
		var li_1 = document.createElement('li');
		var text_1 = document.createTextNode("See your name in lights at over 50 of the world's busiest airports, never stop at a counter");
		li_1.appendChild(text_1);
		
		var li_2 = document.createElement('li');
		var text_2 = document.createTextNode("Show your license and pick- up your keys at the designated Gold counter at over 4,000 locations worldwide");
		li_2.appendChild(text_2);

		var li_3 = document.createElement('li');
		var text_3 = document.createTextNode("Choose a car you like better on the spot with Hertz Gold Choice");
		li_3.appendChild(text_3);

		var li_4 = document.createElement('li');
		var text_4 = document.createTextNode("Enjoy expedited drop-off with eReturn");
		li_4.appendChild(text_4);

		var li_5 = document.createElement('li');
		var text_5 = document.createTextNode("Receive vehicle updates or select an upgrade right on your phone with Mobile Gold Alerts");
		li_5.appendChild(text_5);

		ul_li.appendChild(li_1);
		ul_li.appendChild(li_2);
		ul_li.appendChild(li_3);
		ul_li.appendChild(li_4);
		ul_li.appendChild(li_5);
		document.getElementById('fast').appendChild(ul_li);
		ul_li.style.listStylePosition = "inside";
		ul_li.style.fontSize = "12pt";
		ul_li.style.marginTop = "30px";
		ul_li.style.color ="#555555";
	}

	if(div=="expand_icon2"){
		var w = document.getElementById('value');
		document.getElementById('fast').style.borderRight = "0px";
		document.getElementById('reward').style.borderLeft = "0px";
		document.getElementById('value_para').style.display = "none";
		document.getElementById('expand2').style.display = "none";

		document.getElementById('fast').style.float ="right";
		document.getElementById('value').style.float ="left";

		//Displaying Other two Sections On Right side

		var y =document.getElementById('fast');
		y.style.borderTop ="10px solid #e1e1e1";
		y.style.borderBottom ="10px solid #e1e1e1";
		y.style.borderRight ="10px solid #e1e1e1";

		var z =document.getElementById('reward');
		z.style.borderRight ="10px solid #e1e1e1";
		z.style.borderBottom ="10px solid #e1e1e1";

		//creating close window image
		var d = document.createElement('div');
		var close = document.createElement("img");
		close.src ='images/close.jpg';
		close.setAttribute('onclick',"reset();");
		d.appendChild(close);
		document.getElementById('heading2').appendChild(d);
		document.getElementById('value_heading').style.float="left";
		d.style.float="right";

		//Creating and adding new image to the div
		
		var image = document.createElement("img");
		image.src ='images/morevalue_image.jpg';
		document.getElementById('value').appendChild(image);

		//attaching the para element
		var para = document.createElement('p');
		var text = document.createTextNode("Hertz Gold Plus memebers:");
		para.appendChild(text);
		document.getElementById('value').appendChild(para);
		para.style.fontSize = "12pt";
		para.style.marginTop = "20px";

		//attaching the ul element
		var ul_li = document.createElement('ul');
		var li_1 = document.createElement('li');
		var text_1 = document.createTextNode("Enjoy member's only discounts");
		li_1.appendChild(text_1);
		
		var li_2 = document.createElement('li');
		var text_2 = document.createTextNode("Pay no additional driver fees for a spouse or domestic partner in the U.S.");
		li_2.appendChild(text_2);

		var li_3 = document.createElement('li');
		var text_3 = document.createTextNode("Get discounts on child seats");
		li_3.appendChild(text_3);

		var li_4 = document.createElement('li');
		var text_4 = document.createTextNode("Receive special e-mail offers when you opt-in to receive e-mail");
		li_4.appendChild(text_4);

		ul_li.appendChild(li_1);
		ul_li.appendChild(li_2);
		ul_li.appendChild(li_3);
		ul_li.appendChild(li_4);

		document.getElementById('value').appendChild(ul_li);
		ul_li.style.listStylePosition = "inside";
		ul_li.style.fontSize = "12pt";
		ul_li.style.marginTop = "30px";
		ul_li.style.color ="#555555";
	
	}
	
	if(div=="expand_icon3"){
		var w = document.getElementById('reward');
		document.getElementById('fast').style.borderRight = "0px";
		document.getElementById('reward_para').style.display = "none";
		document.getElementById('expand3').style.display = "none";

		//Floating the third div on left
		document.getElementById('reward').style.float ="left";
		document.getElementById('fast').style.float ="right";
		document.getElementById('value').style.clear ="both";
		document.getElementById('value').style.float ="right";

		document.getElementById('reward').style.position ="relative";
		document.getElementById('reward').style.bottom="170px";

		//Displaying Other two Sections On Right side

		var y =document.getElementById('fast');
		y.style.borderTop ="10px solid #e1e1e1";
		y.style.borderBottom ="10px solid #e1e1e1";
		y.style.borderRight ="10px solid #e1e1e1";

		var z =document.getElementById('value');
		z.style.borderRight ="10px solid #e1e1e1";
		z.style.borderBottom ="10px solid #e1e1e1";

		//creating close window image
		var d = document.createElement('div');
		var close = document.createElement("img");
		close.src ='images/close.jpg';
		close.setAttribute('onclick',"reset();");
		d.appendChild(close);
		document.getElementById('heading3').appendChild(d);
		document.getElementById('reward_heading').style.float="left";
		d.style.float="right";
	
		//adding elements, Attaching the image to the 'fast' div element
		var image = document.createElement("img");
		image.src ='images/morerewarding_image.jpg';
		document.getElementById('reward').appendChild(image);

		//attaching the para element
		var para = document.createElement('p');
		var text = document.createTextNode("With Hertz Gold Plus Rewards service there is no more waiting at the counters or paperwork to complete. As a Hertz Gold Plus Rewards member:");
		para.appendChild(text);
		document.getElementById('reward').appendChild(para);
		para.style.fontSize = "12pt";
		para.style.marginTop = "20px";

		//attaching the ul element
		var ul_li = document.createElement('ul');
		var li_1 = document.createElement('li');
		var text_1 = document.createTextNode("A Free Weekend Day starts at just 550 points");
		li_1.appendChild(text_1);
		
		var li_2 = document.createElement('li');
		var text_2 = document.createTextNode("Earn points not only on rental charges, but optional services like Hertz NeverLost, Fuel Purchase, SiriusXM, Insurance coverage options, additional mileage charges, car seats and more");
		li_2.appendChild(text_2);

		var li_3 = document.createElement('li');
		var text_3 = document.createTextNode("Use your points on a wide range of car classes, destinations and one-way rentals");
		li_3.appendChild(text_3);

		var li_4 = document.createElement('li');
		var text_4 = document.createTextNode("There are AnyDay Rewards with no blackouts");
		li_4.appendChild(text_4);

		var li_5 = document.createElement('li');
		var text_5 = document.createTextNode("Redeem your points on hertz.com anytime");
		li_5.appendChild(text_5);

		var li_6 = document.createElement('li');
		var text_6 = document.createTextNode("Transfer points as many times as you want to your spouse or domestic partner");
		li_6.appendChild(text_6);

		ul_li.appendChild(li_1);
		ul_li.appendChild(li_2);
		ul_li.appendChild(li_3);
		ul_li.appendChild(li_4);
		ul_li.appendChild(li_5);
		ul_li.appendChild(li_6);
		document.getElementById('reward').appendChild(ul_li);
		ul_li.style.listStylePosition = "inside";
		ul_li.style.fontSize = "12pt";
		ul_li.style.marginTop = "30px";
		ul_li.style.color ="#555555";
	
	}
	//Creating a new Block for Expansion

	w.style.width = "580px";
	w.style.height ="650px";
	w.style.border = "10px solid #e1e1e1";

}

function reset(){

	window.location.reload();
}