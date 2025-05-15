//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-bancontact_request */
export type PayPalBancontactRequest =
{
	name: string;
	country_code: string;
	experience_context?: PayPalExperienceContextBase;
};