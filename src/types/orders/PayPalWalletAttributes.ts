//
// Imports
//

import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";
import { PayPalVaultPayPalWalletBase } from "./PayPalVaultPayPalWalletBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-paypal_wallet_attributes */
export type PayPalWalletAttributes =
{
	customer?: PayPalWalletCustomer;
	vault?: PayPalVaultPayPalWalletBase;
};