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
?><div class="portfolio clearfix">
	<div class="portfolio__items"><? foreach ($arResult["ITEMS"] as $arItem):
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="portfolio__item">
			<div class="portfolio__item-wrap" style="background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>);">
				<a class="portfolio__item-wrap-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"></a>
				<a  href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="portfolio__item-detail">
					<span class="portfolio__item-link">Подробнее</span>
				</a>
			</div>
			<div class="portfolio__item-title"><?= $arItem['NAME'] ?></div>
		</div><? endforeach; ?>
	</div>
</div>

<div class="text-center">
	<?=$arResult['NAV_STRING']?>
</div>
