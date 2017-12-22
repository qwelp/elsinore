<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogElementComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();


foreach ($arResult['PROPERTIES']['FOTO']['VALUE'] as $k => $foto) {

	$arResult['FOTO'][] = CFile::ResizeImageGet(
		$foto,
		array('width'=>200, 'height' => 190),
		BX_RESIZE_IMAGE_PROPORTIONAL,
		false
	);
	$arResult['FOTO_BIG'][] = CFile::ResizeImageGet(
		$foto,
		array('width' => 1400, 'height' => 1400),
		BX_RESIZE_IMAGE_PROPORTIONAL,
		false
	);
}

foreach ($arResult['PROPERTIES']['GALLEREY']['VALUE'] as $k => $foto) {

	$arResult['GALLEREY'][] = CFile::ResizeImageGet(
		$foto,
		array('width'=>200, 'height' => 190),
		BX_RESIZE_IMAGE_PROPORTIONAL,
		false
	);
	$arResult['GALLEREY_BIG'][] = CFile::ResizeImageGet(
		$foto,
		array('width' => 1400, 'height' => 1400),
		BX_RESIZE_IMAGE_PROPORTIONAL,
		false
	);
}

foreach ($arResult['PROPERTIES']['ITEMS']['VALUE'] as $k => $id) {
	$arSelect = Array("ID", "NAME", "DETAIL_PAGE_URL", "DETAIL_PICTURE");
	$arFilter = Array("IBLOCK_ID"=> $arParams['IBLOCK_ID'], "ID" => $id);
	$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
	while($ob = $res->GetNextElement(false, false))
	{
		$arFields = $ob->GetFields();

		$arFields['IMG'] = CFile::ResizeImageGet(
			$arFields['DETAIL_PICTURE'],
			array('width'=>380, 'height' => 365),
			BX_RESIZE_IMAGE_PROPORTIONAL,
			true
		);

		$arResult['PRODUCT_ITEMS'][] = $arFields;
	}
}