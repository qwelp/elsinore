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
?>
<section class="sections">
	<div class="container">
		<div class="sections__row clearfix">
			<div class="sections__cell sections__cell-one">
				<div class="sections__item" style="background-image: url(<?=$arResult['SECTIONS'][0]['PICTURE']['SRC']?>);">
					<div class="sections__item-detail"><a class="sections__item-link" href="<?=$arResult['SECTIONS'][0]['SECTION_PAGE_URL']?>">Подробнее</a></div>
					<div class="sections__item-title"><?=$arResult['SECTIONS'][0]['NAME']?></div>
				</div>
			</div>
			<div class="sections__cell sections__cell-two">
				<div class="sections__item" style="background-image: url(<?=$arResult['SECTIONS'][1]['PICTURE']['SRC']?>);">
					<div class="sections__item-detail"><a class="sections__item-link" href="<?=$arResult['SECTIONS'][1]['SECTION_PAGE_URL']?>">Подробнее</a></div>
					<div class="sections__item-title"><?=$arResult['SECTIONS'][1]['NAME']?></div>
				</div>
			</div>
		</div>
		<div class="sections__row">
			<div class="sections__item sections__item-three" style="background-image: url(<?=$arResult['SECTIONS'][2]['PICTURE']['SRC']?>);">
				<div class="sections__item-detail"><a class="sections__item-link" href="<?=$arResult['SECTIONS'][2]['SECTION_PAGE_URL']?>">Подробнее</a></div>
				<div class="sections__item-title"><?=$arResult['SECTIONS'][2]['NAME']?></div>
			</div>
		</div>
	</div>
</section>