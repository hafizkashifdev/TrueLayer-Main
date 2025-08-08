import { PaymentsPaymentWebhooksPayloadPaymentDisputedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadPaymentDisputedPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload_Payment Disputed`}
      src={PaymentsPaymentWebhooksPayloadPaymentDisputedImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadPaymentDisputedPage;
