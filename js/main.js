$(document).ready(function(){
	$('.heder_form input').focus(function(){
		$('.datalist').slideDown('slow');
	}).focusout(function(){
		$('.datalist').slideUp('slow');
	})
	
	$('.main_slider').slick({
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToScroll: 1,
		dots: true
	});
	
	
	$('.product_slider_content').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: '<button> <i class="fa fa-angle-left" aria-hidden="true"></i> Назад</button>',
		nextArrow: '<button class="slick-next"> <i class="fa fa-angle-right" aria-hidden="true"></i> Вперед</button>'
	});
	
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
	
	
	//range
	range_min =  Number($( ".range" ).attr('data-min'));
	range_max =  Number($( ".range" ).attr('data-max'));
	 $( "#slider-range" ).slider({
    	range: true,
    	min: range_min,
    	max: range_max,
    	values: [ 75, 300 ],
    	slide: function( event, ui ) {
		$( "#range_v1" ).val( ui.values[ 0 ] );
			$( "#range_v2" ).val( ui.values[ 1 ] );
		}
    });
    $( "#range_v1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#range_v2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
	//end range
	
	//select
	$('select').selectmenu();
	
	//end select
	
	//filtr
	$('.filtr_all .viev_news').click(function(){
		$(this).find('i').toggleClass('fa-long-arrow-up');
		$('.hide_filtr').slideToggle('slow');
		if ($(this).hasClass('hiden')) {
			$(this).removeClass('hiden').find('b').text('показать больше фильтров');
		}
		else{
			$(this).addClass('hiden').find('b').text('скрыть фильтры');
		}
		return false;
	});
	
	//end filtr
	
	$('.sidebar_listing_nav .viev_news').click(function(){
		$(this).find('i').toggleClass('fa-long-arrow-up');
		$('.lick_hiden').slideToggle('slow');
		if ($(this).hasClass('hiden')) {
			$(this).removeClass('hiden').find('b').text('показать больше ');
		}
		else{
			$(this).addClass('hiden').find('b').text('скрыть ');
		}
		return false;
	});
	
	$('.product_slider_main .you_viev ul li').hover(
	function(){
	  $('.product_slider_main .slick-list').height(600);
	},
	function(){
	  $('.product_slider_main .slick-list').height(480);
	});
	
	
	$('.catalog_nav h3').click(function(){
		$('.catalog_nav ul').slideToggle('slow');
		$(this).toggleClass('active');
	});
	
	
})