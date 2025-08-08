import { PaymentsRefundWebhooksPayloadFailedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsRefundWebhooksPayloadFailedPage = () => {
  return (
    <CommonPage
      pageTitle={`Refund webhooks _Payload_Failed`}
      src={PaymentsRefundWebhooksPayloadFailedImage}
      backRoute="/payments-refund-webhooks"
    />
  );
};

export default PaymentsRefundWebhooksPayloadFailedPage;
