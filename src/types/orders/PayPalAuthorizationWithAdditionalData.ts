//
// Imports
//

import { PayPalAuthorization } from "./PayPalAuthorization.js";
import { PayPalProcessorResponse } from "./PayPalProcessorResponse.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-authorization_with_additional_data */
export type PayPalAuthorizationWithAdditionalData = PayPalAuthorization &
{
	processor_response?: PayPalProcessorResponse;
};