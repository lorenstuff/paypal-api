//
// Imports
//

import { PayPalName } from "./PayPalName.js";
import { PayPalPortablePostalAddressMediumGrained } from "./PayPalPortablePostalAddressMediumGrained.js";
import { PayPalShippingOption } from "./PayPalShippingOption.js";
import { PayPalShippingType } from "./PayPalShippingType.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_detail */
export type PayPalShippingDetail =
{
	type?: PayPalShippingType;
	options?: PayPalShippingOption[];
	name?: PayPalName;
	address?: PayPalPortablePostalAddressMediumGrained;
};