import { PayoutWebhooksHeadersImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const PayoutWebhooksHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Payout webhooks _ Headers`}
      src={PayoutWebhooksHeadersImage}
      backRoute="/payout-webhooks"
    />
  );
};

export default PayoutWebhooksHeadersPage;
