import { PaymentsRefundWebhooksPayloadExecutedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsRefundWebhooksPayloadExecutedPage = () => {
  return (
    <CommonPage
      pageTitle={`Refund webhooks _Payload_executed`}
      src={PaymentsRefundWebhooksPayloadExecutedImage}
      backRoute="/payments-refund-webhooks"
    />
  );
};

export default PaymentsRefundWebhooksPayloadExecutedPage;
