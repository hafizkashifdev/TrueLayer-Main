import { StartAuthorizationFlowResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartAuthorizationFlowResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Start authorization flow_Responses`}
      src={StartAuthorizationFlowResponsesImage}
      backRoute="/payments-start-authorization-flow"
    />
  );
};

export default StartAuthorizationFlowResponsesPage;
