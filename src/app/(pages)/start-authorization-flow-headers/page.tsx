import { StartAuthorizationFlowHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartAuthorizationFlowHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Start authorization flow_ Headers`}
      src={StartAuthorizationFlowHeadersImage}
      backRoute="/payments-start-authorization-flow"
    />
  );
};

export default StartAuthorizationFlowHeadersPage;
