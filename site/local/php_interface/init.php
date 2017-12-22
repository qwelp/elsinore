<?php
function dump($arr) {
	?><pre><?print_r($arr)?></pre><?
}


AddEventHandler("iblock", "OnAfterIBlockElementAdd", Array("AfterElementAdd", "AfterElementAddSendMail"));

class AfterElementAdd
{
	function AfterElementAddSendMail(&$arFields)
	{
		if($arFields["IBLOCK_ID"] == 9)
		{
			$arEventFields = array(
				"NAME"         => $arFields["NAME"],
				"PHONE"        => $arFields["PROPERTY_VALUES"]["27"],
				"EMAIL"        => $arFields["PROPERTY_VALUES"]["28"],
				"CITY"         => $arFields["PROPERTY_VALUES"]["29"]
			);
			CEvent::Send("QWELP_GET_ADVICE", SITE_ID, $arEventFields);
		}

		if($arFields["IBLOCK_ID"] == 8)
		{
			$arEventFields = array(
				"NAME"         => $arFields["NAME"],
				"PHONE"        => $arFields["PROPERTY_VALUES"]["23"],
				"EMAIL"        => $arFields["PROPERTY_VALUES"]["24"],
				"CITY"         => $arFields["PROPERTY_VALUES"]["25"]
			);
			CEvent::Send("QWELP_COOPERATION", SITE_ID, $arEventFields);
		}
	}
}
?>