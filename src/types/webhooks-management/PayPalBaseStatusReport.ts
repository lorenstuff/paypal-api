//
// Typess
//

import { PayPalClassifiers } from "./PayPalClassifiers.js";
import { PayPalDeliveryStatus } from "./PayPalDeliveryStatus.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-BaseStatusReport */
export type PayPalBaseStatusReport =
{
	transmission_id?: string;
	status_timestamp?: string;
	status?: PayPalDeliveryStatus;
	classifiers?: PayPalClassifiers;
};