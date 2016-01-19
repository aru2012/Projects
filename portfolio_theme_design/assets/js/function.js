$(function() {
	smoothScroll(300);
	projectBelt();
	projectLoad();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function projectBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').click(function() {
    $('.project-belt').addClass("slided");
    $('.project-container').show();
  });

  $('.project-return').click(function() {
    $('.project-belt').removeClass("slided");
    $('.project-container').hide(800);
  });

}

function  projectLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newFolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}
