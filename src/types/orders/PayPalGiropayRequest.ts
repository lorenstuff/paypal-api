//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-giropay_request */
export type PayPalGiropayRequest =
{
	name: string;
	country_code: string;
	experience_context?: PayPalExperienceContextBase;
};