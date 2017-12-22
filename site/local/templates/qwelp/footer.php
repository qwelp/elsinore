<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Localization\Loc;
Loc::loadMessages(__FILE__);
?>
<div class="wrapper__footer"></div>
</div>
<footer class="footer">
	<div class="footer__layer">
		<div class="subscribe">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-12 col-xs-12">
						<div class="subscribe__wrap clearfix">
							<div class="icon-subscribe"></div>
							<div class="subscribe__decription">Подписывайтесь на новости и акции</div>
						</div>
					</div>
					<div class="col-lg-7 col-md-12 col-xs-12">
						<div class="subscribe__form clearfix">
							<div class="subscribe__table">
									<div class="subscribe__tr">
										<div class="subscribe__td">
											<div class="subscribe__input">
												<div class="subscribe__ok">
													<div class="subscribe__ok-text">Вы подписаны</div>
												</div>
												<div class="subscribe__error">
													<div class="subscribe__error-text">Вы подписаны</div>
												</div>
												<input class="subscribe__input_text" required  type="email" name="subscribe__email" placeholder="Оставьте свой e-mail">
											</div>
										</div>
										<div class="subscribe__td">
											<a class="subscribe_btn" href="#">
												<div class="subscribe_btn__table">
													<div class="subscribe_btn__row">
														<div class="subscribe_btn__td">
															<div class="subscribe_btn__title">Подписаться</div>
														</div>
														<div class="subscribe_btn__td">
															<div class="subscribe_btn__icon">
																<div class="icon-subscribe-btn"></div>
															</div>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
						</div>
					</div>
					<div class="col-lg-2 col-sm-12 col-xs-12">
						<div class="subscribeSmo">
							<div class="subscribeSmo__title">Мы в контакте:</div>
							<ul class="subscribeSmo__items clearfix">
								<li class="subscribeSmo__item"><a class="subscribeSmo__link" href="#">
										<div class="subscribeSmo__img icon-vk"></div>
										<div class="logo__text">vk</div></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer__wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-3">
						<div class="footer__copyright"><?$APPLICATION->IncludeComponent(
								"bitrix:main.include",
								"",
								Array(
									"AREA_FILE_SHOW" => "file",
									"AREA_FILE_SUFFIX" => "inc",
									"EDIT_TEMPLATE" => "",
									"PATH" => SITE_DIR.'include_areas/copyright.php'
								)
							);?></div>
						<?$APPLICATION->IncludeComponent(
							"bitrix:news.list",
							"smo_footer",
							array(
								"ACTIVE_DATE_FORMAT" => "d.m.Y",
								"ADD_SECTIONS_CHAIN" => "N",
								"AJAX_MODE" => "N",
								"AJAX_OPTION_ADDITIONAL" => "",
								"AJAX_OPTION_HISTORY" => "N",
								"AJAX_OPTION_JUMP" => "N",
								"AJAX_OPTION_STYLE" => "N",
								"CACHE_FILTER" => "N",
								"CACHE_GROUPS" => "Y",
								"CACHE_TIME" => "36000000",
								"CACHE_TYPE" => "A",
								"CHECK_DATES" => "Y",
								"DETAIL_URL" => "",
								"DISPLAY_BOTTOM_PAGER" => "N",
								"DISPLAY_DATE" => "Y",
								"DISPLAY_NAME" => "Y",
								"DISPLAY_PICTURE" => "N",
								"DISPLAY_PREVIEW_TEXT" => "Y",
								"DISPLAY_TOP_PAGER" => "N",
								"FIELD_CODE" => array(
									0 => "",
									1 => "",
								),
								"FILTER_NAME" => "",
								"HIDE_LINK_WHEN_NO_DETAIL" => "N",
								"IBLOCK_ID" => "2",
								"IBLOCK_TYPE" => "elsinor_ru",
								"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
								"INCLUDE_SUBSECTIONS" => "N",
								"MESSAGE_404" => "",
								"NEWS_COUNT" => "20",
								"PAGER_BASE_LINK_ENABLE" => "N",
								"PAGER_DESC_NUMBERING" => "N",
								"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
								"PAGER_SHOW_ALL" => "N",
								"PAGER_SHOW_ALWAYS" => "N",
								"PAGER_TEMPLATE" => ".default",
								"PAGER_TITLE" => "Новости",
								"PARENT_SECTION" => "",
								"PARENT_SECTION_CODE" => "",
								"PREVIEW_TRUNCATE_LEN" => "",
								"PROPERTY_CODE" => array(
									0 => "ICON",
									1 => "LINK",
									2 => "",
								),
								"SET_BROWSER_TITLE" => "N",
								"SET_LAST_MODIFIED" => "N",
								"SET_META_DESCRIPTION" => "N",
								"SET_META_KEYWORDS" => "N",
								"SET_STATUS_404" => "N",
								"SET_TITLE" => "N",
								"SHOW_404" => "N",
								"SORT_BY1" => "ACTIVE_FROM",
								"SORT_BY2" => "SORT",
								"SORT_ORDER1" => "DESC",
								"SORT_ORDER2" => "ASC",
								"STRICT_SECTION_CHECK" => "N",
								"COMPONENT_TEMPLATE" => "smo_footer"
							),
							false
						);?>
						<div class="footer__info"><?$APPLICATION->IncludeComponent(
								"bitrix:main.include",
								"",
								Array(
									"AREA_FILE_SHOW" => "file",
									"AREA_FILE_SUFFIX" => "inc",
									"EDIT_TEMPLATE" => "",
									"PATH" => SITE_DIR.'include_areas/info_footer.php'
								)
							);?></div>
					</div>
					<div class="col-md-2">
						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"bottom",
							array(
								"ALLOW_MULTI_SELECT" => "N",
								"CHILD_MENU_TYPE" => "left",
								"DELAY" => "N",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_GET_VARS" => array(
								),
								"MENU_CACHE_TIME" => "3600",
								"MENU_CACHE_TYPE" => "N",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"ROOT_MENU_TYPE" => "bottom_1",
								"USE_EXT" => "N",
								"COMPONENT_TEMPLATE" => "bottom"
							),
							false
						);?>
					</div>
					<div class="col-md-2">
						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"bottom",
							array(
								"ALLOW_MULTI_SELECT" => "N",
								"CHILD_MENU_TYPE" => "left",
								"DELAY" => "N",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_GET_VARS" => array(
								),
								"MENU_CACHE_TIME" => "3600",
								"MENU_CACHE_TYPE" => "N",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"ROOT_MENU_TYPE" => "bottom_2",
								"USE_EXT" => "N",
								"COMPONENT_TEMPLATE" => "bottom"
							),
							false
						);?>
					</div>
					<div class="col-md-3">
						<?$APPLICATION->IncludeComponent(
							"bitrix:menu",
							"bottom",
							array(
								"ALLOW_MULTI_SELECT" => "N",
								"CHILD_MENU_TYPE" => "left",
								"DELAY" => "N",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_GET_VARS" => array(
								),
								"MENU_CACHE_TIME" => "3600",
								"MENU_CACHE_TYPE" => "N",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"ROOT_MENU_TYPE" => "bottom_3",
								"USE_EXT" => "N",
								"COMPONENT_TEMPLATE" => "bottom"
							),
							false
						);?>
					</div>
					<div class="col-md-2">
						<div class="footerContact">
							<div class="footerContact__phone"><?$APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									Array(
										"AREA_FILE_SHOW" => "file",
										"AREA_FILE_SUFFIX" => "inc",
										"EDIT_TEMPLATE" => "",
										"PATH" => SITE_DIR.'include_areas/phone.php'
									)
								);?></div><a class="footerContact__callback" href="#" data-toggle="modal" data-target="#callback">Получить консультацию</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
<ul class="cooperationControl hideLayer">
	<li class="cooperationControl__item">
		<div class="cooperationControl__col"><span class="cooperationControl__icon icon-calc"></span></div>
		<div class="cooperationControl__col"><a class="cooperationControl__link" href="#">Узнать стоимость</a></div>
	</li>
	<li class="cooperationControl__item">
		<div class="cooperationControl__col"><span class="cooperationControl__icon icon-phones"></span></div>
		<div class="cooperationControl__col"><a class="cooperationControl__link" href="#">ЗАКАЗАТЬ ЗВОНОК</a></div>
	</li>
	<li class="cooperationControl__item">
		<div class="cooperationControl__col"><span class="cooperationControl__icon icon-plus"></span></div>
		<div class="cooperationControl__col"><a class="cooperationControl__link" href="#">Бонусная программа</a></div>
	</li>
	<li class="cooperationControl__item-last"><a class="cooperationControl__hide" id="js-cooperationControl" href="#">
			<div class="cooperationControl__hide-wrap">
				<div class="cooperationControl__hide-col">
					<div class="cooperationControl__hide-text">Свернуть</div>
				</div>
				<div class="cooperationControl__hide-col">
					<div class="icon-arrow-right-coop"></div>
				</div>
			</div></a></li>
</ul>
<div class="modal fade" id="callback" tabindex="-1" role="dialog">
	<div class="modal-dialog callbackForm" role="document">
		<div class="modal-content">
	<?$APPLICATION->IncludeComponent(
		"bitrix:iblock.element.add.form",
		"cooperation",
		array(
			"CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
			"CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
			"CUSTOM_TITLE_DETAIL_PICTURE" => "",
			"CUSTOM_TITLE_DETAIL_TEXT" => "",
			"CUSTOM_TITLE_IBLOCK_SECTION" => "",
			"CUSTOM_TITLE_NAME" => "Имя",
			"CUSTOM_TITLE_PREVIEW_PICTURE" => "",
			"CUSTOM_TITLE_PREVIEW_TEXT" => "",
			"CUSTOM_TITLE_TAGS" => "",
			"DEFAULT_INPUT_SIZE" => "30",
			"DETAIL_TEXT_USE_HTML_EDITOR" => "N",
			"ELEMENT_ASSOC" => "CREATED_BY",
			"AJAX_MODE" => "Y",
			"AJAX_OPTION_SHADOW" => "Y", // затемнять область
			"AJAX_OPTION_JUMP" => "Y", // скроллить страницу до компонента
			"AJAX_OPTION_STYLE" => "N", // подключать стили
			"AJAX_OPTION_HISTORY" => "N",
			"GROUPS" => array(
				0 => "2",
			),
			"IBLOCK_ID" => "9",
			"IBLOCK_TYPE" => "forms",
			"LEVEL_LAST" => "Y",
			"LIST_URL" => "",
			"MAX_FILE_SIZE" => "0",
			"MAX_LEVELS" => "100000",
			"MAX_USER_ENTRIES" => "100000",
			"PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
			"PROPERTY_CODES" => array(
				0 => "27",
				1 => "28",
				2 => "29",
				3 => "30",
				4 => "NAME",
			),
			"PROPERTY_CODES_REQUIRED" => array(
				0 => "27",
				1 => "28",
				2 => "29",
				3 => "30",
			),
			"RESIZE_IMAGES" => "N",
			"SEF_MODE" => "N",
			"STATUS" => "ANY",
			"STATUS_NEW" => "N",
			"USER_MESSAGE_ADD" => "Данные отправлены",
			"USER_MESSAGE_EDIT" => "Данные отправлены",
			"USE_CAPTCHA" => "N",
			"COMPONENT_TEMPLATE" => "cooperation"
		),
		false
	);?>
		</div>
	</div>
</div>
<div class="arrowTop" id="js-top"></div>
</body>
</html>