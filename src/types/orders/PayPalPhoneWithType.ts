//
// Imports
//

import { PayPalPhone } from "./PayPalPhone.js";
import { PayPalPhoneType } from "./PayPalPhoneType.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-phone_with_type */
export type PayPalPhoneWithType =
{
	phone_type?: PayPalPhoneType;
	phone_number: PayPalPhone;
};