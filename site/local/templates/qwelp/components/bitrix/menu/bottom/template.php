<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?if (!empty($arResult)):?>
<ul class="footerMenu"><?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;

	$attr = '';
	if($arItem["TEXT"] == "Заказать консультацию"){
		$attr = ' data-toggle="modal" data-target="#callback"';
	}
?><?if($arItem["SELECTED"]):?>
		<li class="footerMenu__item"><a<?=$attr?> href="<?=$arItem["LINK"]?>" class="footerMenu__link"><?=$arItem["TEXT"]?></a></li>
	<?else:?>
		<li class="footerMenu__item"><a<?=$attr?> href="<?=$arItem["LINK"]?>" class="footerMenu__link"><?=$arItem["TEXT"]?></a></li>
	<?endif?>
	
<?endforeach?>
</ul>
<?endif?>