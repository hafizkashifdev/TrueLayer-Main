import { AgaResponses504GatewayTimeoutHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses504GatewayTimeoutHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={` Headers`}
      src={AgaResponses504GatewayTimeoutHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses504GatewayTimeoutHeadersPage;
