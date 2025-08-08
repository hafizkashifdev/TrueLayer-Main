import { MerchantAccountWebhooksBalanceNotificationImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const MerchantAccountWebhooksBalanceNotificationPage = () => {
  return (
    <CommonPage
      pageTitle={` Merchant account webhooks Balance Notification`}
      src={MerchantAccountWebhooksBalanceNotificationImage}
      backRoute="/merchant-account-webhooks"
    />
  );
};

export default MerchantAccountWebhooksBalanceNotificationPage;
