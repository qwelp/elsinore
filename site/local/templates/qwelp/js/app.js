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
		$(".galleryItem__link").fancybox({
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuXHRkcm9wZG93bk1lbnUuaW5pdCgpO1xuXHRmb290ZXIuaW5pdCgpO1xuXHRvcGVuLmluaXQoKTtcblx0Y29vcGVyYXRpb25Db250cm9sLmluaXQoKTtcblx0bW9kYWxDZW50ZXIuaW5pdCgpO1xufSk7XG5cbiQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKSB7XG5cdGluZGV4U2xpZGVyLmluaXQoKTtcblx0aW5kZXhDb2xsZWN0aW9uLmluaXQoKTtcblx0aW5kZXhDb2xsZWN0aW9uMi5pbml0KCk7XG5cdGluZGV4Q29sbGVjdGlvbjMuaW5pdCgpO1xuXHRpbmRleE5ld3MuaW5pdCgpO1xuXHRmYW5jeWJveEl0ZW0uaW5pdCgpO1xuXHRhbmltYXRlQ29sbGVjdGlvbi5pbml0KCk7XG5cdHNjcm9sbFRvcC5pbml0KCk7XG59KTtcblxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuXHRmb290ZXIuaW5pdCgpO1xufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdGFuaW1hdGVDb2xsZWN0aW9uLnNjcm9sbCgpO1xuXHRzY3JvbGxUb3Auc2Nyb2xsKCk7XG59KTtcblxudmFyIHNjcm9sbFRvcCA9IChmdW5jdGlvbiAoKSB7XG5cblx0dmFyIGFycm93VG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhcnJvdyA9ICQoXCIjanMtdG9wXCIpO1xuXHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA0MDApIHtcblx0XHRcdGFycm93LnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJyb3cuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJ2JvZHknKS5vbihcImNsaWNrXCIsIFwiI2pzLXRvcFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0XHRcdGFycm93VG9wU2Nyb2xsKCk7XG5cdFx0fSxcblx0XHRzY3JvbGw6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGFycm93VG9wU2Nyb2xsKCk7XG5cdFx0fVxuXHR9XG59KSgpO1xuXG52YXIgYW5pbWF0ZUNvbGxlY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBtb3ZlID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgaXRlbSA9ICQoaWQpLmZpbmQoJy5hbmltYXRlX19pbWcnKS5lcSgzKTtcblx0XHRcdGlmKGl0ZW0ubm90KCcuYWN0aXZlJykpIHtcblx0XHRcdFx0aXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0fSwgMjAwKTtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBpdGVtID0gJChpZCkuZmluZCgnLmFuaW1hdGVfX2ltZycpLmVxKDQpO1xuXHRcdFx0aWYoaXRlbS5ub3QoJy5hY3RpdmUnKSkge1xuXHRcdFx0XHRpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9LCA0MDApO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGl0ZW0gPSAkKGlkKS5maW5kKCcuYW5pbWF0ZV9faW1nJykuZXEoNSk7XG5cdFx0XHRpZihpdGVtLm5vdCgnLmFjdGl2ZScpKSB7XG5cdFx0XHRcdGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRpdGVtID0gJChpZCkuZmluZCgnLmFuaW1hdGVfX2ltZycpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9LCA2MDApO1xuXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRtb3ZlKCcjY29sbGVjdGlvbk9uZScpO1xuXHRcdH0sXG5cdFx0c2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZigkKGRvY3VtZW50KS53aWR0aCgpID4gMTAwMCkge1xuXHRcdFx0XHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAzMDApIHtcblx0XHRcdFx0XHRtb3ZlKCcjY29sbGVjdGlvbk9uZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gMzUwKSB7XG5cdFx0XHRcdFx0bW92ZSgnI2NvbGxlY3Rpb25Ud28nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDcwMCkge1xuXHRcdFx0XHRcdG1vdmUoJyNjb2xsZWN0aW9uVGhyZWUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkoKTtcblxudmFyIGRyb3Bkb3duTWVudSA9IChmdW5jdGlvbiAoKSB7XG5cblx0dmFyIGdvID0gZnVuY3Rpb24gKCkge1xuXHRcdCQoJ3VsLm5hdiBsaS5kcm9wZG93bicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuZGVsYXkoMjAwKS5mYWRlSW4oNTAwKTtcblx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLmRlbGF5KDIwMCkuZmFkZU91dCg1MDApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0aW5pdCA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGdvKCk7XG5cdFx0fVxuXHR9XG59KSgpO1xuXG52YXIgbW9kYWxDZW50ZXIgPSAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBnbyA9IGZ1bmN0aW9uICgpIHtcblx0XHRmdW5jdGlvbiBhZGp1c3RNb2RhbE1heEhlaWdodEFuZFBvc2l0aW9uKCl7XG5cdFx0XHQkKCcubW9kYWwnKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ2luJykgPT09IGZhbHNlKXtcblx0XHRcdFx0XHQkKHRoaXMpLnNob3coKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY29udGVudEhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDYwO1xuXHRcdFx0XHR2YXIgaGVhZGVySGVpZ2h0ID0gJCh0aGlzKS5maW5kKCcubW9kYWwtaGVhZGVyJykub3V0ZXJIZWlnaHQoKSB8fCAyO1xuXHRcdFx0XHR2YXIgZm9vdGVySGVpZ2h0ID0gJCh0aGlzKS5maW5kKCcubW9kYWwtZm9vdGVyJykub3V0ZXJIZWlnaHQoKSB8fCAyO1xuXG5cdFx0XHRcdCQodGhpcykuZmluZCgnLm1vZGFsLWRpYWxvZycpLmFkZENsYXNzKCdtb2RhbC1kaWFsb2ctY2VudGVyJykuY3NzKHtcblxuXHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIG1IID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuXHRcdFx0XHRcdFx0dmFyIHdIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIChtSCA8IHdIICkgPyAtKCBtSCAqIDAuNSk6IC0oIHdIICogMC41KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtKCQodGhpcykub3V0ZXJXaWR0aCgpIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoJCh0aGlzKS5oYXNDbGFzcygnaW4nKSA9PT0gZmFsc2Upe1xuXHRcdFx0XHRcdCQodGhpcykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKCQod2luZG93KS5oZWlnaHQoKSA+PSAzMjApe1xuXHRcdFx0JCh3aW5kb3cpLnJlc2l6ZShhZGp1c3RNb2RhbE1heEhlaWdodEFuZFBvc2l0aW9uKS50cmlnZ2VyKFwicmVzaXplXCIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRnbygpO1xuXHRcdH1cblx0fVxufSkoKTtcblxudmFyIGZhbmN5Ym94SXRlbSA9IChmdW5jdGlvbiAoKSB7XG5cblx0dmFyIHRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHQkKFwiLmNhdGFsb2dJdGVtSW5mb0ZvdG9fX2xpbmtcIikuZmFuY3lib3goe1xuXHRcdFx0b3BlbkVmZmVjdFx0OiAnbm9uZScsXG5cdFx0XHRjbG9zZUVmZmVjdFx0OiAnbm9uZSdcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0b2dnbGUoKTtcblx0XHR9XG5cdH1cbn0pKCk7XG5cbnZhciBjb29wZXJhdGlvbkNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuXG5cdHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXJcblx0XHRcdGJvZHkgPSAkKCdib2R5JyksXG5cdFx0XHRtZW51ID0gYm9keS5maW5kKCcuY29vcGVyYXRpb25Db250cm9sJyksXG5cdFx0XHR0ZXh0ID0gbWVudS5maW5kKCcuY29vcGVyYXRpb25Db250cm9sX19oaWRlLXRleHQnKSxcblx0XHRcdG1lbnVJdGVtcyA9IG1lbnUuZmluZCgnLmNvb3BlcmF0aW9uQ29udHJvbF9faXRlbScpO1xuXG5cdFx0aWYgKG1lbnUuaXMoJy5oaWRlTGF5ZXInKSkge1xuXHRcdFx0bWVudS5yZW1vdmVDbGFzcygnaGlkZUxheWVyJyk7XG5cdFx0XHR0ZXh0LnRleHQoJ9Ch0LLQtdGA0L3Rg9GC0YwnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudS5hZGRDbGFzcygnaGlkZUxheWVyJyk7XG5cdFx0XHR0ZXh0LnRleHQoJ9Cg0LDQt9Cy0LXRgNC90YPRgtGMJyk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnYm9keScpLm9uKCdjbGljaycsICcjanMtY29vcGVyYXRpb25Db250cm9sJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0b2dnbGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSkoKTtcblxudmFyIG9wZW4gPSAoZnVuY3Rpb24oKXtcblxuXHR2YXIgbGF5ZXIgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHR2YXJcblx0XHRcdGJvZHkgPSAkKCdib2R5JyksXG5cdFx0XHRsYXllciA9IGJvZHkuZmluZCgnLmNhdGFsb2dJdGVtUGFuZWxDb2xsYXBzZScpLFxuXHRcdFx0dXJscyA9IFtdO1xuXG5cdFx0bGF5ZXIuaGlkZSgpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ym9keS5maW5kKGVsLmF0dHIoJ2hyZWYnKSkuZmFkZVRvZ2dsZSgpO1xuXHRcdH0sIDEwMCk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbigpe1xuXHRcdFx0JCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJvcGVuXCJdJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRsYXllcigkKHRoaXMpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn0oKSk7XG5cbnZhciBmb290ZXIgPSAoZnVuY3Rpb24oKXtcblxuXHR2YXIgaGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBib2R5ID0gJCgnYm9keScpLFxuXHRcdFx0Zm9vdGVyID0gYm9keS5maW5kKCcuZm9vdGVyJyksXG5cdFx0XHRmb290ZXJfaGVpZ3RoID0gZm9vdGVyLmZpbmQoJy5mb290ZXJfX2xheWVyJykub3V0ZXJIZWlnaHQoKSxcblx0XHRcdHdyYXBwZXJfX2Zvb3RlciA9IGJvZHkuZmluZCgnLndyYXBwZXJfX2Zvb3RlcicpO1xuXG5cdFx0Zm9vdGVyLmNzcyh7XG5cdFx0XHRcImhlaWdodFwiOiBmb290ZXJfaGVpZ3RoICsgXCJweFwiLFxuXHRcdFx0XCJtYXJnaW4tdG9wXCI6IFwiLVwiICsgZm9vdGVyX2hlaWd0aCArIFwicHhcIlxuXHRcdH0pO1xuXHRcdHdyYXBwZXJfX2Zvb3Rlci5jc3Moe1xuXHRcdFx0XCJoZWlnaHRcIjogZm9vdGVyX2hlaWd0aCArIFwicHhcIixcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRoZWlnaHQoKTtcblxuXG5cdFx0fVxuXHR9O1xufSgpKTtcblxudmFyIGluZGV4U2xpZGVyID0gKGZ1bmN0aW9uKCl7XG5cblx0dmFyIHZpZXcgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHQkKCcuaW5kZXhTbGlkZXJfX2l0ZW1zJykub3dsQ2Fyb3VzZWwoe1xuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdG1hcmdpbjogMCxcblx0XHRcdGl0ZW1zOiAxLFxuXHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0cmVzcG9uc2l2ZTp7XG5cdFx0XHRcdDA6e1xuXHRcdFx0XHRcdGl0ZW1zOjEsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4U2xpZGVyX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLWxlZnRcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtcmlnaHRcIj48L2Rpdj4nXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQxMzQ1Ontcblx0XHRcdFx0XHRpdGVtczoxLFxuXHRcdFx0XHRcdG5hdkNvbnRhaW5lcjogJy5pbmRleFNsaWRlcl9fbmF2Jyxcblx0XHRcdFx0XHRkb3RzQ29udGFpbmVyOiAnLmluZGV4U2xpZGVyX19kb3RzJyxcblx0XHRcdFx0XHRkb3RzOiB0cnVlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJpY29uLWFycm93LXNsaWRlci1sZWZ0XCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJpY29uLWFycm93LXNsaWRlci1sZWZ0XCI+PC9kaXY+J11cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmlldygpO1xuXHRcdH1cblx0fTtcbn0oKSk7XG5cbnZhciBpbmRleENvbGxlY3Rpb24gPSAoZnVuY3Rpb24oKXtcblxuXHR2YXIgdmlldyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdCQoJy5pbmRleENvbGxlY3Rpb25fX2l0ZW1zJykub3dsQ2Fyb3VzZWwoe1xuXHRcdFx0bG9vcDogdHJ1ZSxcblx0XHRcdG1hcmdpbjogMCxcblx0XHRcdGl0ZW1zOiAzLFxuXHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0cmVzcG9uc2l2ZTp7XG5cdFx0XHRcdDA6e1xuXHRcdFx0XHRcdGl0ZW1zOjEsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4Q29sbGVjdGlvbl9fbmF2Jyxcblx0XHRcdFx0XHRkb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdFx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiYXJyb3ctc2xpZGVyLW1vYmlsZS1sZWZ0XCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLXJpZ2h0XCI+PC9kaXY+J11cblx0XHRcdFx0fSxcblx0XHRcdFx0OTgwOntcblx0XHRcdFx0XHRpdGVtczozLFxuXHRcdFx0XHRcdG5hdkNvbnRhaW5lcjogJy5pbmRleENvbGxlY3Rpb25fX25hdicsXG5cdFx0XHRcdFx0ZG90czogZmFsc2UsXG5cdFx0XHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0XHRcdG5hdlRleHQ6IFsnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtbGVmdFwiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiYXJyb3ctc2xpZGVyLW1vYmlsZS1yaWdodFwiPjwvZGl2PiddXG5cdFx0XHRcdH0sXG5cdFx0XHRcdDEzNDU6e1xuXHRcdFx0XHRcdGl0ZW1zOjMsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4Q29sbGVjdGlvbl9fbmF2Jyxcblx0XHRcdFx0XHRkb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdFx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiaWNvbi1jb2xsZWN0aW9uXCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJpY29uLWNvbGxlY3Rpb25cIj48L2Rpdj4nXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2aWV3KCk7XG5cdFx0fVxuXHR9O1xufSgpKTtcblxudmFyIGluZGV4Q29sbGVjdGlvbjIgPSAoZnVuY3Rpb24oKXtcblxuXHR2YXIgdmlldyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdCQoJy5pbmRleENvbGxlY3Rpb24yX19pdGVtcycpLm93bENhcm91c2VsKHtcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRpdGVtczogMyxcblx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdHJlc3BvbnNpdmU6e1xuXHRcdFx0XHQwOntcblx0XHRcdFx0XHRpdGVtczoxLFxuXHRcdFx0XHRcdG5hdkNvbnRhaW5lcjogJy5pbmRleENvbGxlY3Rpb24yX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLWxlZnRcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtcmlnaHRcIj48L2Rpdj4nXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQ5ODA6e1xuXHRcdFx0XHRcdGl0ZW1zOjMsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4Q29sbGVjdGlvbjJfX25hdicsXG5cdFx0XHRcdFx0ZG90czogZmFsc2UsXG5cdFx0XHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0XHRcdG5hdlRleHQ6IFsnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtbGVmdFwiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiYXJyb3ctc2xpZGVyLW1vYmlsZS1yaWdodFwiPjwvZGl2PiddXG5cdFx0XHRcdH0sXG5cdFx0XHRcdDEzNDU6e1xuXHRcdFx0XHRcdGl0ZW1zOjMsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4Q29sbGVjdGlvbjJfX25hdicsXG5cdFx0XHRcdFx0ZG90czogZmFsc2UsXG5cdFx0XHRcdFx0bmF2OiB0cnVlLFxuXHRcdFx0XHRcdG5hdlRleHQ6IFsnPGRpdiBjbGFzcz1cImljb24tY29sbGVjdGlvblwiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiaWNvbi1jb2xsZWN0aW9uXCI+PC9kaXY+J11cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmlldygpO1xuXHRcdH1cblx0fTtcbn0oKSk7XG5cbnZhciBpbmRleENvbGxlY3Rpb24zID0gKGZ1bmN0aW9uKCl7XG5cblx0dmFyIHZpZXcgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHQkKCcuaW5kZXhDb2xsZWN0aW9uM19faXRlbXMnKS5vd2xDYXJvdXNlbCh7XG5cdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0aXRlbXM6IDMsXG5cdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRyZXNwb25zaXZlOntcblx0XHRcdFx0MDp7XG5cdFx0XHRcdFx0aXRlbXM6MSxcblx0XHRcdFx0XHRuYXZDb250YWluZXI6ICcuaW5kZXhDb2xsZWN0aW9uM19fbmF2Jyxcblx0XHRcdFx0XHRkb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdFx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiYXJyb3ctc2xpZGVyLW1vYmlsZS1sZWZ0XCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLXJpZ2h0XCI+PC9kaXY+J11cblx0XHRcdFx0fSxcblx0XHRcdFx0OTgwOntcblx0XHRcdFx0XHRpdGVtczozLFxuXHRcdFx0XHRcdG5hdkNvbnRhaW5lcjogJy5pbmRleENvbGxlY3Rpb24zX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLWxlZnRcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtcmlnaHRcIj48L2Rpdj4nXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQxMzQ1Ontcblx0XHRcdFx0XHRpdGVtczozLFxuXHRcdFx0XHRcdG5hdkNvbnRhaW5lcjogJy5pbmRleENvbGxlY3Rpb24zX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJpY29uLWNvbGxlY3Rpb25cIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImljb24tY29sbGVjdGlvblwiPjwvZGl2PiddXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKXtcblx0XHRcdHZpZXcoKTtcblx0XHR9XG5cdH07XG59KCkpO1xuXG52YXIgaW5kZXhOZXdzID0gKGZ1bmN0aW9uKCl7XG5cblx0dmFyIHZpZXcgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHQkKCcuaW5kZXhOZXdzX19pdGVtcycpLm93bENhcm91c2VsKHtcblx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRtYXJnaW46IDMwLFxuXHRcdFx0aXRlbXM6IDMsXG5cdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRyZXNwb25zaXZlOntcblx0XHRcdFx0MDp7XG5cdFx0XHRcdFx0aXRlbXM6MSxcblx0XHRcdFx0XHRuYXZDb250YWluZXI6ICcuaW5kZXhOZXdzX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLWxlZnRcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImFycm93LXNsaWRlci1tb2JpbGUtcmlnaHRcIj48L2Rpdj4nXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQ5ODA6e1xuXHRcdFx0XHRcdGl0ZW1zOjMsXG5cdFx0XHRcdFx0bmF2Q29udGFpbmVyOiAnLmluZGV4TmV3c19fbmF2Jyxcblx0XHRcdFx0XHRkb3RzOiBmYWxzZSxcblx0XHRcdFx0XHRuYXY6IHRydWUsXG5cdFx0XHRcdFx0bmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwiYXJyb3ctc2xpZGVyLW1vYmlsZS1sZWZ0XCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJhcnJvdy1zbGlkZXItbW9iaWxlLXJpZ2h0XCI+PC9kaXY+J11cblx0XHRcdFx0fSxcblx0XHRcdFx0MTM0NTp7XG5cdFx0XHRcdFx0aXRlbXM6Myxcblx0XHRcdFx0XHRuYXZDb250YWluZXI6ICcuaW5kZXhOZXdzX19uYXYnLFxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0XHRcdG5hdjogdHJ1ZSxcblx0XHRcdFx0XHRuYXZUZXh0OiBbJzxkaXYgY2xhc3M9XCJpY29uLWFycm93LXNsaWRlci1sZWZ0XCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJpY29uLWFycm93LXNsaWRlci1sZWZ0XCI+PC9kaXY+J11cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbigpe1xuXHRcdFx0dmlldygpO1xuXHRcdH1cblx0fTtcbn0oKSk7Il19
