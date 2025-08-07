import { PayoutWebhooksPayloadExecutedImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const PayoutWebhooksPayloadExecutedPage = () => {
  return (
    <CommonPage
      pageTitle={` Payout webhooks _ Payload_Executed`}
      src={PayoutWebhooksPayloadExecutedImage}
      backRoute="/payout-webhooks"
    />
  );
};

export default PayoutWebhooksPayloadExecutedPage;
