//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-event_type */
export type PayPalEventType =
{
	name: string;
	description?: string;
	status?: string;
	resource_versions?: string[];
};