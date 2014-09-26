/**
 * @author Administrator
 */
 
/**
 * GNB����
 * @namespace GNB ����޴� ���� �Լ�
 * 
 */
var gnbAction = (function(){
	
	return{
		/**
		 * �� ���ۿ� ���� gnb ���۵�
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
 * bottom nav ����
 * @namespace �ϴܸ޴� ���� �Լ�
 * 
 */
var bottomNavAction = (function(){
	
	return{
		/**
		 * �޴� ���
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
 * ������������ �Լ���
 * @namespace 
 * 
 */
var toggleListAction = (function(){
	
	return{
		/**
		 * �󼼺��� ���
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
 * �귣�� �����̵�
 * @namespace 
 * 
 */
 
var slideAction = (function(){
	
	return{
		/**
		 * �󼼺��� ���
		 * 
		 */
		initSlide : function( bannerContainer ) {
			bannerContainer.each(function(){
				var $cont = $(this);
				var $container = $cont.find('.list-banner');
				var $clickItems = $cont.find('.positions > a');
				var $btnPrev = $cont.find('a.btn-prev');
				var $btnNext = $cont.find('a.btn-next');
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
			});
		}
			
	};
})();


/**
 * ��������
 * @namespace 
 * 
 */
 
var surveyAction = (function(){
	
	return{
		/**
		 * �󼼺��� ���
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
 * ��ǰ �� ��
 * @namespace 
 * 
 */
 
var productDetail = (function(){
	
	return{
		/**
		 * �󼼺��� ���
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
					tabAreas.hide();
					$( '.single-column' + tabClass ).show();
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