<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/bitrix/services/ymarket/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/bitrix/services/ymarket/index.php",
	),
	array(
		"CONDITION" => "#^/production/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/production/index.php",
	),
	array(
		"CONDITION" => "#^/portfolio/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/portfolio/index.php",
	),
	array(
		"CONDITION" => "#^/addresses/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/addresses/index.php",
	),
	array(
		"CONDITION" => "#^/catalog/#",
		"RULE" => "",
		"ID" => "bitrix:catalog",
		"PATH" => "/catalog/index.php",
	),
	array(
		"CONDITION" => "#^/news/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/news/index.php",
	),
	array(
		"CONDITION" => "#^#",
		"RULE" => "",
		"ID" => "bitrix:iblock.element.add.form",
		"PATH" => "/local/templates/qwelp/components/qwelp/cooperation/cooperation/list.php",
	),
);

?>