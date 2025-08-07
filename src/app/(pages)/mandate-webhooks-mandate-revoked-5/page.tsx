import { MandateWebhooksMandateRevoked5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MandateWebhooksMandateRevoked5Page = () => {
  return (
    <CommonPage
      pageTitle={` Mandate Revoked`}
      src={MandateWebhooksMandateRevoked5Image}
      backRoute="/mandates-webhooks"
    />
  );
};

export default MandateWebhooksMandateRevoked5Page;
