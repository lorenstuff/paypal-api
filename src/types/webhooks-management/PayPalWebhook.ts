//
// Imports
//

import { PayPalEventType } from "./PayPalEventType.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhook */
export type PayPalWebhook =
{
	id?: string;
	url: string;
	event_types: PayPalEventType[];
	links?: PayPalLinkDescription[];
};