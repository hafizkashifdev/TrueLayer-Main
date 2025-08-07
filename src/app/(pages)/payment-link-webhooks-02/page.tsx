import { PaymentLinkWebhooks02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PaymentLinkWebhooks02Page = () => {
  return (
    <CommonPage
      pageTitle={`Payment link webhooks 02`}
      src={PaymentLinkWebhooks02Image}
      backRoute="/payment-link-webhooks"
    />
  );
};

export default PaymentLinkWebhooks02Page;
