//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-blik_experience_context */
export type PayPalBLIKExperienceContext = PayPalExperienceContextBase &
{
	consumer_user_agent?: string;
	consumer_ip?: string;
};