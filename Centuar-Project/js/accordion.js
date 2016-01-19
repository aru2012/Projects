function accordion(){
	
	$('.expand_icon i').click(function(){

		var x = $(this).parent().parent().parent().parent();
		if($(this).hasClass('fa-plus')){
			if(x.siblings().hasClass('active')){
				var y=$(this).parent().parent().parent().parent().siblings('.active');
				y.removeClass('active');
				y.find('.expand').slideUp('slow');
				y.find('.fa-minus').removeClass("fa-minus").addClass("fa-plus");
			}
			$(this).removeClass("fa-plus").addClass("fa-minus");
			$(this).parent().parent().next().slideDown('slow');
			x.addClass("active");
		}
		else if($(this).hasClass('fa-minus')){
			$(this).removeClass("fa-minus").addClass("fa-plus");
			$(this).parent().parent().next().slideUp('slow');
			x.removeClass("active");
		}
		
	return false;
	});
}