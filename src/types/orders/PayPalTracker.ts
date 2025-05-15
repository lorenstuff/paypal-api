//
// Imports
//

import { PayPalCarrier } from "./PayPalCarrier.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-shipment_tracker */
export type PayPalTracker =
{
	tracking_number: string;
	carrier_name_other?: string;
	carrier: PayPalCarrier;
};