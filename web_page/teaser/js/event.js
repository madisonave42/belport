$(function(){
	
	// variable
	var $bannerItem = $('.text_area');
	var $currentBanner;
	var $nextBanner;
	var bannerLength;
	var currentIndex = 0;
	var nextIndex;
	var isMoving;
	var bannerHeight = 230;

	var ua = navigator.userAgent;
	
	
	// function
	function init(){
		$bannerItem.css({top:230});
		$bannerItem.eq(0).css({top:0});
	}



	// mobile
	if( ua.toLowerCase().indexOf( 'mobile' ) > 0 ){
		window.location = './m_teaser/';
	} else {
		
	}	

	//rolling
	init();
	
















	
	
});



