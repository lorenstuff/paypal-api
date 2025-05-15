//
// Imports
//

import { PayPalExperienceContextBase } from "./PayPalExperienceContextBase.js";

//
// Types
//

export type PayPalSofortRequest =
{
	name: string;
	country_code: string;
	experience_context?: PayPalExperienceContextBase;
};