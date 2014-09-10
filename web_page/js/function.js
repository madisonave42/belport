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
			var $container = bannerContainer.find('.list-banner');
			var $clickItems = bannerContainer.find('.positions > a');
			var $btnPrev = bannerContainer.find('a.btn-prev');
			var $btnNext = bannerContainer.find('a.btn-next');
			var $bannerWidth = $container.find('img').width();

			var cnt = $clickItems.length;
			var index = 0;
			var oldIndex = 0;

			$container.css("width", $bannerWidth*cnt+"px");

			function slideItem(itemNo) {
				index = (itemNo) % cnt;

				$container.animate({
					left: (-index*$bannerWidth) + "px"
				}, 500, function() {
					$clickItems.eq(oldIndex).removeClass("current");
					$clickItems.eq(index).addClass("current");
					oldIndex = index;
				});
			}
			
			$clickItems.click( function(ev){
				ev.preventDefault();
				var no = parseInt($(this).attr('href').replace('#', ''));
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
		}
			
	};
})();