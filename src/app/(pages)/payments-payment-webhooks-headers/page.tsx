import { PaymentsPaymentWebhooksHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Payments webhooks-Headers`}
      src={PaymentsPaymentWebhooksHeadersImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksHeadersPage;
