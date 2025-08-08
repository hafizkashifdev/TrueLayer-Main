import { MandateWebhooksPayload2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MandateWebhooksPayload2Page = () => {
  return (
    <CommonPage
      pageTitle={`PAYLOAD`}
      src={MandateWebhooksPayload2Image}
      backRoute="/mandates-webhooks"
    />
  );
};

export default MandateWebhooksPayload2Page;
