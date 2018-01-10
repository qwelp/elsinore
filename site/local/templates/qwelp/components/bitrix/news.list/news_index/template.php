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
?><section class="indexNews">
	<div class="container pr">
		<h2 class="indexNews__seciton">Последние новости</h2>
	</div>
	<div class="container pr">
		<div class="indexNews__nav owl-nav"></div>
		<div class="indexNews__items owl-carousel owl-theme"><?foreach($arResult["ITEMS"] as $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="indexNews__item" style="background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>);">
				<a class="linkList" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"></a>
				<a class="indexNews__preview" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
					<div class="indexNews__date"><?=FormatDate("d F, Y", MakeTimeStamp($arItem["TIMESTAMP_X"]))?></div>
					<div class="indexNews__title"><?=$arItem['NAME']?></div>
					<div class="indexNews__text"><?=$arItem['PREVIEW_TEXT']?></div>
					<span class="indexNews__link" href="<?=$arItem['DETAIL_PAGE_URL']?>">Подробнее</span>
				</a>
			</div><?endforeach;?>
		</div>
	</div>
</section>