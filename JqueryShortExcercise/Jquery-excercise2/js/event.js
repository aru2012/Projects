$(document).ready(function(){
		
		$('#p').click(function(){
			$('p.lit').css('background-color','#44aa44');
		});
		$('#div').click(function(){
			$('div.lit').css('background-color','black');
		});
		$('#li').click(function(){
			$('li').css('background-color','#999999');
		});
		$('#input').click(function(){
			$('input').css('background-color', '#11fbbb');	
		});
		$('#h3').click(function(){
			$('h3').css('background-color', '#595ddd');	
		});

		//for stopping propagation
		$('#reset').click(function(){
   				$('h3,li,div.lit,p.lit').css('background-color', '#676767');
   				$('input').css('background-color', '#FFFFFF');
   				//window.location.reload();
		})
	});
		