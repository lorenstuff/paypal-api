//
// Imports
//

import { PayPalEventType } from "./PayPalEventType.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event_type_list */
export type PayPalEventTypeList =
{
	event_types?: PayPalEventType[];
};