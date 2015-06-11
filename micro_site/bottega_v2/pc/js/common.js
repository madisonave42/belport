/*사업자번호*/
function onopen(){
	var url = "http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2208860804";
	window.open(url, "communicationViewPopup", "width=750, height=700;");
}

function onopen2(){
	var url = "http://www.allthegate.com/hyosung/paysafe/escrow_check.jsp?service_id=gdapopchoice&biz_no=2208860804";
	window.open(url, "communicationViewPopup", "width=406, height=320;");
}

var particleMotion = function( $particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY ){

	var pId = 0;

	this.start = function(){

		interval($particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY);
		repeat();

	};

	var repeat = function(){
		pId = setInterval(function(){interval($particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY);}, 5000);
	};

	var interval = function( $particle, rangeBeginX, rangeBeginY, rangeEndX, rangeEndY ){
		var targetX = Math.floor( Math.random() * ( rangeEndX - rangeBeginX ) ) + rangeBeginX;
		var targetY = Math.floor( Math.random() * ( rangeEndY - rangeBeginY ) ) + rangeBeginY;
		var currentX = $particle.position().left;
		var currentY = $particle.position().top;

		randomTween($particle, targetX, targetY, currentX, currentY);
	};

	var randomTween = function( $particle, targetX, targetY, currentX, currentY ){
		$particle.tween({
			left:{
				start: currentX,
				stop: targetX,
				time: 0,
				units: 'px',
				duration: 5,
				effect: 'linear'
			},
			top:{
				start: currentY,
				stop: targetY,
				time: 0,
				units: 'px',
				duration: 5,
				effect: 'linear'
			},
		});

		$.play();
	};

};

$(function() {

	$('img[usemap]').rwdImageMaps();

	$(window).on('load resize', function(){
		var particle = [],
				winWidth = $(window).width(),
				bx = [],
				by = [],
				ex = [],
				ey = [],
				pObj = $('.particle');

		for(i=1;i<=pObj.length/2;i++){

			bx[i] = Math.random() * 100 + 200,
			by[i] = Math.random() * 100 + 200,
			ex[i] = Math.random() * winWidth,
			ey[i] = Math.random() * 2000;

			particle[i] = new particleMotion( $('.particle'+ i), bx[i], by[i], ex[i], ey[i] );
			particle[i].start();
		}

		for(i=pObj.length/2+1; i<=pObj.length;i++){

			bx[i] = Math.random() * 300 + 500,
			by[i] = Math.random() * 100 + 100,
			ex[i] = Math.random() * winWidth,
			ey[i] = Math.random() * 2000;

			particle[i] = new particleMotion( $('.particle'+ i), bx[i], by[i], ex[i], ey[i] );
			particle[i].start();
		}

	});

	$('.show_wall').on({

		mouseenter : function(){
			$(this).find('.over').stop().fadeIn(300);
		},

		mouseleave : function(){
			$(this).find('.over').stop().fadeOut(300);
		},

		click : function(e){
			e.preventDefault();

			var index = $('.show_wall').index( this );

			var $frame = '<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-id') + '?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen class="movie-frame"></iframe>';
			$('.botte2-daily-movie-frame').html( $frame );
			$('.botte2-daily-movie-frame .movie-frame').css({height:$(window).width() * 0.5625});
			$('html, body').delay(1000).animate({scrollTop: $('.botte2-daily-movie-frame').offset().top});

			$('.slidesjs-pagination-item').eq(index).find('a').trigger('click');
		}
	});

	$(window).on('resize', function(){
		$('.botte2-daily-movie-frame .movie-frame').css({height:$(window).width() * 0.5625});
	});

	$('.daily-prd-thumb-link').on('mouseenter', function(){
		$(this).find('.over').stop().fadeIn(200);
	});
	$('.daily-prd-thumb-link').on('mouseleave', function(){
		$(this).find('.over').stop().fadeOut(200);
	});

	$(window).on('load', function(){
		if ($('.botte2-daily-prd').length > 0) {

			$('.botte2-daily-prd').slidesjs({
				width:1600,
				height:790,
				pagination:{
					active:true
				}
			});

		}

		$('.text-motion.chapter1').delay(1000).fadeIn(500);

		$('.header-slogan.second').on('inview', function(){
			$('.text-motion.chapter2').each(function(i){
				$('.text-motion.chapter2').eq(i).delay(500*i + 500).fadeIn(300);
			});
		});

		$('.header-slogan.third').on('inview', function(){
			$('.text-motion.chapter3').each(function(i){
				$('.text-motion.chapter3').eq(i).delay(500*i + 2000).fadeIn(300);
			});
		});

		$('.botte2-mid').on('inview', function(){
			$('.text-motion.chapter4').each(function(i){
				$('.text-motion.chapter4').eq(i).delay(500*i + 500).fadeIn(300);
			});
		});

		$('.botte2-daily-movie').one('inview', function(){
			console.log( $('.botte2-daily-movie-list').find('img').height() );
			$('.botte2-daily-movie-list').each(function(i){
				if(i<=2){
					$('.botte2-daily-movie-list').eq(i).delay(100*i + 800).animate({height:$('.botte2-daily-movie-list').find('img').height()}, 400);
				} else {
					$('.botte2-daily-movie-list').eq(i).delay(100*i + 1300).animate({height:$('.botte2-daily-movie-list').find('img').height()}, 400);
				}
			});
		});

		$('.botte2-map').on('inview', function(){
			$('.text-motion.chapter5').each(function(i){
				$('.text-motion.chapter5').eq(i).delay(500*i + 500).fadeIn(300);
			});
		});

		$('.botte2-shop').on('inview', function(){
			$('.text-motion.chapter6').each(function(i){
				$('.text-motion.chapter6').eq(i).delay(500*i + 500).fadeIn(300);
			});
		});
	});

	/* 모노샵 오버 */
	$('.shop-item').on({
		'mouseenter': function() {
			$(this).addClass('on');
		},

		'mouseleave': function() {
			$(this).removeClass('on');
		},

		'click': function(e) {
			e.preventDefault();
		}
	});

	/* cf 요일별 오버 */
	$('.cf-list .show-pop').on({

		mouseenter : function(){
			$(this).find('.over').stop().fadeIn(300);
		},

		mouseleave : function(){
			$(this).find('.over').stop().fadeOut(300);
		}

	});

	/* 동영상 팝업 */
	$('.show-pop').on('click', function(e){
		e.preventDefault();

		var $frame = '<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-id') + '?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen class="movie-iframe"></iframe>';
		$('.movie-pop-frame').append( $frame ).show();
		$('.curtain').show();
	});

	$('.close-pop').on('click', function(e){
		e.preventDefault();

		$('.movie-pop-frame').hide().find('.movie-iframe').remove();
		$('.img-pop-frame').hide();
		$('.curtain').hide();
	});


	/* 인덱스 팝업 */
	if ($('.bg-index').length > 0) {
		$('.curtain').show();
		$('.img-pop-frame').show();
	}

});