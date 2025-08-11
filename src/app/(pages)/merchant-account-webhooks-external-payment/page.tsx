import { MerchantAccountWebhooksExternalPaymentImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const MerchantAccountWebhooksExternalPaymentPage = () => {
  return (
    <CommonPage
      pageTitle={` Merchant account webhooks External Payment`}
      src={MerchantAccountWebhooksExternalPaymentImage}
      backRoute="/merchant-account-webhooks"
    />
  );
};

export default MerchantAccountWebhooksExternalPaymentPage;
