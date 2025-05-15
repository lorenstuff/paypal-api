//
// Imports
//

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event */
export type PayPalEvent =
{
	id?: string;
	create_time?: string;
	resource_type?: string;
	event_version?: string;
	event_type?: string;
	summary?: string;
	resource_version?: string;
	resource?: Record<string, string>;
	links?: PayPalLinkDescription[];
};