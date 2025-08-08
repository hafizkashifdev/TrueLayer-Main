import { PayoutWebhooksResponse200Image } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const PayoutWebhooksResponse200Page = () => {
  return (
    <CommonPage
      pageTitle={`Payout webhooks _ Response 200`}
      src={PayoutWebhooksResponse200Image}
      backRoute="/payout-webhooks"
    />
  );
};

export default PayoutWebhooksResponse200Page;
