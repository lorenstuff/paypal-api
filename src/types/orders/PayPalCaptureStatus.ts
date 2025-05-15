//
// Imports
//

import { PayPalCaptureStatusDetails } from "./PayPalCaptureStatusDetails.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-capture_status */
export type PayPalCaptureStatus =
{
	status?: "COMPLETED" | "DECLINED" | "PARTIALLY_REFUNDED" | "PENDING" | "REFUNDED" | "FAILED";
	status_details?: PayPalCaptureStatusDetails;
};