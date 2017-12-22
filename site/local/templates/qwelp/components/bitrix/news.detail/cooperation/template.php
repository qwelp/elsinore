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
<div class="cooperation__text"><?=$arResult['DETAIL_TEXT']?></div>
<h2 class="cooperation__title">Почему с нами выгодно сотрудничать?</h2>
<ul class="cooperation__items">
<?foreach ($arResult['PROPERTIES']['PROPERTY_LIST']['VALUE'] as $k => $arItem):?>
<li class="cooperation__item">
	<div class="cooperation__item-number"><?=($k+1)?></div>
	<div class="cooperation__item-text"><?=$arItem?></div>
</li>
<?endforeach;?>
</ul>
<h2 class="cooperation__title cooperation__title-sub">Шаги сотрудничесва</h2>
<ul class="cooperationInfo clearfix">
<?foreach ($arResult['PROPERTIES']['STEP']['VALUE'] as $k => $arItem):?>
<li class="cooperationInfo__item">
	<div class="cooperationInfo__item-icon">
		<div class="<?=$arResult['PROPERTIES']['STEP']['DESCRIPTION'][$k]?>"></div>
	</div>
	<div class="cooperationInfo__item-text"><?=$arItem?></div>
</li>
<?endforeach;?>
</ul>

