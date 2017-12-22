<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$this->addExternalJs('https://api-maps.yandex.ru/2.1/?lang=ru_RU');


use \Bitrix\Main\Loader;

Loader::includeModule('iblock');

$placemark = array();
foreach($arResult['ITEMS'] as $k => $arItem)
{
	$tochka = explode(",", $arItem['PROPERTIES']['MAP']['VALUE']);

	$balloonContent = '';
	$balloonContent .= '<div class="map__balloon">';
	$balloonContent .= '<div>'.$arItem['PROPERTIES']['ADDRESS']['VALUE'].'</div>';
	$balloonContent .= '<div>'.$arItem['PROPERTIES']['SCHEDULE']['VALUE']['TEXT'].'</div>';
	$balloonContent .= '<div><a href="tel:'.$arItem['PROPERTIES']['PHONE']['VALUE'].'">'.$arItem['PROPERTIES']['PHONE']['VALUE'].'</a></div>';
	$balloonContent .= '<div><a href="mailto:'.$arItem['PROPERTIES']['EMAIL']['VALUE'].'">'.$arItem['PROPERTIES']['EMAIL']['VALUE'].'</a></div>';
	$balloonContent .= '</div>';

	$placemark[] = array(
		'latitude' => $tochka[0],
		'longitude' => $tochka[1],
		'balloonContent' => $balloonContent
	);
}

$arResult['placemarks'] = json_encode($placemark);

//dump($arResult['placemarks']);
?>
<div class="container-fluid">
	<div id="map" class="map"></div>
</div>
<script>
	ymaps.ready(init);

	var placemarks = <?=$arResult['placemarks']?>,
		geoObjects = [];

	function init() {
		var map = new ymaps.Map('map', {
			center: [59.9351368329542, 30.32757947170037],
			zoom: 10,
			/*controls: [],
			behaviors: []*/
		});

		for (var i = 0; i < placemarks.length; i++) {
			geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
				{
					hintContent: placemarks[i].hintContent,
					balloonContent: placemarks[i].balloonContent
				});
		}

		var clusterer = new ymaps.Clusterer({});

		map.geoObjects.add(clusterer);
		clusterer.add(geoObjects);
	}
</script>

<div class="container">
	<div class="shops__items">
		<?foreach($arResult['ITEMS'] as $k => $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="row shops__item">
				<div class="col-md-2">
					<?if(!empty($arItem['PREVIEW_PICTURE']['SRC'])):?>
						<a href="<?=$arItem['DETAIL_PAGE_URL']?>">
							<img class="shops__img" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">
						</a>
					<?endif;?>
				</div>
				<div class="col-md-4">
					<a class="shops__link" href="<?=$arItem['DETAIL_PAGE_URL']?>">
						<?=$arItem['PROPERTIES']['ADDRESS']['VALUE']?>
					</a>
					<br/>
					метро: <?=$arItem['PROPERTIES']['METRO']['VALUE'][0]?>
				</div>
				<div class="col-md-3">
					<?=$arItem['PROPERTIES']['SCHEDULE']['VALUE']['TEXT']?>
				</div>
				<div class="col-md-3">
					<?=$arItem['PROPERTIES']['PHONE']['VALUE']?><br/>
					<?=$arItem['PROPERTIES']['EMAIL']['VALUE']?>
				</div>
			</div>
		<?endforeach;?>
	</div>
</div>


<?
//dump($arResult['ITEMS']);
?>
