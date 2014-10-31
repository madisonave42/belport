/**
 * rBanner Class
 * @namespace rBanner Class
 * 
 */
(function(){
	
	listSwipeIos = function(){
		
		this.distanceX = []; // distance x : x1-x2
		this.distanceY = []; // distance y : y1-y2
		this.oldLeft = []; // before coord x
		this.oldTop = [];  // before coord y
		
		this.rad = []; // radian to degree of swipe
		
		this.i; // array number
		
	};
	
	listSwipeIos.prototype = {
		
		constructor : listSwipeIos,
		
		getUaSize : function(){
			
			return $(window).width();
			
		},
		
		resizeCheck : function($swpObj, originWidth){
			
			// variation width of window(user agent)
			var deltaWidth = originWidth - $(window).width();
			
			if(deltaWidth != 0){
				$swpObj.each(function(i){
					if($swpObj.eq(i).position().left != 0){
						$swpObj.eq(i).css({left:-$(this).width/4});
					}
				});
			}
			
			return $(window).width();
			
		},
		
		swipeStart : function(e, $swpObj, isSlideOpen){

			// init when swipe start			
			this.distanceX = [];
			this.distanceY = [];
			this.oldLeft = [];
			this.oldTop = [];
			this.rad = [];
			this.i=1;
			
			if( isSlideOpen == true ){
				$swpObj.stop().animate({left:0}, 300, function(){	return false; });
				$swpObj.data('open', 'false');
			} else {
				this.oldLeft[0] = e.originalEvent.touches[0].clientX;
				this.oldTop[0] = e.originalEvent.touches[0].clientY;				
			}
		
		},
		
		swipeMove : function(e, $swpObj, isSlideOpen){
			
			if(isSlideOpen == true){
				e.preventDefault();
			}
			
			this.distanceX[this.i] = e.originalEvent.touches[0].clientX - this.oldLeft[this.i-1];
			this.distanceY[this.i] = e.originalEvent.touches[0].clientY - this.oldTop[this.i-1];
			this.oldLeft[this.i] = e.originalEvent.touches[0].clientX;
			this.oldTop[this.i] = e.originalEvent.touches[0].clientY;
			
			this.rad[this.i] = Math.atan2(this.distanceX[this.i], this.distanceY[this.i]) * 180 / Math.PI;
			
			if( this.rad[this.i] < 0.0 ){this.rad[this.i] += 360;}
			
			if( this.rad[1] > 225 && this.rad[1] < 315 ) {
				e.preventDefault();
				
				if( this.rad[this.i] > 225 && this.rad[this.i] < 315 ){
					
					$swpObj.css({left:'+=' + this.distanceX[this.i]}, 0);
					$swpObj.data('open', 'true');
					
					isSlideOpen = true;
					
				} else if( this.rad[this.i] > 45 && this.rad[this.i] < 135 ){
					
					if( $swpObj.position().left > -5){
						$swpObj.stop().animate({left:0}, 100);
						return;
					}
					
					$swpObj.css({left:'+=' + this.distanceX[this.i]}, 0);
					$swpObj.data('open', 'false');
					
					isSlideOpen = false;
				}

			}
			
			this.i++;
			
			return isSlideOpen;
			
		},
		
		swipeEnd : function( $swpObj ){
			if( $swpObj.data('open') == 'true' ){
				$swpObj.stop().animate({left:-$swpObj.width()/4}, 300);
			} else if( $swpObj.data('open') == 'false' ){
				$swpObj.stop().animate({left:0},300);
			}
		}
		
	};
	
})();
