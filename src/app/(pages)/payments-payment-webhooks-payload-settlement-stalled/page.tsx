import { PaymentsPaymentWebhooksPayloadSettlementStalledImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentsPaymentWebhooksPayloadSettlementStalledPage = () => {
  return (
    <CommonPage
      pageTitle={`Payment webhooks_Payload-Settlement Stalled`}
      src={PaymentsPaymentWebhooksPayloadSettlementStalledImage}
      backRoute="/payments-payment-webhooks"
    />
  );
};

export default PaymentsPaymentWebhooksPayloadSettlementStalledPage;
