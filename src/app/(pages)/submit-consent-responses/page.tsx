import { SubmitConsentResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitConsentResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit consent _Responses`}
      src={SubmitConsentResponsesImage}
      backRoute="/payments-submit-consent"
    />
  );
};

export default SubmitConsentResponsesPage;
