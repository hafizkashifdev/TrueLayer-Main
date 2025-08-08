import { StartAuthorizationFlowResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartAuthorizationFlowResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Start authorization flow_ Responses_401 Unauthenticated`}
      src={StartAuthorizationFlowResponses401UnauthenticatedImage}
      backRoute="/payments-start-authorization-flow"
    />
  );
};

export default StartAuthorizationFlowResponses401UnauthenticatedPage;
