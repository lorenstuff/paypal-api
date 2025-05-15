//
// Imports
//

import { PayPalVenmoWalletAttributes } from "./PayPalVenmoWalletAttributes.js";
import { PayPalVenmoWalletExperienceContext } from "./PayPalVenmoWalletExperienceContext.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-venmo_wallet_request */
export type PayPalVenmoWalletRequest =
{
	experience_context?: PayPalVenmoWalletExperienceContext;
	vault_id?: string;
	email_address?: string;
	attributes?: PayPalVenmoWalletAttributes;
};