import { PaymentsPaymentWebhooksPayloadAuthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadAuthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload-Authorized`}
      src={PaymentsPaymentWebhooksPayloadAuthorizedImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadAuthorizedPage;
