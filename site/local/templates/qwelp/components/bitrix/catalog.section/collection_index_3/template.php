<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();?>
<section class="indexCollection" id="collectionThree">
	<div class="container pr">
		<h2 class="indexCollection__seciton"><?=$arResult['NAME']?></h2>
	</div>
	<div class="container pr">
		<div class="indexCollection3__nav owl-nav"></div>
		<div class="indexCollection3__items owl-carousel owl-theme">
			<?foreach($arResult['ITEMS'] as $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="indexCollection__item animate__item indexCollection__item_bg" style="background-image: url(<?=$arItem['DETAIL_PICTURE']['SRC']?>);">
				<a class="linkList" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"></a>
				<a class="indexCollection__detail" href="<?=$arItem['DETAIL_PAGE_URL']?>">
					<span class="indexCollection__detail_link">Подробнее</span>
				</a>
				<div class="indexCollection__title"><?=$arItem['NAME']?></div>
				<!--<img class="indexCollection__img animate__img" src="<?/*=$arItem['DETAIL_PICTURE']['SRC']*/?>" alt="<?/*=$arItem['NAME']*/?>">-->
			</div>
			<?endforeach;?>
		</div>
	</div>
</section>