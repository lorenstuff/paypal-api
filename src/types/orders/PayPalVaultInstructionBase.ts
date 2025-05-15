//
// Imports
//

import { PayPalStoreInVaultInstruction } from "./PayPalStoreInVaultInstruction.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-vault_instruction_base */
export type PayPalVaultInstructionBase =
{
	store_in_vault?: PayPalStoreInVaultInstruction;
};