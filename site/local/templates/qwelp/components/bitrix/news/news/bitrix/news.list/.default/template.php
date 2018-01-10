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
?>
<div class="news">
	<ul class="news__items clearfix"><? foreach ($arResult["ITEMS"] as $arItem):
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?>
			<li id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="news__item"
				style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>);">
			<div class="news__preview">
				<div class="news__date"><?= FormatDate("d F, Y", MakeTimeStamp($arItem["TIMESTAMP_X"])) ?></div>
				<div class="news__title"><?= $arItem['NAME'] ?></div>
				<div class="news__text"><?= $arItem['PREVIEW_TEXT'] ?></div>
				<a class="news__link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">Подробнее</a>
			</div>
			</li><? endforeach; ?>
	</ul>
</div>

<div class="text-center">
	<?=$arResult['NAV_STRING']?>
</div>
