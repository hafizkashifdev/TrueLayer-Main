import { AgaResponses504GatewayTimeoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses504GatewayTimeoutPage = () => {
  return (
    <CommonPage
      pageTitle={`504(Gateway Timeout)`}
      src={AgaResponses504GatewayTimeoutImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses504GatewayTimeoutPage;
