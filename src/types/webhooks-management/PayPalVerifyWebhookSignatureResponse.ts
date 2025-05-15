//
// Types
//

/** @see https://developer.paypal.com/docs/api/webhooks/v1/#definition-verify_webhook_signature_response */
export type PayPalVerifyWebhookSignatureResponse =
{
	verification_status: "SUCCESS" | "FAILURE";
};