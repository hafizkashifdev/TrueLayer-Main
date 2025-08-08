import { PaymentsRefundWebhooksPayload1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsRefundWebhooksPayload1Page = () => {
  return (
    <CommonPage
      pageTitle={`Refund webhooks_Payload`}
      src={PaymentsRefundWebhooksPayload1Image}
      backRoute="/payments-refund-webhooks"
    />
  );
};

export default PaymentsRefundWebhooksPayload1Page;
