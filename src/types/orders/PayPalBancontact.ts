//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-bancontact */
export type PayPalBancontact =
{
	card_last_digits?: string;
	name?: string;
	country_code?: string;
	bic?: string;
	iban_last_chars?: string;
};