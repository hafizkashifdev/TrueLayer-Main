import { StartAuthorizationFlowBodyParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartAuthorizationFlowBodyParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Start authorization flow_ Body  Params`}
      src={StartAuthorizationFlowBodyParamsImage}
      backRoute="/payments-start-authorization-flow"
    />
  );
};

export default StartAuthorizationFlowBodyParamsPage;
