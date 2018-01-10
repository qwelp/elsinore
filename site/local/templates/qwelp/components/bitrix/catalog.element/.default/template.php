<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

$this->setFrameMode(true);
?>
<section class="catalogItem">
	<div class="container">
		<div class="catalogItemInfo" style="background-image: url(<?=$arResult['DETAIL_PICTURE']['SRC']?>);">
			<div class="catalogItemPanel">
				<div class="catalogItemPanel__wrap">
					<div class="catalogItemPanel__col">
						<h1 class="catalogItemPanel__title"><?=$arResult['NAME']?></h1>
						<div class="catalogItemPanel__text"><?=$arResult['PREVIEW_TEXT']?></div>
					</div>
					<div class="catalogItemPanel__col">
						<ul class="catalogItemPanel__items">
							<li class="catalogItemPanel__item"><a class="catalogItemPanel__link" <a href="#" class="headerContact__callback" data-toggle="modal" data-target="#order_product">Рассчитать</a></li>
							<li class="catalogItemPanel__item"><a class="catalogItemPanel__link" data-toggle="open" href="#property">Характеристики</a></li>
							<li class="catalogItemPanel__item"><a class="catalogItemPanel__link" data-toggle="open" href="#box_size">Габаритные размеры</a></li>
							<li class="catalogItemPanel__item"><a class="catalogItemPanel__link" data-toggle="open" href="#foto">Фотографии</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="catalogItemPanelCollapse" id="box_size"><?=$arResult['PROPERTIES']['SIZE']['VALUE']?></div>
			<div class="catalogItemPanelCollapse" id="property"><?=$arResult['PROPERTIES']['PROP']['~VALUE']?></div>
			<div class="catalogItemPanelCollapse" id="calc_item">Рассчитать</div>
			<div class="catalogItemPanelCollapse" id="foto">
				<div class="catalogItemInfoFoto clearfix">
					<?foreach ($arResult['FOTO'] as $k => $arFoto):?>
					<div class="catalogItemInfoFoto__item">
						<a class="catalogItemInfoFoto__link" href="<?=$arResult['FOTO_BIG'][$k]['src']?>" data-fancybox-group="catalogItemInfoFoto__link" style="background-image: url(<?=$arFoto['src']?>);"></a>
					</div>
					<?endforeach;?>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="galleryItem">
	<div class="container">
		<h2 class="galleryItem__title">Галерея</h2>
		<div class="galleryItem__items clearfix">
			<?foreach ($arResult['GALLEREY'] as $k => $arFoto):?>
			<div class="galleryItem__item" style="background-image: url(<?=$arFoto['src']?>);">
				<a class="galleryItem__link" data-fancybox-group="galleryItem__link" href="<?=$arResult['GALLEREY_BIG'][$k]['src']?>"></a>
			</div>
			<?endforeach;?>
		</div>
	</div>
</section>
<section class="catalogGalleryItem">
	<div class="container">
		<h2 class="catalogGalleryItem__title">Модели других коллекций</h2>
		<div class="catalogGalleryItem__items clearfix">
			<?foreach ($arResult['PRODUCT_ITEMS'] as $k => $arItem):?>
			<div class="catalogGalleryItem__item" style="background-image: url(<?=$arItem['IMG']['src']?>);">
				<a class="linkList" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"></a>
				<div class="catalogGalleryItem__link">
					<a class="catalogGalleryItemMore" href="<?=$arItem['DETAIL_PAGE_URL']?>">
						<span class="catalogGalleryItemMore__link">Подробнее</span>
					</a>
					<div class="catalogGalleryItem__link-title"><?=$arItem['NAME']?></div>
				</div>
			</div>
			<?endforeach;?>
		</div>
	</div>
</section>