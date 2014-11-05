$(function(){
	
	(function(){

		var oldWidth;
		
		$(window).on('load', function(){
			oldWidth = $(window).width();
		});

		$(window).on('resize', function(){
			
			var deltaW = oldWidth - $(window).width();
			oldWidth = $(window).width();
			
			if( deltaW != 0 ){
				$('.prd').each(function(i){
					if( $(this).position().left < 0 ){
						$(this).css({left:-$(this).width()/4});
					}
				});
			}
		});	
	})();
	(function(){
		
		var $prd = $('.prd');
		$prd.data('open', 'false');

		var distanceX = [];
		var distanceY = [];
		var oldLeft = [];
		var oldTop = [];
		var rad = [];
		var i;
		
		var isSlideOpen = false;
		
		$('.prd').on('touchstart', function(e){
			
			distanceX = [];
			distanceY = [];
			oldLeft = [];
			oldTop = [];
			
			rad = [];
			
			i=1;
			
			if( isSlideOpen == true ){
				$prd.stop().animate({left:0}, 300, function(){
					isSlideOpen = false;
				});
				$prd.data('open', 'false');
			} else {
				oldLeft[0] = e.originalEvent.touches[0].clientX;
				oldTop[0] = e.originalEvent.touches[0].clientY;				
			}
			
		});
		
		$('.prd').on('touchmove', function(e){
			
			if(isSlideOpen == true){
				e.preventDefault();
			}		
			
			distanceX[i] = e.originalEvent.touches[0].clientX - oldLeft[i-1];
			distanceY[i] = e.originalEvent.touches[0].clientY - oldTop[i-1];
			oldLeft[i] = e.originalEvent.touches[0].clientX;
			oldTop[i] = e.originalEvent.touches[0].clientY;
			
			rad[i] = Math.atan2(distanceX[i], distanceY[i]) * 180 / Math.PI;
			if( rad[i] < 0.0 ){rad[i] += 360;}
			
			if( rad[1] > 225 && rad[1] < 315 ) {
				e.preventDefault();
				
				if( rad[i] > 225 && rad[i] < 315 ){
					$(this).css({left:'+=' + distanceX[i]}, 0);
					$(this).data('open', 'true');
					isSlideOpen = true;
				} else if( rad[i] > 45 && rad[i] < 135 ){
					if($(this).position().left > -5){
						$(this).stop().animate({left:0}, 100);
						return;
					}
					$(this).css({left:'+=' + distanceX[i]}, 0);
					$(this).data('open', 'false');
					isSlideOpen = false;
				}
			}
			
			i++;
		});
		
		$('.prd').on('touchend', function(e){
			
			if( $(this).data('open') == 'true' ){
				$(this).stop().animate({left:-$(this).width()/4}, 300);
			} else if( $(this).data('open') == 'false' ){
				$(this).stop().animate({left:0},300);
			}
			
		});
	
	})();
	
	
	
});
