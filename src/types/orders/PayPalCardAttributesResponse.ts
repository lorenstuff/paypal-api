//
// Import
//

import { PayPalVaultResponse } from "./PayPalVaultResponse.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_attributes_response */
export type PayPalCardAttributesResponse =
{
	vault?: PayPalVaultResponse;
};