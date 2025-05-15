//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-error_type */
export type PayPalErrorType =
{
	id?: string;
	name: string;
	description?: string;
};