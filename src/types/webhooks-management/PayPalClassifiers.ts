//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-Classifiers */
export type PayPalClassifiers =
{
	tags?: string[];
	pairs?: Record<string, string>;
};