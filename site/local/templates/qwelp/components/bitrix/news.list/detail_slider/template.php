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
?><div class="nDetail__slider">
	<section class="indexCollection" id="collectionNews">
		<div class="pr">
			<h2 class="nDetailItems__name">Новые модели в коллекциях</h2>
		</div>
		<div class="pr">
			<div class="indexCollection__nav owl-nav"></div>
			<div class="indexCollection__items owl-carousel owl-theme"><?foreach($arResult["ITEMS"] as $arItem):
				$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
				$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
				?><div class="indexCollection__item">
					<div class="indexCollection__detail">
						<a class="indexCollection__detail_link" href="<?=$arItem['DETAIL_PAGE_URL']?>">Подробнее</a></div>
					<div class="indexCollection__title"><?=$arItem['NAME']?></div>
					<img class="indexCollection__img" src="<?=$arItem['DETAIL_PICTURE']['SRC']?>" alt="">
				</div><?endforeach;?>
			</div>
		</div>
	</section>
</div>