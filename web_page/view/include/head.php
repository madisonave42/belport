<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php
		$currentCss = $_GET['c'];
		switch($currentCss){
			case 'cs' : $css = 'customer'; $title='고객센터 |'; break;
			case 'ct' : $css = 'cart'; $title='장바구니 |'; break;
			case 'mb' : $css = 'member'; $title='회원가입 |'; break;
			case 'lg' : $css = 'login'; $title='로그인 |'; break;
			case 'mp' : $css = 'mypage'; $title='MY BELPORT |'; break;
			case 'sh' : $css = 'shop'; $title='SHOP |'; break;
			case 'br' : $css = 'brand'; $title='BRAND |'; break;
			case 'ib' : $css = 'inside'; $title='INSIDE B. |'; break;
			case 'ev' : $css = 'event'; $title='EVENT |'; break;
			case 'se' : $css = 'search'; $title='SEARCH |'; break;
			case 'gr' : $css = 'index'; $title=''; break;
			case 'bp' : $css = 'about'; $title='About BELPORT |'; break;
		}
		$currentTitle = $_GET['t'];
		switch($currentTitle){
			case 'cs1'      : $subTitle = ''; break;
			case 'cs1.1'    : $subTitle = '공지사항 |'; break;
			case 'cs1.1.1'  : $subTitle = '공지사항 |'; break;
			case 'cs1.2'    : $subTitle = 'FAQ |'; break;
			case 'cs1.3'    : $subTitle = '1:1상담 |'; break;
			case 'cs1.3.1'  : $subTitle = '1:1상담 |'; break;
			case 'ct1'      : $subTitle = '주문결제 |'; break;
			case 'ct1.1'    : $subTitle = '주문서작성(회원) |'; break;
			case 'ct1.1.1'  : $subTitle = '우편번호검색 |'; break;
			case 'ct1.1.2'  : $subTitle = '쿠폰적용하기 |'; break;
			case 'ct1.1.3'  : $subTitle = '결제하기 |'; break;
			case 'ct1.1.3.1': $subTitle = '주문완료 |'; break;
			case 'ct1.2'    : $subTitle = '주문서작성(비회원) |'; break;
			case 'mb1'      : $subTitle = '가입여부확인 |'; break;
			case 'mb1.1'    : $subTitle = '회원정보입력 |'; break;
			case 'mb1.1.1'  : $subTitle = '회원가입완료 |'; break;
			case 'mb1.1.1.1': $subTitle = '추가정보관리1 |'; break;
			case 'mb1.1.1.2': $subTitle = '추가정보관리2 |'; break;
			case 'mb1.1.1.3': $subTitle = '추가정보관리3 |'; break;
			case 'mb1.1.1.4': $subTitle = '추가정보관리4 |'; break;
			case 'mb1.1.1.5': $subTitle = '추가정보관리5 |'; break;
			case 'mb1.1.1.6': $subTitle = '추가정보관리6 |'; break;
			case 'mb1.1.1.7': $subTitle = '추가정보관리7 |'; break;
			case 'mb1.1.1.7.1'  : $subTitle = '설문결과 |'; break;
			case 'mb1.1.1.7.1.1': $subTitle = '포인트발급 |'; break;
			case 'mb1.2'    : $subTitle = '회원정보입력(연동회원)'; break;
			case 'mb1.3'    : $subTitle = '회원정보입력(이전회원)'; break;
			case 'mb1.4'    : $subTitle = '회원정보입력(기존회원)'; break;
			case 'lg1'      : $subTitle = ''; break;
			case 'lg1.1'    : $subTitle = '아이디찾기 |'; break;
			case 'lg1.1.1'  : $subTitle = '아이디찾기 성공 |'; break;
			case 'lg1.1.2'  : $subTitle = '아이디찾기 실패 |'; break;
			case 'lg1.2'    : $subTitle = '비밀번호 찾기 |'; break;
			case 'lg1.2.1'  : $subTitle = '인증번호 받기 |'; break;
			case 'mp1'      : $subTitle = ''; break;
			case 'mp1.1.1'  : $subTitle = '주문배송조회 |'; break;
			case 'mp1.1.1.1': $subTitle = '주문배송내역 상세 |'; break;
			case 'mp1.1.2'  : $subTitle = '취소/교환/반품 |'; break;
			case 'mp1.1.3'  : $subTitle = '위시리스트 |'; break;
			case 'mp1.2.1'  : $subTitle = '포인트 |'; break;
			case 'mp1.2.2'  : $subTitle = '쿠폰 |'; break;
			case 'mp1.3.1'  : $subTitle = '1:1 상담 |'; break;
			case 'mp1.3.2'  : $subTitle = '제품 Q&amp;A |'; break;
			case 'mp1.3.3'  : $subTitle = '리뷰 |'; break;
			case 'mp1.4.1.1': $subTitle = '비밀번호 확인 |'; break;
			case 'mp1.4.1.1.1'  : $subTitle = '개인정보 수정 |'; break;
			case 'mp1.4.1.1.1.1': $subTitle = '회원탈퇴 |'; break;
			case 'mp1.4.1.1.1.1.1': $subTitle = '회원탈퇴 완료 |'; break;
			case 'mp1.4.2'  : $subTitle = '추가 정보 관리 |'; break;
			case 'mp1.4.2.1'  : $subTitle = '추가정보관리1 |'; break;
			case 'mp1.4.2.2'  : $subTitle = '추가정보관리2 |'; break;
			case 'mp1.4.2.3'  : $subTitle = '추가정보관리3 |'; break;
			case 'mp1.4.2.4'  : $subTitle = '추가정보관리4 |'; break;
			case 'mp1.4.2.5'  : $subTitle = '추가정보관리5 |'; break;
			case 'mp1.4.2.6'  : $subTitle = '추가정보관리6 |'; break;
			case 'mp1.4.2.7'  : $subTitle = '추가정보관리7 |'; break;
			case 'sh1.1'    : $subTitle = 'Belport\' Pick |'; break;
			case 'sh1.2'    : $subTitle = 'New Items |'; break;
			case 'sh1.3'    : $subTitle = 'On Sale |'; break;
			case 'sh1.4'    : $subTitle = 'Theme Shop |'; break;
			case 'sh1.5'    : $subTitle = 'Limited Edition |'; break;
			case 'sh1.5.1'  : $subTitle = 'Laino |'; break;
			case 'sh1.5.2'  : $subTitle = 'Dr. Bronner\'s |'; break;
			case 'sh1.5.3'  : $subTitle = 'Linola |'; break;
			case 'sh1.5.4'  : $subTitle = 'Hurraw |'; break;
			case 'sh1.5.5'  : $subTitle = 'La fresh |'; break;
			case 'br1'      : $subTitle = ''; break;
			case 'br1.1.1'  : $subTitle = 'Brand Product |'; break;
			case 'br1.1.2'  : $subTitle = 'Brand Story |'; break;
			case 'br1.1.3'  : $subTitle = 'Brand 소개|'; break;
			case 'br1.2'    : $subTitle = 'Spotlight |'; break;
			case 'br1.2.1'  : $subTitle = 'Spotlight |'; break;
			case 'ib1.1'  : $subTitle = '인사이드비 목록 |'; break;
			case 'ib1.1.1'  : $subTitle = '인사이드비 상세 |'; break;
			case 'ev1.1'  : $subTitle = '진행중 이벤트 목록 |'; break;
			case 'ev1.1.1'  : $subTitle = '진행중 이벤트 상세 |'; break;
			case 'ev1.2'  : $subTitle = '지난 이벤트 목록 |'; break;
			case 'ev1.2.1'  : $subTitle = '지난 이벤트 상세 |'; break;
			case 'ev1.3'  : $subTitle = 'Tester\'s Box |'; break;
			case 'ev1.4'  : $subTitle = 'POP! Choice |'; break;
			case 'se1.1'  : $subTitle = 'Shop 검색결과 |'; break;
			case 'se1.2'  : $subTitle = 'Shop 검색결과 |'; break;
			case 'se1.3'  : $subTitle = 'Brand 검색결과 |'; break;
			case 'se1.4'  : $subTitle = 'Brand 검색결과 |'; break;
			case 'gr0.1'  : $subTitle = '개인정보취급방침 |'; break;
			case 'gr0.2'  : $subTitle = '이용약관 |'; break;
			case 'bp1'    : $subTitle = ''; break;
			
		}
	?>
	<title><?php echo $subTitle ?> <?php echo $title ?> BELPORT</title>
	
	<!-- For old IE -->
	<!--[if lt IE 9]>
	<script src="../js/lib/html5shiv.js"></script>
	<![endif]-->
	<!--// For old IE -->
	
	<link rel="shortcut icon" href="../images/common/favicon.ico" type="image/x-icon">
	<link rel="icon" href="../images/common/favicon.ico" type="image/x-icon">
	<link href='http://fonts.googleapis.com/css?family=Alegreya:400italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="http://api.typolink.co.kr/css?family=RixSGo+L:400|RixSGo+M:400|RixSGo+B:400" />
	<link rel="stylesheet" href="../css/style.css" />
	<link rel="stylesheet" href="../css/<?php echo $css ?>.css" />
	
	<script src="../js/lib/jquery-1.11.0.min.js"></script>
	<script src="../js/lib/jquery-ui-1.10.4.custom.min.js"></script>
	<script src="../js/lib/jquery.masonry.min.js" type="text/javascript"></script>
	<script src="../js/function.js"></script>
	<script src="../js/event.js"></script>
</head>
<body>