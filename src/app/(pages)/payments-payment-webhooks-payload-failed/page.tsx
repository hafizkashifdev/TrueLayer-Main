import { PaymentsPaymentWebhooksPayloadFailedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadFailedPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload-Failed`}
      src={PaymentsPaymentWebhooksPayloadFailedImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadFailedPage;
