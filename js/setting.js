//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	$("#header").toggleClass("active");
	$(".header-nav").toggleClass("active");
});
$('.header-bg').on('click', function(){
	$(".js-mobile").removeClass("js-mobile--close");
	$("html").removeClass("js-locked");
	$("#header").removeClass("active");
	$(".header-nav").removeClass("active");
});
$('.header-nav__menu-sub').on('click', function(){
	$(this).toggleClass("active");
	
	$(this).next(".header-nav__submenu").slideToggle();
});

//resize slider load page
var window_type;
var $window = $(window);
if ($window.width() <= 834) {
    window_type = 'sp';
} else {
    window_type = 'pc';
}
$(window).resize(function() {
    if($window.width() <= 834){
        if( (window_type != 'sp') ){
            location.reload();
        }
    }else{
        if(window_type != 'pc'){
            location.reload();
        }
    }
});



$('.mv-slider').slick({
	dots: true,
	focusOnSelect: true,
	pauseOnHover:false,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 5000,
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
}



// $(window).on("load",function(){
// 	$(".c-table").mCustomScrollbar({
// 		axis: "x", // horizontal scrollbar
// 		theme:"dark"
// 	});
// });


// $('.c-table table').onscroll = function() {
// 	var scroll = document.body.scrollLeft || document.documentElement.scrollLeft;
// 	var total = document.documentElement.scrollWidth - document.documentElement.clientWidth;
// 	document.getElementById("progressBar").style.width = ((scroll/total)*100) + "%";
// };
// window.onwheel = function(e) {
// 	var speed = parseInt(document.documentElement.clientWidth/5);
//   window.scrollBy(Math.sign(e.deltaY)*speed,0);
// };

$('.c-table').on('scroll', function () {
	var scroll = $(this).scrollLeft();
	var total = $(this).find('table').outerWidth() - $(window).width() + 30;
	var percent = (20 + (scroll / total) * 80) + "%";
	$(this).next().find('.progressBar').css('width', percent);
})

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


$(function () {
	var position1 = $('.view-plan').offset().top - 100;
	$('.view-plan').click(function () {
		$(this).prev().toggleClass('is-show');
		$(this).toggleClass('is-hide');
		$('.view-plan.is-hide').click(function () {
			$(window).scrollTop(position1);
		});
	});
	
	
	$('.fee-faq__dt').click(function () {
		$(this).toggleClass('is-open');
		$(this).next().slideToggle();
	})
	
	$('.js-switch-option input').on('change',function () {
		let val_input = $(this).val();
		console.log(val_input);
		if (val_input == '採用について' || val_input == 'その他') {
			$('.option-switch').hide();
		} else {
			$('.option-switch').show();
		}
	})
})

$(function () {
	var headerHeight = $('#header').outerHeight();
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}
	
	$('.scroll-page').click(function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop: position}, 1000);
	});
});