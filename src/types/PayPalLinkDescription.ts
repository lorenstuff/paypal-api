//
// Types
//

/** @note Documented in various places throughout the API docs. */
export type PayPalLinkDescription =
{
	href: string;
	rel: string;
	method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH";
};