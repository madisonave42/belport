$(function() {
	/* 댓글영역 레이블 토글 */
	$('.concert textarea').on({
		focus : function() {
			$('label[for=' + $(this).attr('id') +']').hide();
		},
		blur : function() {
			if ($(this).val() === '') {
				$('label[for=' + $(this).attr('id') +']').show();
			}
		}
	});
	
	if ($('.concert textarea').val() !== '') {
		$(this).triggerHandler('focus');
	}

	/* 지도 팝업 보이기, 닫기 */
	(function() {
		var popBtns = $('.btn-map'),
			popMap = $('#pop-map'),
			closeBtns = popMap.find('.btn-close'),
			curtain = $('.curtain');
			
		popBtns.on('click', function(e) {
			curtain.show();
			popMap.css({top:'50%'});
			e.preventDefault();
		});
		
		closeBtns.on('click', function(e) {
			curtain.hide();
			popMap.css({top:-9999});
			e.preventDefault();
		});
	})();
	
	
});
