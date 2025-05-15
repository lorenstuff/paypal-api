//
// Imports
//

import { PayPalWebhookLookup } from "./PayPalWebhookLookup.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-WebhookLookupList */
export type PayPalWebhookLookupList =
{
	webhook_lookups?: PayPalWebhookLookup[];
};