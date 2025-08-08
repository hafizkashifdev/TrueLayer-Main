import { MandateWebhooksMandateWebhooks1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MandateWebhooksMandateWebhooks1Page = () => {
  return (
    <CommonPage
      pageTitle={` Mandate Webhooks`}
      src={MandateWebhooksMandateWebhooks1Image}
      backRoute="/mandates-webhooks"
    />
  );
};

export default MandateWebhooksMandateWebhooks1Page;
