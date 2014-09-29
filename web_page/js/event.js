$(function(){
	/* GNB */
	(function(){
		var gnb = $( '#gnb' ),
			mainMenus = gnb.find( '.main_menu > li' ),
			mainMenuLinks = gnb.find( 'a' ),
			closeItems = $( '.key_out' );
			
		mainMenuLinks.on( 'mouseenter focus', function(){
			gnbAction.checkSubMenu( mainMenus, $( this ) );
		});
		
		gnb.on( 'mouseleave', function(){
			gnbAction.closeSubByMouse( mainMenus );
		});
		closeItems.on( 'focus', function(){
			gnbAction.closeSubByKeyboard( mainMenus );
		});
	})();
	
	/* Bottom Nav */
	(function(){
		var bottomNav = $( '#bottom_nav' ),
			bottomNavWrap = bottomNav.find( '.bottom_nav_wrap' ),
			bottomNavMenus = bottomNav.find( 'nav > ul > li' ),
			bottomNavMenuLinks = bottomNav.find( 'nav > ul > li > a' );
		
		bottomNavMenuLinks.on( 'click', function( e ){
			e.preventDefault();
			bottomNavAction.toggleMenu( bottomNavWrap, bottomNavMenus, $( this ) );
		});
	})();
	
	/* gnb minimize */
	/*
	(function(){
		
		var scrollStart = false;
		
		$(document).on('scroll', function(){
			if( $(this).scrollTop() > 200 ){
				if(!scrollStart){
					$('body>header>#gnb>h1').addClass('scroll');
					$('body>header').addClass('scroll');
					$('body>#contents').addClass('scroll');
					$('body>header').css({top:-162}).stop().animate({top:0}, 500);
					scrollStart = true;
				}
			} else {
				$('body>header>#gnb>h1').removeClass('scroll');
				$('body>header').removeClass('scroll');
				$('body>#contents').removeClass('scroll');
				scrollStart = false;
			}
		});
		
	})();
	*/
	/* show search & search or close */
	(function(){
		var open = false;
		$('.header_util .btn_search').on('click', function(e){
			e.preventDefault();
			if(!open){
				$('.header_search').stop().animate({height:50}, 300);
				open = true;
			} else {
				$('.header_search').stop().animate({height:0}, 300);
				open = false;
			}
		});
		
		$('.header_search .btn_search_big').on('click', function(e){
			var inputValue = $('.keyword').val();
			if( inputValue <= 0 ){
				e.preventDefault();
				$('.header_search').stop().animate({height:0}, 300);
				open = false;
			}
		});
		
	})();
	
	/*=====================================
	 * 고객센터
	 ======================================*/
	// FAQ
	(function(){
		
		if( $('section').is('.faq') ){
			var $question = $('.list_table .title');
			$question.data('open', 'false');
			$question.on('click', function(e){
				e.preventDefault();
				if( $(this).data('open') == 'false' ){
					$(this).parent().next('.answer').show();
					$(this).data('open', 'true');					
				} else {
					$(this).parent().next('.answer').hide();
					$(this).data('open', 'false');
				}
			});
		}
		
	})();
	
 /*============================================================
  * 마이페이지
  =============================================================*/
	/* 달력컨트롤 */
	(function(){
		$('#date_picker_1, #date_picker_2').datepicker({
			duration: 'fast',
			dateFormat: 'yymmdd',
			showMonthAfterYear: true,
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토']
		});
		$('.btn_start_date').on('click',function() {
			$('#date_picker_1').datepicker('show');
		});
		$('.btn_end_date').on('click',function() {
			$('#date_picker_2').datepicker('show');
		});
	})();
	
	/* 나의활통 게시판 */
	(function() {
		var list = $( '.toggle_list' ),
			titleLinks = list.find( '.link' ),
			detailViews = list.find( '.detail' );
			
		titleLinks.on( 'click', function( e ){
			e.preventDefault();
			
			var idx = titleLinks.index( this );
			toggleListAction.detailView( detailViews, idx );
		});
	})();
	
 /*============================================================
  * Theme Shop & Theme Box & Brand Spotlight Masonry
  =============================================================*/
 
	(function(){
		$(window).on('load', function(){
			if( $('div').is('#list_container') ){
				var msnry = new Masonry( '#list_container', {
					gutter:8
				} );
			}
		});
		
	})();

 /*============================================================
  * Inside B. Masonry
  =============================================================*/
 
	(function(){
		if( $('div').is('#list_container_inside') ){
			var msnry = new Masonry( '#list_container_inside', {
				gutter:11
			} );
		}
		
	})();
 
  /*============================================================
  * list wish list action
  =============================================================*/
 (function(){
 	
 	var isWish = $('a').is('.btn-wish');
 	
	if( isWish ){
		$('.btn-wish').data('wish', 'false');
	 	$('.btn-wish').on('click', function(e){
	 		e.preventDefault();
	 		if( $(this).data('wish') == 'false'  ){
	 			$(this).addClass('on');
	 			$(this).data('wish', 'true');
	 		} else {
	 			$(this).removeClass('on');
	 			$(this).data('wish', 'false');
	 		}
	 		
	 	});
 	}
 	
 })();
 
 
 /*============================================================
  * Brand Main Slide
  =============================================================*/
 
	(function(){
		var bannerContainer = $('.container-banner');

		slideAction.initSlide( bannerContainer );
		
	})();
 
 
 /*============================================================
  * Survey check
  =============================================================*/
 (function(){
	var inputs = $( '.survey .select_section input' );
	surveyAction.checkState( inputs );
	
	inputs.on( 'change', function(){
		surveyAction.checkState( inputs );
	});
 })();
 
 /*============================================================
  * 페이지 맨위로 이동
  =============================================================*/
	(function() {
		var topBtn = $('.btn_top');
		topBtn.isOpening = false;
		topBtn.isClosing = false;
		
		$(window).on('scroll', function() {
			if ( $(document).scrollTop() > 400 ) {
				if( !topBtn.isOpening ) {
					topBtn.isOpening = true;
					topBtn.isClosing = false;
					topBtn.stop().animate({'top':0, 'opacity':1}, 300, function(){ topBtn.isOpening = false });
				}
			} else {
				if( !topBtn.isClosing ) {
					topBtn.isOpening = false;
					topBtn.isClosing = true;
					topBtn.stop().animate({'top':-45, 'opacity':1}, 300, function(){ topBtn.isClosing = false });
				}
			}
		});
		topBtn.on('click',function (e) {
			e.preventDefault();
			$('html').animate({scrollTop : 0}, 300); // for IE
			$('body').animate({scrollTop : 0}, 300);
		});
	})();
	
	/*============================================================
  * product detail
  =============================================================*/
	/* 탭 스크롤 */
	(function() {
		var tabs = $('.product-detail .single-column .tab a'),
			tabAreas = $( '.single-column.review, .single-column.qna, .single-column.shipping' );
		
		tabs.on('click', function(e){
			e.preventDefault();
			productDetail.tabToggle( tabAreas, $(this) );
		});
	})();
	
});