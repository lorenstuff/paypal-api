//
// Imports
//

import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";

import { PayPalLinkDescription } from "../PayPalLinkDescription.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_vault_response */
export type PayPalWalletVaultResponse =
{
	id?: string;
	status?: "VAULTED" | "CREATED" | "APPROVED";
	links?: PayPalLinkDescription[];
	customer?: PayPalWalletCustomer;
	owner_id?: string;
};