//
// Imports
//

import { PayPalApplePayPaymentData } from "./PayPalApplePayPaymentData.js";
import { PayPalCard } from "./PayPalCard.js";
import { PayPalMoney } from "./PayPalMoney.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-apple_pay_decrypted_token_data */
export type PayPalApplePayDecryptedTokenData =
{
	device_manufacturer_id?: string;
	payment_data_type?: "3DSECURE" | "EMV";
	transaction_amount?: PayPalMoney;
	tokenized_card: PayPalCard;
	payment_data?: PayPalApplePayPaymentData;
};