import { PaymentLinkWebhooks01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentLinkWebhooks01Page = () => {
  return (
    <CommonPage
      pageTitle={`Payment link webhooks 01`}
      src={PaymentLinkWebhooks01Image}
      backRoute="/payment-link-webhooks"
    />
  );
};

export default PaymentLinkWebhooks01Page;
