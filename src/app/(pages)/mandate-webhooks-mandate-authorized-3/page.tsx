import { MandateWebhooksMandateAuthorized3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MandateWebhooksMandateAuthorized3Page = () => {
  return (
    <CommonPage
      pageTitle={`Mandate Authorized`}
      src={MandateWebhooksMandateAuthorized3Image}
      backRoute="/mandates-webhooks"
    />
  );
};

export default MandateWebhooksMandateAuthorized3Page;
