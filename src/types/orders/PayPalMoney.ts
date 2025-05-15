//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-money */
export type PayPalMoney =
{
	currency_code: string;
	value: string;
};