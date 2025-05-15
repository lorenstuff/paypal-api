//
// Imports
//

import { PayPalPaymentSource } from "./PayPalPaymentSource.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-order_capture_request */
export type PayPalOrderCaptureRequest =
{
	payment_source?: PayPalPaymentSource;
};