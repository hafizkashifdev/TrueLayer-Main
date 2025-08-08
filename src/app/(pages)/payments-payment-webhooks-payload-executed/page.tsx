import { PaymentsPaymentWebhooksPayloadExecutedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadExecutedPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload-Executed`}
      src={PaymentsPaymentWebhooksPayloadExecutedImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadExecutedPage;
