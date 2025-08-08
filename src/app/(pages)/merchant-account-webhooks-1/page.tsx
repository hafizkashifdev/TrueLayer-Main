import { MerchantAccountWebhooks1Image } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const MerchantAccountWebhooks1Page = () => {
  return (
    <CommonPage
      pageTitle={` Merchant account webhooks 1`}
      src={MerchantAccountWebhooks1Image}
      backRoute="/merchant-account-webhooks"
    />
  );
};

export default MerchantAccountWebhooks1Page;
