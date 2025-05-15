//
// Imports
//

import { PayPalShippingDetail } from "./PayPalShippingDetail.js";
import { PayPalTrackerResponse } from "./PayPalTrackerResponse.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_with_tracking_details */
export type PayPalShippingWithTrackingDetails = PayPalShippingDetail &
{
	trackers?: PayPalTrackerResponse[];
};