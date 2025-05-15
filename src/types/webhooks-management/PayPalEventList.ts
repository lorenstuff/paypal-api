//
// Imports
//

import { PayPalEvent } from "./PayPalEvent.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event_list */
export type PayPalEventList =
{
	events?: PayPalEvent[];
	count?: number;
	links?: PayPalLinkDescription[];
};