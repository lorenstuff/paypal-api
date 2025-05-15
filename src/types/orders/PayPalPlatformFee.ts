//
// Imports
//

import { PayPalMoney } from "./PayPalMoney.js";
import { PayPalPayee } from "./PayPalPayee.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-platform_fee */
export type PayPalPlatformFee =
{
	amount: PayPalMoney;
	payee?: PayPalPayee;
};