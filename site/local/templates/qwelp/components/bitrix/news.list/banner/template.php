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
?><section class="indexSlider">
	<div class="container">
		<div class="row">
			<div class="indexSlider__nav owl-nav"></div>
			<div class="indexSliderDots">
				<div class="indexSlider__dots owl-dots"></div>
			</div>
		</div>
	</div>
	<div class="indexSlider__items owl-carousel owl-theme"><?foreach($arResult["ITEMS"] as $arItem):
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?><div id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="indexSlider__item">
			<div class="container">
				<div class="row">
					<div class="indexSlider__content">
						<div class="indexSlider__content__wrap">
							<div class="indexSlider__title"><?=$arItem['NAME']?></div>
							<?if($arItem['PROPERTIES']['NAME']['VALUE']):?>
							<a class="indexSlider__btn" href="<?=$arItem['PROPERTIES']['LINK']['VALUE']?>"><?=$arItem['PROPERTIES']['NAME']['VALUE']?></a>
							<?endif;?>
						</div>
					</div>
				</div>
			</div><a class="indexSlider__link" href="#"><img class="indexSlider__img" src="<?=$arItem['DETAIL_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>"></a>
		</div><?endforeach;?>
	</div>
</section>