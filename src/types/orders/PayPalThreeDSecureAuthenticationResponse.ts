//
// Imports
//

import { PayPalEnrolled } from "./PayPalEnrolled.js";
import { PayPalParesStatus } from "./PayPalParesStatus.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-three_d_secure_authentication_response */
export type PayPalThreeDSecureAuthenticationResponse =
{
	authentication_response?: PayPalParesStatus;
	enrollment_status?: PayPalEnrolled;
};