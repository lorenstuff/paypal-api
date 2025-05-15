//
// Imports
//

import { PayPalAuthorizationWithAdditionalData } from "./PayPalAuthorizationWithAdditionalData.js";
import { PayPalCapture } from "./PayPalCapture.js";
import { PayPalRefund } from "./PayPalRefund.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payment_collection */
export type PayPalPaymentCollection =
{
	authorizations?: PayPalAuthorizationWithAdditionalData[];
	captures?: PayPalCapture[];
	refunds?: PayPalRefund[];
};