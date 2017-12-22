$(function () {

	$('ul.nav li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

	footer.init();
});

$(window).resize(function(){
	footer.init();
});

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