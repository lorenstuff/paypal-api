//
// Imports
//

import { PayPalCustomer } from "./PayPalCustomer.js";
import { PayPalVaultInstructionBase } from "./PayPalVaultInstructionBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-card_attributes */
export type PayPalCardAttributes =
{
	customer?: PayPalCustomer;
	vault?: PayPalVaultInstructionBase;
};