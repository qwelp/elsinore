<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Page\Asset;
//use Bitrix\Main\Loader;
Loc::loadMessages(__FILE__);
?><!DOCTYPE HTML>
<html lang="ru">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta content="ie=edge" http-equiv="x-ua-compatible">
	<title><?php $APPLICATION->ShowTitle()?></title>
	<link rel="shortcut icon" href="<?php echo SITE_TEMPLATE_PATH?>/favicon.ico" type="image/x-icon"><?

	Asset::getInstance()->addCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH .'/css/foundation.css');
	Asset::getInstance()->addCss(SITE_TEMPLATE_PATH .'/css/app.css');

	Asset::getInstance()->addJs('https://yastatic.net/jquery/2.1.4/jquery.min.js');
	Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/foundation.js');
	Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/app.js');
	Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/script.js');

	$APPLICATION->ShowHead();
	?><!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
</head>
<body>
<div class="wrapper">
	<div id="bxpanel"><?php $APPLICATION->ShowPanel();?></div>
	<header class="header">
		<div class="container">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#js-horMenu">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand logo" href="/">
						<img class="logo__img" src="<?=SITE_TEMPLATE_PATH?>/img/logo.png" alt="Эльсинор группа фабрик">
						<span class="logo__text">Эльсинор группа фабрик</span>
					</a>
				</div>
				<div class="collapse navbar-collapse" id="js-horMenu"><?$APPLICATION->IncludeComponent(
						"bitrix:menu",
						"hor",
						array(
							"ALLOW_MULTI_SELECT" => "N",
							"CHILD_MENU_TYPE" => "left",
							"DELAY" => "N",
							"MAX_LEVEL" => "2",
							"MENU_CACHE_GET_VARS" => array(
							),
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_TYPE" => "N",
							"MENU_CACHE_USE_GROUPS" => "Y",
							"ROOT_MENU_TYPE" => "top",
							"USE_EXT" => "Y",
							"COMPONENT_TEMPLATE" => "hor"
						),
						false
					);?><div class="headerContact navbar-right">
						<div class="headerContact__phone"><?$APPLICATION->IncludeComponent(
								"bitrix:main.include",
								"",
								Array(
									"AREA_FILE_SHOW" => "file",
									"AREA_FILE_SUFFIX" => "inc",
									"EDIT_TEMPLATE" => "",
									"PATH" => SITE_DIR.'include_areas/phone.php'
								)
							);?></div>
						<a class="headerContact__callback" href="#" data-toggle="modal" data-target="#callback">Получить консультацию</a>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<?if($APPLICATION->GetCurPage(true) != '/index.php'):?>
	<?$APPLICATION->IncludeComponent(
		"bitrix:breadcrumb",
		"common",
		array(
			"PATH" => "",
			"SITE_ID" => "s1",
			"START_FROM" => "0",
			"COMPONENT_TEMPLATE" => "common"
		),
		false
	);?>
	<?endif;?>