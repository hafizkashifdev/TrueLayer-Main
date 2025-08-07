import { SubmitConsentResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitConsentResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit consent_ Responses_401 Unauthenticated`}
      src={SubmitConsentResponses401UnauthenticatedImage}
      backRoute="/payments-submit-consent"
    />
  );
};

export default SubmitConsentResponses401UnauthenticatedPage;
