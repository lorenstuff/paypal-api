//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-level_2_card_processing_data */
export type PayPalLevel2 =
{
	invoice_id?: string;
	tax_total?: PayPalMoney;
};