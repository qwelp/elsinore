<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();?>
<section class="indexCollection indexCollection__odd" id="collectionTwo">
	<div class="container pr">
		<h2 class="indexCollection__seciton"><?=$arResult['NAME']?></h2>
	</div>
	<div class="container pr">
		<div class="indexCollection2__nav owl-nav"></div>
		<div class="indexCollection2__items owl-carousel owl-theme"><?foreach($arResult['ITEMS'] as $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="indexCollection__item animate__item">
				<div class="indexCollection__detail"><a class="indexCollection__detail_link" href="<?=$arItem['DETAIL_PAGE_URL']?>">Подробнее</a></div>
				<div class="indexCollection__title"><?=$arItem['NAME']?></div>
				<img class="indexCollection__img animate__img" src="<?=$arItem['DETAIL_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">
			</div><?endforeach;?>
		</div>
	</div>
</section>