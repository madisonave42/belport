$(function(){
	
	$(window).on('load', function(){
		$('.ui-loader').remove();
	});
	
	$(window).on('resize', function(){
		$('.prd').each(function(i){
			if( $(this).position().left < 0 ){
				$(this).css({left:-$(this).width()/4});
			}
		});
	});
	
	(function(){
		
		var oldPosition;
		var oldLeft;
		var oldTop;
		var swipeLeft;
		var slope = [];
		var distanceX = [];
		var distanceY = [];
		
		$('.prd').on('touchstart', function(e){
			oldLeft = originalLeft = e.originalEvent.touches[0].clientX;
			oldTop = originalTop = e.originalEvent.touches[0].clientY;
		});
		
		$('.prd').on('touchmove', function(e){
			var i=0;
			distanceX[i] = oldLeft - e.originalEvent.touches[0].clientX;
			distanceY[i] = oldTop - e.originalEvent.touches[0].clientY;
			oldLeft = e.originalEvent.touches[0].clientX;
			oldTop = e.originalEvent.touches[0].clientY;
			slope[i] = distanceY[i] / distanceX[i];
			if( Math.abs(slope[i]) < 0.25 ) {
				e.preventDefault();
				if( distanceX < 0 ){swipeLeft = true;}
				else if(distanceX > 0) {swipeLeft = false;}
			}
			console.log(slope[i]);
			i++;
		});
		
		$('.prd').on('touchend', function(e){
			if( Math.abs(slope) < 0.25 ) {
				if(!swipeLeft){
					$(this).parent().siblings().find('.prd').stop().animate({left:0}, 300);
					$(this).stop().animate({left:-$(this).width()/4}, 300);
				} else {
					$(this).stop().animate({left:0}, 300);	
				}
			}
		});
	
	})();
	
	
	
});
