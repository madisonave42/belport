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
			case 'mp' : $css = 'mypage'; $title='마이벨포트 |'; break;
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
			case 'mb1'      : $subTitle = ''; break;
			case 'mb1.1'    : $subTitle = '회원정보입력 |'; break;
			case 'mb1.1.1'  : $subTitle = '회원가입완료 |'; break;
			case 'mb1.1.1.1': $subTitle = '회원정보설문1 |'; break;
			case 'mb1.1.1.2': $subTitle = '회원정보설문2 |'; break;
			case 'mb1.1.1.3': $subTitle = '회원정보설문3 |'; break;
			case 'mb1.1.1.4': $subTitle = '회원정보설문4 |'; break;
			case 'mb1.1.1.5': $subTitle = '회원정보설문5 |'; break;
			case 'mb1.1.1.6': $subTitle = '회원정보설문6 |'; break;
			case 'mb1.1.1.7': $subTitle = '회원정보설문7 |'; break;
			case 'mb1.1.1.7.1'  : $subTitle = '설문결과 |'; break;
			case 'mb1.1.1.7.1.1': $subTitle = '포인트발급 |'; break;
			case 'lg1'      : $subTitle = ''; break;
			case 'lg1.1'    : $subTitle = '아이디찾기 |'; break;
			case 'lg1.1.1'  : $subTitle = '아이디찾기 성공 |'; break;
			case 'lg1.1.2'  : $subTitle = '아이디찾기 실패 |'; break;
			case 'lg1.2'    : $subTitle = '비밀번호 찾기 |'; break;
			case 'lg1.2.1'  : $subTitle = '인증번호 받기 |'; break;
			case 'mp1'      : $subTitle = '마이페이지 |'; break;
			case 'mp1.1'    : $subTitle = '나의쇼핑 |'; break;
			case 'mp1.1.1'  : $subTitle = '주문배송조회 |'; break;
			case 'mp1.1.1.1': $subTitle = '주문배송내역 상세 |'; break;
			case 'mp1.2'    : $subTitle = '나의혜택 |'; break;
			case 'mp1.2.1'  : $subTitle = '포인트 |'; break;
			case 'mp1.2.2'  : $subTitle = '쿠폰 |'; break;
			case 'mp1.3'    : $subTitle = '나의활동 |'; break;
			case 'mp1.3.1'  : $subTitle = '1:1 상담 |'; break;
			case 'mp1.3.1.1': $subTitle = '1:1 상담 보기 |'; break;
			case 'mp1.3.1.2': $subTitle = '1:1 상담 보기 |'; break;
			case 'mp1.3.2'  : $subTitle = '제품 Q&amp;A |'; break;
			case 'mp1.3.3'  : $subTitle = '리뷰 |'; break;
			case 'mp1.4'    : $subTitle = '나의정보 |'; break;
			case 'mp1.4.1'  : $subTitle = '개인정보관리 |'; break;
			case 'mp1.4.1.1': $subTitle = '비밀번호 확인 |'; break;
			case 'mp1.4.1.1.1'  : $subTitle = '개인정보 수정 |'; break;
			case 'mp1.4.1.1.1.1': $subTitle = '회원탈퇴 |'; break;
			case 'mp1.4.2'  : $subTitle = '피부타입설정 |'; break;
			
			
		}
	?>
	<title><?php echo $subTitle ?> <?php echo $title ?> BELPORT</title>
	
	<!-- For old IE -->
	<!--[if lt IE 9]>
	<script src="../js/lib/html5shiv.js"></script>
	<![endif]-->
	<!--// For old IE -->
	
	<link rel="shortcut icon" href="/favicon.ico">
	<link href='http://fonts.googleapis.com/css?family=Alegreya:400italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../css/style.css" />
	<link rel="stylesheet" href="../css/<?php echo $css ?>.css" />
	
	<script src="../js/lib/jquery-1.11.0.min.js"></script>
	<script src="../js/lib/jquery-ui-1.10.4.custom.min.js"></script>
	<script src="../js/lib/jquery.masonry.min.js" type="text/javascript"></script>
	<script src="../js/function.js"></script>
	<script src="../js/event.js"></script>
</head>
<body>