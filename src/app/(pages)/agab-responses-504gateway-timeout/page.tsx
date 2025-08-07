import { AgabResponses504GatewayTimeoutImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses504GatewayTimeoutPage = () => {
  return (
    <CommonPage
      pageTitle={`504(Gateway Timeout)`}
      src={AgabResponses504GatewayTimeoutImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses504GatewayTimeoutPage;
