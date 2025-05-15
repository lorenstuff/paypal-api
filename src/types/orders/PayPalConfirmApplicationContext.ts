//
// Imports
//

import { PayPalCardStoredCredential } from "./PayPalCardStoredCredential.js";
//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_confirm_application_context */
export type PayPalConfirmApplicationContext =
{
	brand_name?: string;
	return_url?: string;
	cancel_url?: string;
	locale?: string;
	stored_payment_source?: PayPalCardStoredCredential;
};