//
// Imports
//

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhooks_lookup */
export type PayPalWebhookLookup =
{
	id?: string;
	client_id?: string;
	links?: PayPalLinkDescription[];
};