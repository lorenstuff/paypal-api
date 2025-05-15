//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-ideal_request */
export type PayPalIdealRequest =
{
	name: string;
	country_code: string;
	bic?: string;
	experience_context?: PayPalExperienceContextBase;
};