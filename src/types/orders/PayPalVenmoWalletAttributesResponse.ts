//
// Imports
//

import { PayPalVaultResponse } from "./PayPalVaultResponse.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_attributes_response */
export type PayPalVenmoWalletAttributesResponse =
{
	vault?: PayPalVaultResponse;
};