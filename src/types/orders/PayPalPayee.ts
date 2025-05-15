//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-payee */
export type PayPalPayee =
{
	email_address?: string;
	merchant_id?: string;
};