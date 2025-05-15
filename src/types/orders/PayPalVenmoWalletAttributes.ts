//
// Imports
//

import { PayPalVaultVenmoWalletBase } from "./PayPalVaultVenmoWalletBase.js";
import { PayPalWalletCustomer } from "./PayPalWalletCustomer.js";

//
// Types
//


export type PayPalVenmoWalletAttributes =
{
	customer?: Pick<PayPalWalletCustomer, "id">; // Note: This only has the "id" field in the docs
	vault?: PayPalVaultVenmoWalletBase;
};