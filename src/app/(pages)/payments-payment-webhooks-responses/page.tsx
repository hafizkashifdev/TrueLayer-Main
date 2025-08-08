import { PaymentsPaymentWebhooksResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Paymentw webhooks-Responses`}
      src={PaymentsPaymentWebhooksResponsesImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksResponsesPage;
