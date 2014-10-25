$(function(){
	
	$('.info a').on('click', function(e) {
		$('.layer-pop').hide();
		$($(this).attr('href')).show();
		$(document).scrollTop(0,0);
		e.preventDefault();
	});
	
	$('.btn-close-pop').on('click', function(e) {
		$('.layer-pop').hide();
		e.preventDefault();
	});
	
});
