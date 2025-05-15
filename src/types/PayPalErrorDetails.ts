//
// Types
//

/** @note Documented in various places throughout the API docs. */
export type PayPalErrorDetails =
{
	field?: string;
	value?: string;
	location?: "body" | "path" | "query";
	issue: string;
	description?: string;
};