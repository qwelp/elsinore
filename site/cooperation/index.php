<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Сотрудничество");
?>
<?$APPLICATION->IncludeComponent(
	"qwelp:cooperation", 
	"cooperation", 
	array(
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"IBLOCK_ID" => "5",
		"IBLOCK_TYPE" => "elsinor_ru",
		"ITEMS_LIMIT" => "10",
		"SEF_MODE" => "N",
		"COMPONENT_TEMPLATE" => "cooperation",
		"VARIABLE_ALIASES" => array(
			"ELEMENT_ID" => "ELEMENT_ID",
		)
	),
	false
);?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>