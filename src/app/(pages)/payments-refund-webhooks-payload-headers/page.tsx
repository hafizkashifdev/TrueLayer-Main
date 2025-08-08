import { PaymentsRefundWebhooksPayloadHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsRefundWebhooksPayloadHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Refund webhooks_Headers`}
      src={PaymentsRefundWebhooksPayloadHeadersImage}
      backRoute="/payments-refund-webhooks"
    />
  );
};

export default PaymentsRefundWebhooksPayloadHeadersPage;
