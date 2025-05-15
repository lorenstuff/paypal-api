//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_from_request */
export type PayPalCardFromRequest =
{
	last_digits?: string;
	expiry?: string;
};