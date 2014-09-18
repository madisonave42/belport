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
	var tID;

	var ua = navigator.userAgent;
	
	
	// function
	function init(){
		$bannerItem.css({top:315, opacity:0});
		$bannerItem.eq(0).css({top:85, opacity:1});
	}
	function setIndex(){
		if( currentIndex > 0 ){move(0);}
		else {move(currentIndex+1);}
	}
	function move(nextIndex){
		
		$currentBanner = $bannerItem.eq(currentIndex);
		$nextBanner = $bannerItem.eq(nextIndex);
		
		
		
		$currentBanner.stop().animate({top:-145, opacity:0}, 1000);
		$nextBanner.css({top:315});
		$nextBanner.stop().animate({top:85, opacity:1}, 1000);
		
		currentIndex = nextIndex;
	}

	// mobile
	if( ua.toLowerCase().indexOf( 'mobile' ) > 0 ){
		window.location = './m_teaser/';
	} else {
		
	}	

	//rolling
	init();
	tID = setInterval(setIndex, 10000);
	
	$('.arrow').on('click', function(){
		if($('.text_area').is(':animated')){return false;}
		clearInterval(tID);
		setIndex();
	});
	
















	
	
});



