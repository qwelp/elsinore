<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?if (!empty($arResult)):?>
<ul class="nav navbar-nav horMenu">
<?foreach($arResult as $k => $arItem):?>

	<?if($arItem['DEPTH_LEVEL'] == 1 and ($arResult[($k+1)]['DEPTH_LEVEL'] < 2)):?>
	<li class="horMenu__item"><a class="horMenu__link" href="<?=$arItem["LINK"]?>"><?=$arItem['TEXT']?></a></li>
	<?endif;?>

	<?if($arItem['DEPTH_LEVEL'] == 1 and $arResult[($k+1)]['DEPTH_LEVEL'] == 2):?>
	<li class="dropdown horMenu__item"><a class="dropdown-toggle horMenu__link" href="<?=$arItem["LINK"]?>" data-toggle="dropdown"><?=$arItem['TEXT']?><b class="caret"></b></a>
		<ul class="dropdown-menu q_navbar-menu-dropdown">
	<?endif;?>

	<?if($arItem['DEPTH_LEVEL'] == 2):?>
			<li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
	<?endif;?>

	<?if($arItem['DEPTH_LEVEL'] == 2 and $arResult[($k+1)]['DEPTH_LEVEL'] == 1):?>
		</ul>
	</li>
	<?endif;?>

<?endforeach;?>
</ul>
<?endif?>