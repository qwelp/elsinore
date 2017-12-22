<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if ($arResult["NavShowAlways"] || $arResult["NavPageCount"] > 1):?>
<div class="pag">
	<div class="pag_items clearfix">


		<?if ($arResult["NAV"]["PAGE_NUMBER"] == 1):?>

		<?else:?>
			<a class="pag__item pag__item-first" href="<?=$arResult["NAV"]["URL"]["PREV_PAGE"]?>">
				<div class="icon-nav-arrow"></div>
			</a>
		<?endif;?>

		<?for ($PAGE_NUMBER=$arResult["NAV"]["START_PAGE"]; $PAGE_NUMBER<=$arResult["NAV"]["END_PAGE"]; $PAGE_NUMBER++):?>
			<?if ($PAGE_NUMBER == $arResult["NAV"]["PAGE_NUMBER"]):?>
				<a class="pag__item active"  href="#"><?=$PAGE_NUMBER?></a>
			<?else:?>
				<a class="pag__item" href="<?=$arResult["NAV"]["URL"]["SOME_PAGE"][$PAGE_NUMBER]?>"><?=$PAGE_NUMBER?></a>
			<?endif;?>
		<?endfor;?>

		<?if ($arResult["NAV"]["PAGE_NUMBER"] == $arResult["NAV"]["PAGE_COUNT"]):?>

		<?else:?>
			<a class="pag__item pag__item-last" href="<?=$arResult["NAV"]["URL"]["NEXT_PAGE"]?>">
				<div class="icon-nav-arrow"></div>
			</a>
		<?endif;?>

	</div>
</div>
<?endif;?>