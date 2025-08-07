import { PaymentsRefundWebhooksPayloadResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsRefundWebhooksPayloadResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Refund webhooks_Responses`}
      src={PaymentsRefundWebhooksPayloadResponsesImage}
      backRoute="/payments-refund-webhooks"
    />
  );
};

export default PaymentsRefundWebhooksPayloadResponsesPage;
