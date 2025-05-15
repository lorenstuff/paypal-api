//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-mybank */
export type PayPalMyBank =
{
	name?: string;
	country_code?: string;
	bic?: string;
	iban_last_chars?: string;
};