//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	$("#header").toggleClass("active");
	$(".header-nav").toggleClass("active");
});
$('.header-nav__menu-sub').on('click', function(){
	$(this).toggleClass("active");
	
	$(this).next(".header-nav__submenu").slideToggle();
});






$('.mv-slider').slick({
	dots: true,
	focusOnSelect: true,
	pauseOnHover:false,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: false,
	cssEase: 'linear',
});


$('.js-attorney-slider').slick({
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 835,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
$('.js-column-slider').slick({
	
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2000,
	dots: true,
	responsive: [
		{
			breakpoint: 835,
			settings: {
				slidesToShow: 2,
				
			}
		},
		{
			breakpoint: 640,
			settings: {
				centerMode: true,
				slidesToShow: 1,
			}
		}
	]
});


if ($(window).width() < 835) {
	var $status = $('.pagingInfo');
	var $slickElement = $('.js-store-sp');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.js-reason-sp').slick({
		centerMode: true,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 835,
				settings: {
					slidesToShow: 2,
					initialSlide: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					initialSlide: 0,
				}
			}
		]
	});

	$('.js-column-slider02').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
			{
				breakpoint: 835,
				settings: {
					slidesToShow: 2,
					
				}
			},
			{
				breakpoint: 640,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			}
		]
	});
}



$(window).on("load",function(){
	$(".c-table").mCustomScrollbar({
		axis: "x", // horizontal scrollbar
		theme:"dark"
	});
});


// matchHeight
jQuery(function ($) {
	$('.business-reasons__list-item').matchHeight();
	$('.business-solution__list-ttl').matchHeight();
	$('.column-list .column-list__item .column-list__box').matchHeight();
	$(window).on("load resize", function () {
		$('.business-reasons__list-item').matchHeight();
		$('.column-list .column-list__item .column-list__box').matchHeight();
		$('.business-solution__list-ttl').matchHeight();
	});
});


$('.view-plan').click(function () {
	$(this).prev().toggleClass('is-show');
	$(this).toggleClass('is-hide');
});


$('.fee-faq__dt').click(function () {
	$(this).toggleClass('is-open');
	$(this).next().slideToggle();
})