import { SubmitConsentHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitConsentHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit consent_ Headers`}
      src={SubmitConsentHeadersImage}
      backRoute="/payments-submit-consent"
    />
  );
};

export default SubmitConsentHeadersPage;
