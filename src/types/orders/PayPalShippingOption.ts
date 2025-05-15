//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalShippingType } from "./PayPalShippingType.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_option */
export type PayPalShippingOption =
{
	id: string;
	label: string;
	selected: boolean;
	type?: PayPalShippingType;
	amount?: PayPalMoney;
};