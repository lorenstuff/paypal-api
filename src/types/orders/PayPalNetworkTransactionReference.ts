//
// Imports
//

import { PayPalCardBrand } from "./PayPalCardBrand.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-network_transaction_reference */
export type PayPalNetworkTransactionReference =
{
	id: string;
	date?: string;
	acquirer_reference_number?: string;
	network?: PayPalCardBrand;
};