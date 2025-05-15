//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-seller_protection */
export type PayPalSellerProtection =
{
	status?: "ELIGIBLE" | "PARTIALLY_ELIGIBLE" | "NOT_ELIGIBLE";
	dispute_categories?: string[];
};