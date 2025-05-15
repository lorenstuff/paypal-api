//
// Imports
//

import { PayPalPaymentSource } from "./PayPalPaymentSource.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_authorize_request */
export type PayPalAuthorizeRequest =
{
	payment_source?: PayPalPaymentSource;
};