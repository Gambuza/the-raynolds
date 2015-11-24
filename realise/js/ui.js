jQuery(document).ready(function(e){var o=e(".owl-carousel");o.owlCarousel({loop:!0,nav:!1,dots:!1,margin:10,responsive:{0:{items:1},600:{items:3},960:{items:5},1200:{items:6}}}),o.on("mousewheel",".owl-stage",function(e){o.trigger(e.deltaY>0?"next.owl":"prev.owl"),e.preventDefault()}),jQuery(document).ready(function(){jQuery("#scrollup i").mouseover(function(){jQuery(this).animate({opacity:.65},100)}).mouseout(function(){jQuery(this).animate({opacity:1},100)}).click(function(){return window.scroll(0,0),!1}),jQuery(window).scroll(function(){jQuery(document).scrollTop()>0?jQuery("#scrollup").fadeIn("fast"):jQuery("#scrollup").fadeOut("fast")})})});	$(function() {
    var caption = $('.accordeon-caption'),
        content = $('.accordeon-content').hide();         
    caption.click(function(e) {
        e.preventDefault();
        content.not($(this).next(content)).removeClass('active').slideUp(600);
        $(this).next(content).toggleClass('active').slideToggle(600);
    });
});
$(function() {
			var pull 		= $('#pull');
				menu 		= $('nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
$(document).ready(function() {
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.8);
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).fadeIn(2000);
	});
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
});
