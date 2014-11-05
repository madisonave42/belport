$(function(){
	
	var originWidth;
	var listObj;
	
	var $prd = $('.prd');
	$prd.data('open', 'false');
	var isSlideOpen = false;
	
	$(window).on('load', function(){
		listObj = new listSwipeIos();
		originWidth = listObj.getUaSize();
	}).on('resize', function(){
		originWidth = listObj.resizeCheck( $prd, originWidth );
	});
	
	$prd.on('touchstart', function(e){
		isSlideOpen = listObj.swipeStart( e, $prd, isSlideOpen );
	});
	
	$prd.on('touchmove', function(e){
		isSlideOpen = listObj.swipeMove(e, $(this));
	});
	
	$prd.on('touchend', function(e){
		listObj.swipeEnd( $(this) );
	});
	
});
