//
// Imports
//

import { PayPalNetworkTransactionReference } from "./PayPalNetworkTransactionReference.js";
import { PayPalPaymentInitiator } from "./PayPalPaymentInitiator.js";
import { PayPalStoredPaymentSourcePaymentType } from "./PayPalStoredPaymentSourcePaymentType.js";
import { PayPalStoredPaymentSourceUsageType } from "./PayPalStoredPaymentSourceUsageType.js";

//
// Types
//

export type PayPalStoredPaymentSource =
{
	payment_initiator: PayPalPaymentInitiator;
	payment_type: PayPalStoredPaymentSourcePaymentType;
	usage?: PayPalStoredPaymentSourceUsageType;
	previous_network_transaction_reference?: PayPalNetworkTransactionReference;
};