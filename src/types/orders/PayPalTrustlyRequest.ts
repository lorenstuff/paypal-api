//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

export type PayPalTrustlyRequest =
{
	name: string;
	country_code: string;
	experience_context?: PayPalExperienceContextBase;
};