//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-token */
export type PayPalToken =
{
	id: string;
	type: "BILLING_AGREEMENT";
};