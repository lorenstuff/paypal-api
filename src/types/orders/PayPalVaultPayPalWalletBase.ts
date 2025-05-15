//
// Imports
//

import { PayPalStoreInVaultInstruction } from "./PayPalStoreInVaultInstruction.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_paypal_wallet_base */
export type PayPalVaultPayPalWalletBase =
{
	store_in_vault?: PayPalStoreInVaultInstruction;
	description?: string;
	usage_pattern?: string;
	usage_type: string;
	owner_id?: string;
	customer_type?: "CONSUMER"; // TODO: Not actually sure if this type is correct or too restrictive
	permit_multiple_payment_tokens?: boolean;
};