//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-eps */
export type PayPalEPS =
{
	name?: string;
	country_code?: string;
	bic?: string;
};