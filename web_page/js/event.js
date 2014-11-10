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
	
	/* floating banner close */
	(function(){
		
		if( $('section').is('.about') ){
			$('header .floating_banner').hide();
		}
		$('header .floating_banner .btn_close').on('click', function(e){
			e.preventDefault();
			$('header .floating_banner').hide();
		});
		
	})();
	
	/* rich banner init & toggle & roll */
	(function(){
		
		if( $('section').is('.index') ){
			$('header .rich_banner_wrap').remove();
		} else if( $('section').is( '.about' ) ){
			$('header .rich_banner_wrap').remove();
		}
		
		if( $('div').is('.rich_banner') ){
			var large = true;
			var bannerNum = $('.rich_banner').length;
			
			var dimension = [
				//{'height':164, "top":-24, 'marginLeft':-58},
				{'height':164, "top":0, 'marginLeft':-220},
				{'height':149, "top":-16, 'marginLeft':-27}
			];
			
			$('.rich_banner_wrap .btn_toggle').on('click', function(e){
				e.preventDefault();
				
				if( large ){
					large = richBanner.toggleRichBanner( $(this), $('.rich_banner'), dimension, large );
				} else {
					$('.rich_banner_wrap').stop().animate({height:419}, 1000, 'easeOutExpo');
					$('.rich_banner_image').stop().animate({height:419, top:0, 'margin-left': -960}, 1000, 'easeOutExpo');
					
					$('.rich_banner_wrap .frame iframe').attr('src', '//www.youtube.com/embed/TGUGLNaJFig?autoplay=1');
					$('.rich_banner_wrap .frame').delay(300).fadeIn(300);
					
					$('h1.index').fadeOut(300);
					$('.rich_banner_small_text').fadeOut(300, function(){$('.rich_banner_large_text').fadeIn();});
					$(this).removeClass('rich_small');
					large = true;
				}
			});
			
			$('.rich_banner_wrap .btn_prev').on('click', function(e){
				e.preventDefault();
				richBanner.changeBanner( 'true', bannerNum );
			});
			
			$('.rich_banner_wrap .btn_next').on('click', function(e){
				e.preventDefault();
				richBanner.changeBanner( 'false', bannerNum );
			});
			
		}
		
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
	
	/* 약도 슬라이드 */
	(function() {
		var maps = $('.bottom_location .bottom_maps');
		var pageNum = $('.bottom_location .currentPage span');
		
		if (maps != 0) {
			maps.slidesjs({
        width: 936,
        height: 302,
				navigation: {
					effect: "fade"
				},
				pagination: {
					active: false
				},
				callback: {
					loaded: function() {
						maps.css({'display': ''});
					},
					 complete: function(number) {
						pageNum.text(number);
					}
				}
      });
		}
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
			setTimeout(function(){ $('.theme_loader').fadeOut(500, function(){ $(this).remove(); }); }, 1000);
		});
		
	})();

 /*============================================================
  * Inside B. Masonry
  =============================================================*/
 
	(function(){
		
		$(window).on('load', function(){
			if( $('div').is('#list_container_inside') ){
				// var msnry = new Masonry( '#list_container_inside', {
					// gutter:11
				// } );
				$('#list_container_inside').masonry({
					gutter:11,
					itemSelector: '.item'
				});
			}
			setTimeout(function(){ $('.loader').fadeOut(500, function(){ $(this).remove(); }); }, 1000);
		});
		
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
  * Index & Pick&Fun & Brand Main Slide
  =============================================================*/
 
	(function(){
		var bannerContainer = $('.container-banner');
		
		slideAction.initSlide( bannerContainer );
		
	})();
	
	// 자세히 보기 롤오버
	(function() {
		$('.index section a').on({
			'mouseenter': function() {
				$(this).find('.hover').stop().fadeIn(300);
			},
			'mouseleave': function() {
				$(this).find('.hover').stop().fadeOut(300);
			}
		});
	})();
	
	// 상단 메인 슬라이드
	(function() {
		var topBanner = $('.top-banner .slides');
		if (topBanner.length != 0 && topBanner.children().length > 1) {
			topBanner.slidesjs({
        width: 1014,
        height: 420,
				effect: {
					slide: {
						speed: 1000
					}
				},
				play: {
					interval: 4000,
					auto: true,
					pauseOnHover: true
				}
      });
		}
	})();
	
	// 가운데 제품 슬라이드
	(function() {
		var products = $('.products .slides');
		if (products.length != 0 && products.children().length > 1) {
			products.slidesjs({
        width: 338,
        height: 338,
				effect: {
					slide: {
						speed: 1000
					}
				},
				play: {
					interval: 4000,
					auto: true,
					pauseOnHover: true
				}
      });
		}
	})();
	
	// 사이드 배너 슬라이드
	(function() {
		var sideBanner = $('.side-banner');
		var banners = sideBanner.find('.banner-container');
		var pageNum = sideBanner.find('.current-page span');
		var richBanner = $('.rich_banner_wrap');
		var maxHeight;
		
		if (banners.length != 0 && banners.children().length > 1) {
			banners.slidesjs({
        width: 149,
        height: 380,
				effect: {
					slide: {
						speed: 1000
					}
				},
				pagination: {
					active: false
				},
				callback: {
					 complete: function(number) {
						pageNum.text(number);
					}
				}
      });
		}
		
		$(window).on('load', function(){
			maxHeight = $('.container.index').innerHeight() - 420
		});
		
		$(window).on('scroll', function() {
			var scrollHeight = richBanner.height() > 140 ? 530 : 245 ;
			var tTop = $(document).scrollTop() - scrollHeight;
			tTop = tTop < 0 ? 0 : tTop;
			tTop = tTop > maxHeight ? maxHeight : tTop;
			sideBanner.css({top: tTop});
		});
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
	
	/*============================================================
  * shop tab
  =============================================================*/
 
 (function(){
 	
 	if( $('aside').is('.shop-curation') ){
 		var menuWholeWidth = $('.shop-curation > div').width();
 		var menuNumber = $('.shop-curation a').length;
 		var menuWidth = menuWholeWidth / menuNumber;
 		
 		$('.shop-curation a').css({
 			width: (menuWidth - 21),
 			'background-position' : (menuWidth-21)
 		});
 		
 		$('aside.shop-curation a.on:after').css({
 			width: menuWidth
 		});
 		
 	}
 	
 })();
 
	/*============================================================
	 * brand main list mouse over
	 =============================================================*/

	(function(){
		
		$('figure.brand').on({
			
			mouseenter : function(){
				$(this).find('.over_cover').css({display:'block'});
			},
			mouseleave : function(){
				$(this).find('.over_cover').css({display:'none'});
			}
			
		});
		
	})();


	/*============================================================
  * brand icon motion
  =============================================================*/
 
	(function(){
	 	
		var $icon = $('.choice_icon>div');
		var $it;
		
		$icon.each(function(i){
			$icon.eq(i).data('left', $(this).position().left);
		});
		
		function move(index){
			
			$('.choice_icon>div').eq(index).stop().animate({left:0, width:400});
			
		}
		
		$('.choice_icon>div').on({
			
			mouseenter : function(){
				
				var index = $(this).index();
				
				$icon.each(function(i){
					
					if( i == index ){
						$icon.eq(i).css({'z-index':90}).stop().animate({left:0, width:400, opacity:1});
					} else {
						$icon.eq(i).css({'z-index':1}).stop().animate({left:$icon.eq(i).data('left'), width:47, opacity:0});
					}					
					
				});
				
			},
			
			mouseleave : function(){
				
				var index = $(this).index();
				
				$icon.each(function(i){
					$icon.eq(i).css({'z-index':1}).stop().animate({left:$icon.eq(i).data('left'), width:47, opacity:1});
				});
				
			}
			
		});
	
	})();

	/*============================================================
  * brand story tab
  =============================================================*/
	(function () {
		var tabs = $('.brand_story .tab a');
		var sections = $('.brand_story #section_product, .brand_story #section_story');
		
		if (tabs.length > 0 && sections.length > 0) {
			brand.initTab(sections, tabs);
		}
	})();

	/*============================================================
  * event - brand week & tester box
  =============================================================*/
 (function(){
 	
 	$('.event-pd').on('mouseenter', function(e){
 		var index = $(this).index();
 		
 		$('.tip').hide();
 		$('.tip').eq(index).show();
 	});
 	
	$('.tip').on('mouseleave', function(e){
 		$(this).hide();
 	});
 	
 	// brand week
	$('.tip').on('click', function(e){
		e.preventDefault();
		
 		var index = $(this).index();
 		$('.layer-pop').css({height: $('body').height() }).show();
 		$('.layer-pop .pop').eq(index).show();
 		
 	});
 	
 	// tester box
 	$('.btn>div').on('click', function(e){
		e.preventDefault();
		
 		var index = $(this).index();
 		$('.layer-pop').css({height: $('body').height() }).show();
 		$('.layer-pop .tb_pop').eq(index).show();
 		
 	});
 	 
 	
 	// close
 	$('.layer-pop .close').on('click', function(e){
 		e.preventDefault();
 		
 		$('.layer-pop').hide();
 		$('.layer-pop .pop').hide();
 		$('.layer-pop .tb_pop').hide();
 	});
	
	// 임시 완료팝업보이기
	$('.brandweek-complete').height($(document).height()).show();
	
	// 참여완료 팝업
	//$('.brandweek-complete .close').on('click', function(e){
	$('body').on('click', '.brandweek-complete .close', function(e){
		e.preventDefault();
		$('.brandweek-complete').remove();
	});
 	
 })();
 
	/* 이벤트 참여하기 스크롤 */
	(function() {
		var btn = $('.btn_select_event');
		btn.on('click', function(e){
			var ty = $( $(this).attr('href') ).offset().top;
			$('html').animate({scrollTop : ty}, 600, 'easeOutCubic'); // for IE
			$('body').animate({scrollTop : ty}, 600, 'easeOutCubic');
			e.preventDefault();
		});
	})();
	
	/* textarea */
	(function(){
		$('textarea').on('focus', function(){
			$(this).val('');
		});
	})();


	//alertPop.success();
	
	// 오모로비짜
	(function() {
		var omoSlides = $('.omo-slides');
		
		if (omoSlides.length != 0) {
			omoSlides.slidesjs({
        width: 936,
        height: 600,
				pagination: {
					active: false
				}
      });
		}
	})();

});