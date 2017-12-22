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
?><section class="newModel">
	<div class="container">
		<div class="newModel__section">Новые модели</div>
		<div class="newModel__items clearfix"><?foreach($arResult["ITEMS"] as $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="newModel__item" style="background-image: url(<?=$arItem['DETAIL_PICTURE']['SRC']?>);">
				<div class="newModel__item-detail"><a class="newModel__item-link" href="<?=$arItem['DETAIL_PAGE_URL']?>">Подробнее</a></div>
				<div class="newModel__item-title"><?=$arItem['NAME']?></div>
			</div><?endforeach;?>
		</div>
	</div>
</section>