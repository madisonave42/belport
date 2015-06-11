$(function() {

	$('img[usemap]').rwdImageMaps();

	$('.btn-gnb').on('click', function() {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$('.gnb').removeClass('on');
		} else {
			$(this).addClass('on');
			$('.gnb').addClass('on');
		}
	});

	/* 브랜드 스토리 동영상 팝업 */
	$('.btn_movie_pop').on('click', function(e) {
		var movieArea = $('.movie_area'),
			moviePop = $('.movie'),
			url = 'http://www.youtube.com/embed/' + $(this).attr('data-id') + '?rel=0&autoplay=1',
			movieHeight = $(window).width() * 0.6,
			scrollHeight = moviePop.offset().top - (($(window).height() - movieHeight) / 2);

		moviePop.css({
			height: movieHeight
		});

		moviePop.find('iframe').attr('src', url);
		movieArea.animate({height: movieHeight});
		$('html').stop().animate({scrollTop : scrollHeight}, 300);
		$('body').stop().animate({scrollTop : scrollHeight}, 300);

		$('.slidesjs-pagination a').eq($('.btn_movie_pop').index(this)).trigger('click');

		e.preventDefault();
	});

	/* 요일별 슬라이드 */
	$(".product_slides").slidesjs({
		width: 640,
		height: 693,
		callback: {
			loaded: function() {
				/* 요일별 제품 링크 */
				$('img[usemap]').rwdImageMaps();
			}
		}
	});

	/* 모노샵 슬라이드 */
	// $(".shop-slide").slidesjs({
		// width: 640,
		// height: 300
	// });

	/* 모노샵 오버 */
	$('.shop-item').on('click', function(e) {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
		e.preventDefault();
	});

	/* 동영상 팝업 */
	$('.show-pop').on('click', function(e){
		e.preventDefault();

		var $frame = '<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-id') + '?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen class="movie-iframe"></iframe>';
		$('.movie-pop-frame').show().find('.movie-pop-wrap').append( $frame );
		$('.curtain').show();
	});

	$('.close-pop').on('click', function(e){
		e.preventDefault();

		$('.movie-pop-frame').hide().find('.movie-iframe').remove();
		$('.img-pop-frame').hide();
		$('.curtain').hide();
	});

	/* 인덱스 팝업 */
	if ($('.index').length > 0) {
		$('.curtain').show();
		$('.img-pop-frame').show();
	}

});