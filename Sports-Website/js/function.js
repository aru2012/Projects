/****JS Functionality used to implement the behaviour***/
/*Used the Javascript jQuery library to interact around the elements in the design*/

$(function(){
	mobile_menu(); 
	$('div#arrow').on('click', function() {
		$('.content-outer').toggleClass('opened');
	});
	
});

/*function that triggers when the hamburger-icon is clicked: nav is visible for mobile display*/
function mobile_menu (event) {
	$('div.hamburger-icon').on('click', function() {				
		$('header').toggleClass('nav-opened');
	});
	
}
function search_icon (event) {
	$('div.search-icon').on('click', function() {				
		$('header').toggleClass('search-opened');
	});
	
}

