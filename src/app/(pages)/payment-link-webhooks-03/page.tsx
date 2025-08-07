import { PaymentLinkWebhooks03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentLinkWebhooks03Page = () => {
  return (
    <CommonPage
      pageTitle={`Payment link webhooks 03`}
      src={PaymentLinkWebhooks03Image}
      backRoute="/payment-link-webhooks"
    />
  );
};

export default PaymentLinkWebhooks03Page;
