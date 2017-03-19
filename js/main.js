$(document).ready(function(){
	$('.heder_form input').focus(function(){
		$('.datalist').slideDown('slow');
	}).focusout(function(){
		$('.datalist').slideUp('slow');
	})
	
	$('.news_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<button> <i class="fa fa-angle-left" aria-hidden="true"></i> </button>',
		nextArrow: '<button> <i class="fa fa-angle-right" aria-hidden="true"></i> </button>'
	});
	
	 $('.product_slider_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product_slider_nav'
	 });
	$('.product_slider_nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product_slider_for',
		dots: false,
		vertical: true
	});
})