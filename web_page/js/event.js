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
	
	
	
});