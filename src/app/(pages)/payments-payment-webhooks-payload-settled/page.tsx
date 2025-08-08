import { PaymentsPaymentWebhooksPayloadSettledImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadSettledPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload-Settled`}
      src={PaymentsPaymentWebhooksPayloadSettledImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadSettledPage;
