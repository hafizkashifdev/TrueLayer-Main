import { PayoutWebhooksPayloadImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PayoutWebhooksPayloadPage = () => {
  return (
    <CommonPage
      pageTitle={` Payout webhooks _ Payload`}
      src={PayoutWebhooksPayloadImage}
      backRoute="/payout-webhooks"
    />
  );
};

export default PayoutWebhooksPayloadPage;
