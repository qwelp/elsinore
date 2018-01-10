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
?><div class="nDetailItems">
	<h2 class="nDetail__title nDetailItems__name">Последние новости</h2>
	<ul class="nDetailItems__items clearfix"><?foreach($arResult["ITEMS"] as $arItem):
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?><li id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="nDetailItems__item" style="background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>);">
			<a class="linkList" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"></a>
			<a class="nDetailItems__preview" href="<?=$arItem['DETAIL_PAGE_URL']?>">
				<div class="nDetailItems__date"><?=FormatDate("d F, Y", MakeTimeStamp($arItem["TIMESTAMP_X"]))?></div>
				<div class="nDetailItems__title"><?=$arItem['NAME']?></div>
				<div class="nDetailItems__text"><?=$arItem['PREVIEW_TEXT']?></div>
				<span class="nDetailItems__link">Подробнее</span>
			</a>
		</li><?endforeach;?>
	</ul>
</div>