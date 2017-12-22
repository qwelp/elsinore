<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
?>
<div class="container-fluid">
	<div id="map" class="map"></div>
</div>
<?
$balloonContent = '';
$balloonContent .= '<div class="map__balloon">';
$balloonContent .= '<div>'.$arResult['PROPERTIES']['ADDRESS']['VALUE'].'</div>';
$balloonContent .= '<div>'.$arResult['PROPERTIES']['SCHEDULE']['VALUE']['TEXT'].'</div>';
$balloonContent .= '<div><a href="tel:'.$arResult['PROPERTIES']['PHONE']['VALUE'].'">'.$arResult['PROPERTIES']['PHONE']['VALUE'].'</a></div>';
$balloonContent .= '<div><a href="mailto:'.$arResult['PROPERTIES']['EMAIL']['VALUE'].'">'.$arResult['PROPERTIES']['EMAIL']['VALUE'].'</a></div>';
$balloonContent .= '</div>';

$tochka = explode(",", $arResult['PROPERTIES']['MAP']['VALUE']);
?>
<script>
	ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init(){
		myMap = new ymaps.Map ("map", {
			center: [<?=$tochka[0]?>, <?=$tochka[1]?>],
			zoom: 14
		});

		myPlacemark = new ymaps.Placemark([<?=$tochka[0]?>, <?=$tochka[1]?>], {
			content: 'Москва!', balloonContent: '<?=$balloonContent?>' });

		myMap.geoObjects.add(myPlacemark);
	}
</script>
<div class="shop">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<ul class="shop__items">
					<li class="shop__item">
						<div class="shop__item_label">Адрес</div>
						<?=$arResult['NAME']?><br>
						<?=$arResult['PROPERTIES']['ADDRESS']['VALUE']?>
					</li>
					<li class="shop__item">
						<div class="shop__item_label">Станция метро</div>
						<?=$arResult['PROPERTIES']['METRO']['VALUE'][0]?>
					</li>
					<li class="shop__item">
						<div class="shop__item_label">Телефон</div>
						<a href="tel:<?=$arResult['PROPERTIES']['PHONE']['VALUE']?>"><?=$arResult['PROPERTIES']['PHONE']['VALUE']?></a>
					</li>
					<li class="shop__item">
						<div class="shop__item_label">Email</div>
						<a href="mailto:<?=$arResult['PROPERTIES']['EMAIL']['VALUE']?>"><?=$arResult['PROPERTIES']['EMAIL']['VALUE']?></a>
					</li>
					<li class="shop__item">
						<div class="shop__item_label">Режим работы</div>
						<?=$arResult['PROPERTIES']['SCHEDULE']['VALUE']['TEXT']?>
					</li>
				</ul>
			</div>
			<div class="col-md-8">
				<div class="shop__detailText">
					<?=$arResult['DETAIL_TEXT']?>
				</div>
				<div class="shop__img">
					<?if(!empty($arResult['DETAIL_PICTURE']['SRC'])):?>
						<img class="shop__img_picture" src="<?=$arResult['DETAIL_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">
					<?endif;?>
				</div>
			</div>
		</div>
	</div>
</div>