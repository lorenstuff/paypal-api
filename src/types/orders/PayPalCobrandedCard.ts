//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPayee } from "./PayPalPayee.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-cobranded_card */
export type PayPalCobrandedCard =
{
	labels?: string[];
	payee?: PayPalPayee;
	amount?: PayPalMoney;
};