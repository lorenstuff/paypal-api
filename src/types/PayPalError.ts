//
// Imports
//

import { PayPalErrorDetails } from "./PayPalErrorDetails.js";
import { PayPalLinkDescription } from "./PayPalLinkDescription.js";

//
// Types
//

/** @note Documented in various places throughout the API docs. */
export type PayPalError =
{
	name: string;
	message: string;
	debug_id: string;
	information_link?: string;
	details?: PayPalErrorDetails[];
	links?: PayPalLinkDescription[];
};