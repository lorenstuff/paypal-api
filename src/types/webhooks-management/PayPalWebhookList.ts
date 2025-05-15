//
// Imports
//

import { PayPalWebhook } from "./PayPalWebhook.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-webhook_list */
export type PayPalWebhookList =
{
	webhooks?: PayPalWebhook[];
};