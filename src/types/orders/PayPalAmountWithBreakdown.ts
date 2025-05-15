//
// Imports
//

import { PayPalAmountBreakdown } from "./PayPalAmountBreakdown.js";
import { PayPalMoney } from "./PayPalMoney.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-amount_with_breakdown */
export type PayPalAmountWithBreakdown =  PayPalMoney &
{
	breakdown?: PayPalAmountBreakdown;
};