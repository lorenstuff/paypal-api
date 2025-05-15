//
// Imports
//

import { PayPalRefundStatusDetails } from "./PayPalRefundStatusDetails.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-refund_status */
export type PayPalRefundStatus =
{
	status?: "CANCELLED" | "FAILED" | "PENDING" | "COMPLETED";
	status_details?: PayPalRefundStatusDetails;
};