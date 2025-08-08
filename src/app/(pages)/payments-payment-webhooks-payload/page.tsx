import { PaymentsPaymentWebhooksPayloadImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload`}
      src={PaymentsPaymentWebhooksPayloadImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadPage;
