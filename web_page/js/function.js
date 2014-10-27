/**
 * @author Administrator
 */
 
/**
 * GNB동작
 * @namespace GNB 서브메뉴 오픈 함수
 * 
 */
var gnbAction = (function(){
	
	return{
		/**
		 * 각 동작에 따른 gnb 동작들
		 * 
		 */
		checkSubMenu : function( mainMenus,  crtMenu ) {
			mainMenus.removeClass( 'on' );
			crtMenu.parents( 'li' ).each(function(){
				if( $( this ).parent( '.main_menu' ).length == 1 ) {
					$( this ).addClass( 'on' );
				}
			});
		},
		
		closeSubByMouse : function( mainMenus ) {
			mainMenus.removeClass( 'on' );
		},
		
		closeSubByKeyboard : function( mainMenus ) {
			mainMenus.removeClass( 'on' );
		}
	};
})();

/**
 * Rich Banner
 * @namespace Rich Banner
 * 
 */
var richBanner = (function(){
	
			var currentIndex=0;
			var nextIndex=0;
			
	return{
		
		toggleRichBanner : function( $toggle, $richBanner, dimension, large ){
			if(arguments.length == 4){
				$('.rich_banner_wrap').stop().animate({height:140}, 800, 'easeOutExpo');
				$richBanner.each(function(i){
					$richBanner.eq(i).find('.rich_banner_image').stop().animate({
						height: dimension[i].height,
						top: dimension[i].top,
						'margin-left': dimension[i].marginLeft
					}, 800, 'easeOutExpo');
				});
				$('h1.index').fadeIn(300);
				$('.rich_banner_large_text').fadeOut(300, function(){	$('.rich_banner_small_text').fadeIn(); });
				$toggle.addClass('rich_small');
				return false;
			} else {
				$('.rich_banner_wrap').stop().animate({height:419}, 1000, 'easeOutExpo');
				$('.rich_banner_image').stop().animate({height:419, top:0, 'margin-left': -960}, 1000, 'easeOutExpo');
				$('h1.index').fadeOut(300);
				$('.rich_banner_small_text').fadeOut(300, function(){$('.rich_banner_large_text').fadeIn();});
				$(this).removeClass('rich_small');
				return true;
			}
		},
		
		changeBanner : function( prev, bannerNum ){
			if( prev == 'true' ){
				if(currentIndex <= 0){nextIndex = bannerNum - 1; }
				else{nextIndex = currentIndex - 1;}
			} else {
				if(currentIndex >= (bannerNum-1) ){ nextIndex = 0; }
				else{nextIndex = currentIndex + 1;}
			}
			
			$('.rich_banner').eq(currentIndex).fadeOut();
			$('.rich_banner').eq(nextIndex).fadeIn();
			currentIndex = nextIndex;
		}
		
	};
	
})();

/**
 * bottom nav 동작
 * @namespace 하단메뉴 오픈 함수
 * 
 */
var bottomNavAction = (function(){
	
	return{
		/**
		 * 메뉴 토글
		 * 
		 */
		toggleMenu : function( bottomNavWrap, bottomNavMenus, crtMenu ) {
			crtMenu = crtMenu.parent( 'li' );
			if( crtMenu.hasClass( 'on' ) ) {
				crtMenu.removeClass( 'on' );
				bottomNavWrap.removeClass( 'on' );
			} else {
				bottomNavMenus.removeClass( 'on' );
				bottomNavWrap.addClass( 'on' );
				crtMenu.addClass( 'on' );
			}
		}
	
	};
})();

/**
 * 마이페이지용 함수들
 * @namespace 
 * 
 */
var toggleListAction = (function(){
	
	return{
		/**
		 * 상세보기 토글
		 * 
		 */
		detailView : function( details, idx ) {
			var crtDetail = details.eq( idx );
			if( crtDetail.is(':visible') ) {
				crtDetail.hide();
			} else {
				details.hide();
				details.eq( idx ).show();
			}
		}
	};
})();

/**
 * 브랜드 슬라이드
 * @namespace 
 * 
 */
 
var slideAction = (function(){
	
	return{
		/**
		 * 상세보기 토글
		 * 
		 */
		initSlide : function( bannerContainer ) {
			bannerContainer.each(function(){
				var $cont = $(this);
				var $container = $cont.find('.list-banner');
				var $containerList = $container.find('> li');
				var $clickItems = $cont.find('.positions > a');
				var $btnPrev = $cont.find('a.btn-prev');
				var $btnNext = $cont.find('a.btn-next');
				//var $bannerWidth = $container.find('img').width();
				var $bannerWidth = $containerList.width();

				//var cnt = $clickItems.length;
				var cnt = $containerList.length;
				var index = 0;
				var oldIndex = 0;

				$container.css("width", $bannerWidth*cnt+"px");
				
				(function(){
					var clickItem = '';	
					
					if( cnt <=1 ){
						$cont.find('.positions').hide();
						$cont.find('.btn-prev').parent('p').hide();
					} else {
						for(i=0;i<cnt;i++){
							clickItem += '<a href="#' + i + '">' + i + '</a>';
						}
						$cont.find('.positions').html(clickItem);
						$cont.find('.positions a').eq(0).addClass('current');
					}
				})();
				
				function slideItem(itemNo) {
					index = (itemNo) % cnt;
					
					$container.animate({
						left: (-index*$bannerWidth) + "px"
					}, 500, function() {
						$cont.find('.positions>a').eq(oldIndex).removeClass("current");
						$cont.find('.positions>a').eq(index).addClass("current");
						oldIndex = index;
					});
				}
				
				$cont.find('.positions > a').on('click', function(ev){
					ev.preventDefault();
					var no = parseInt( $(this).attr('href').replace('#', ''));
					slideItem(no);
				});

				$btnPrev.click( function(ev){
					ev.preventDefault();
					var no = parseInt(oldIndex, 10) - 1;
					no = no < 0 ? cnt-1 : no;
					slideItem(no);
				});

				$btnNext.click( function(ev){
					ev.preventDefault();
					var no = parseInt(oldIndex, 10) + 1;
					slideItem(no);
				});
			});
		}
			
	};
})();


/**
 * 설문조사
 * @namespace 
 * 
 */
 
var surveyAction = (function(){
	
	return{
		/**
		 * 상세보기 토글
		 * 
		 */
		checkState : function( inputs ) {
			inputs.each(function(){
				if( $( this ).is(':checked') ) {
					$( this ).next( 'label' ).addClass( 'checked' );
				} else {
					$( this ).next( 'label' ).removeClass( 'checked' );
				}
			});
		}
			
	};
})();


/**
 * 제품 상세 탭
 * @namespace 
 * 
 */
 
var productDetail = (function(){
	
	return{
		/**
		 * 상세보기 토글
		 * 
		 */
		tabToggle : function( tabAreas, selectedTab ) {
			if( selectedTab.attr('href') != undefined ) {
				var tabClass = '';
				
				switch( selectedTab.attr('href') ) {
					case '#tab01' : tabClass = '.feature';
						break;
					case '#tab02' : tabClass = '.review';
						break;
					case '#tab03' : tabClass = '.qna';
						break;
					case '#tab04' : tabClass = '.shipping';
						break;
				}
				
				if( tabClass != '.feature' ) {
					tabAreas.addClass('hide');
					$( '.single-column' + tabClass ).removeClass('hide');
				}
			
				this.tabScroll( tabClass );
			}
		},
		tabScroll : function( tabClass ) {
			var ty = $( '.single-column' + tabClass ).offset().top -20;
			$('html').animate({scrollTop : ty}, 700, 'easeOutCubic'); // for IE
			$('body').animate({scrollTop : ty}, 700, 'easeOutCubic');
		}
			
	};
})();

/**
 * 브랜드 페이지 탭
 *
 */

var brand = (function() {
	
	return {
		/**
		 * 스토리+프로덕트 탭
		 *
		 */
		initTab : function (sections, tabs) {
			tabs.on('click', function(e) {
				if ($(this).attr('href') != undefined) {
					var target = $(this).attr('href');
					
					sections.removeClass('on');
					tabs.removeClass('on');
					
					$(target).addClass('on');
					$(this).addClass('on');
				}
				e.preventDefault();
			});
		}
	};
})();

/**
 * 얼럿 창 생성 함수
 *
 */

var alertPop = (function(){
	
	return{
		
		success : function(){
			var alert = '<div class="alert-pop">';
			alert    += '  <div class="pop pop-1">';
			alert 	 += '    <img src="../images/event/pop1.png" alt="" usemap="#link_pop01" />';
			alert 	 += '    <map name="link_pop01">';
			alert 	 += '      <area shape="rect" coords="55,389,355,440" href="#" alt="" />';
			alert 	 += '    </map>';
			alert 	 += '    <a href="#" class="close"><img src="../images/event/btn_close.png" alt="close" /></a>';
			alert 	 += '  </div>';
			alert    += '</div>';
			
			$('body').append(alert);
			
		}
		
	};
	
})();






