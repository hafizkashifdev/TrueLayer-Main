import { PayoutWebhooksPayloadFailedImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const PayoutWebhooksPayloadFailedPage = () => {
  return (
    <CommonPage
      pageTitle={` Payout webhooks _ Payload_Failed`}
      src={PayoutWebhooksPayloadFailedImage}
      backRoute="/payout-webhooks"
    />
  );
};

export default PayoutWebhooksPayloadFailedPage;
