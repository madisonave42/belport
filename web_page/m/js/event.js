$(function(){
	
	$(window).on('load', function(){
		$('.ui-loader').remove();
	});
	
	$('.prd').on('swipeleft', function(e){
		e.preventDefault();
		$(this).stop().animate({left:-$(this).width()/4}, 300);
	});

	$('.prd').on('swiperight', function(e){
		e.preventDefault();
		$(this).stop().animate({left:0}, 300);
	});
	
});
