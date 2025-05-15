//
// Imports
//

import { PayPalECIFlag } from "./PayPalECIFlag.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-network_token_request */
export type PayPalNetworkToken =
{
	number: string;
	cryptogram?: string;
	token_requestor_id?: string;
	expiry: string;
	eci_flag?: PayPalECIFlag;
};