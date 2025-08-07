import { MandateWebhooksMandateFailed4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MandateWebhooksMandateFailed4Page = () => {
  return (
    <CommonPage
      pageTitle={` Mandate Failed`}
      src={MandateWebhooksMandateFailed4Image}
      backRoute="/mandates-webhooks"
    />
  );
};

export default MandateWebhooksMandateFailed4Page;
