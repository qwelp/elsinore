$(function () {
	dropdownMenu.init();
	footer.init();
	open.init();
	cooperationControl.init();
	modalCenter.init();
});

$(window).on('load',function() {
	indexSlider.init();
	indexCollection.init();
	indexCollection2.init();
	indexCollection3.init();
	indexNews.init();
	fancyboxItem.init();
	animateCollection.init();
	scrollTop.init();
});

$(window).resize(function(){
	footer.init();
});

$(window).scroll(function() {
	animateCollection.scroll();
	scrollTop.scroll();
});

var scrollTop = (function () {

	var arrowTopScroll = function () {
		var arrow = $("#js-top");
		if ($(window).scrollTop() > 400) {
			arrow.show();
		} else {
			arrow.hide();
		}
	};

	return {
		init: function () {
			$('body').on("click", "#js-top", function (e) {
				e.preventDefault();
				$("html, body").animate({scrollTop: $('body').offset().top}, 500);
			});
			arrowTopScroll();
		},
		scroll: function () {
			arrowTopScroll();
		}
	}
})();

var animateCollection = (function () {

	var move = function (id) {
		setTimeout(function () {
			var item = $(id).find('.animate__img').eq(3);
			if(item.not('.active')) {
				item.addClass('active');
			}
		}, 200);
		setTimeout(function () {
			var item = $(id).find('.animate__img').eq(4);
			if(item.not('.active')) {
				item.addClass('active');
			}
		}, 400);
		setTimeout(function () {
			var item = $(id).find('.animate__img').eq(5);
			if(item.not('.active')) {
				item.addClass('active');
				item = $(id).find('.animate__img').addClass('active');
			}
		}, 600);

	};

	return {
		init: function () {
			move('#collectionOne');
		},
		scroll: function () {
			if($(document).width() > 1000) {
				if ($(document).scrollTop() > 300) {
					move('#collectionOne');
				}

				if ($(document).scrollTop() > 350) {
					move('#collectionTwo');
				}

				if ($(document).scrollTop() > 700) {
					move('#collectionThree');
				}
			}
		}
	}
})();

var dropdownMenu = (function () {

	var go = function () {
		$('ul.nav li.dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});
	};

	return {
		init : function () {
			go();
		}
	}
})();

var modalCenter = (function () {

	var go = function () {
		function adjustModalMaxHeightAndPosition(){
			$('.modal').each(function(){
				if($(this).hasClass('in') === false){
					$(this).show();
				}
				var contentHeight = $(window).height() - 60;
				var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
				var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

				$(this).find('.modal-dialog').addClass('modal-dialog-center').css({

					'margin-top': function () {
						var mH = $(this).outerHeight();
						var wH = $(window).height();
						return (mH < wH ) ? -( mH * 0.5): -( wH * 0.5);
					},
					'margin-left': function () {
						return -($(this).outerWidth() / 2);
					}
				});
				if($(this).hasClass('in') === false){
					$(this).hide();
				}
			});
		}
		if ($(window).height() >= 320){
			$(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");
		}
	};

	return {
		init : function () {
			go();
		}
	}
})();

var fancyboxItem = (function () {

	var toggle = function () {
		$(".catalogItemInfoFoto__link").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	};

	return {
		init : function () {
			toggle();
		}
	}
})();

var cooperationControl = (function () {

	var toggle = function () {

		var
			body = $('body'),
			menu = body.find('.cooperationControl'),
			text = menu.find('.cooperationControl__hide-text'),
			menuItems = menu.find('.cooperationControl__item');

		if (menu.is('.hideLayer')) {
			menu.removeClass('hideLayer');
			text.text('Свернуть');
		} else {
			menu.addClass('hideLayer');
			text.text('Развернуть');
		}
	};

	return {
		init: function () {
			$('body').on('click', '#js-cooperationControl', function (e) {
				e.preventDefault();
				toggle();
			});
		}
	}
})();

var open = (function(){

	var layer = function (el) {
		var
			body = $('body'),
			layer = body.find('.catalogItemPanelCollapse'),
			urls = [];

		layer.hide();
		setTimeout(function () {
			body.find(el.attr('href')).fadeToggle();
		}, 100);
	};

	return {
		init: function(){
			$('body').on('click', '[data-toggle="open"]', function (e) {
				e.preventDefault();
				layer($(this));
			});
		}
	};
}());

var footer = (function(){

	var height = function () {
		var body = $('body'),
			footer = body.find('.footer'),
			footer_heigth = footer.find('.footer__layer').outerHeight(),
			wrapper__footer = body.find('.wrapper__footer');

		footer.css({
			"height": footer_heigth + "px",
			"margin-top": "-" + footer_heigth + "px"
		});
		wrapper__footer.css({
			"height": footer_heigth + "px",
		});
	};

	return {
		init: function(){
			height();


		}
	};
}());

var indexSlider = (function(){

	var view = function () {

		$('.indexSlider__items').owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			nav: true,
			responsive:{
				0:{
					items:1,
					navContainer: '.indexSlider__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				1345:{
					items:1,
					navContainer: '.indexSlider__nav',
					dotsContainer: '.indexSlider__dots',
					dots: true,
					nav: true,
					navText: ['<div class="icon-arrow-slider-left"></div>', '<div class="icon-arrow-slider-left"></div>']
				}
			}
		})
	};

	return {
		init: function(){
			view();
		}
	};
}());

var indexCollection = (function(){

	var view = function () {

		$('.indexCollection__items').owlCarousel({
			loop: true,
			margin: 0,
			items: 3,
			nav: true,
			responsive:{
				0:{
					items:1,
					navContainer: '.indexCollection__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				980:{
					items:3,
					navContainer: '.indexCollection__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				1345:{
					items:3,
					navContainer: '.indexCollection__nav',
					dots: false,
					nav: true,
					navText: ['<div class="icon-collection"></div>', '<div class="icon-collection"></div>']
				}
			}
		})
	};

	return {
		init: function(){
			view();
		}
	};
}());

var indexCollection2 = (function(){

	var view = function () {

		$('.indexCollection2__items').owlCarousel({
			loop: true,
			margin: 0,
			items: 3,
			nav: true,
			responsive:{
				0:{
					items:1,
					navContainer: '.indexCollection2__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				980:{
					items:3,
					navContainer: '.indexCollection2__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				1345:{
					items:3,
					navContainer: '.indexCollection2__nav',
					dots: false,
					nav: true,
					navText: ['<div class="icon-collection"></div>', '<div class="icon-collection"></div>']
				}
			}
		})
	};

	return {
		init: function(){
			view();
		}
	};
}());

var indexCollection3 = (function(){

	var view = function () {

		$('.indexCollection3__items').owlCarousel({
			loop: true,
			margin: 0,
			items: 3,
			nav: true,
			responsive:{
				0:{
					items:1,
					navContainer: '.indexCollection3__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				980:{
					items:3,
					navContainer: '.indexCollection3__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				1345:{
					items:3,
					navContainer: '.indexCollection3__nav',
					dots: false,
					nav: true,
					navText: ['<div class="icon-collection"></div>', '<div class="icon-collection"></div>']
				}
			}
		})
	};

	return {
		init: function(){
			view();
		}
	};
}());

var indexNews = (function(){

	var view = function () {

		$('.indexNews__items').owlCarousel({
			loop: true,
			margin: 30,
			items: 3,
			nav: true,
			responsive:{
				0:{
					items:1,
					navContainer: '.indexNews__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				980:{
					items:3,
					navContainer: '.indexNews__nav',
					dots: false,
					nav: true,
					navText: ['<div class="arrow-slider-mobile-left"></div>', '<div class="arrow-slider-mobile-right"></div>']
				},
				1345:{
					items:3,
					navContainer: '.indexNews__nav',
					dots: false,
					nav: true,
					navText: ['<div class="icon-arrow-slider-left"></div>', '<div class="icon-arrow-slider-left"></div>']
				}
			}
		})
	};

	return {
		init: function(){
			view();
		}
	};
}());