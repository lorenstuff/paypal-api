//
// Imports
//

import { PayPalBLIKOneClickResponse } from "./PayPalBLIKOneClickResponse.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik */
export type PayPalBLIK =
{
	name?: string;
	country_code?: string;
	email?: string;
	one_click?: PayPalBLIKOneClickResponse;
};