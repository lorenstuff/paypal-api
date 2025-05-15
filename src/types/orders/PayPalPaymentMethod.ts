//
// Imports
//

import { PayPalPayeePaymentMethodPreference } from "./PayPalPayeePaymentMethodPreference.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_method */
export type PayPalPaymentMethod =
{
	standard_entry_class_code?: "TEL" | "WEB" | "CCD" | "PPD";
	payee_preferred?: PayPalPayeePaymentMethodPreference;
};