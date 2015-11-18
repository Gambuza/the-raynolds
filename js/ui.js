jQuery(document).ready(function($) {
			var owl = $('.owl-carousel');
		owl.owlCarousel({
			loop:true,
			nav:false,
			dots:false,
			margin:10,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},            
				960:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY>0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
		function kodimg(id)
		{
			document.getElementById(id).className = 'moved';
		}
		jQuery( document ).ready(function() {
			jQuery('#scrollup i').mouseover( function(){
				jQuery( this ).animate({opacity: 0.65},100);
			}).mouseout( function(){
				jQuery( this ).animate({opacity: 1},100);
			}).click( function(){
				window.scroll(0 ,0); 
				return false;
			});

			jQuery(window).scroll(function(){
				if ( jQuery(document).scrollTop() > 0 ) {
					jQuery('#scrollup').fadeIn('fast');
				} else {
					jQuery('#scrollup').fadeOut('fast');
				}
			});
		});
});