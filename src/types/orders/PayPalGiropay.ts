//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-giropay */
export type PayPalGiropay =
{
	name?: string;
	country_code?: string;
	bic?: string;
};;