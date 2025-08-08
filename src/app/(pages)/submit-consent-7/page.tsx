import { SubmitConsent7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitConsent7Page = () => {
  return (
    <CommonPage
      pageTitle={`Consent  `}
      src={SubmitConsent7Image}
      backRoute="/mandates-submit-provider-selection"
    />
  );
};

export default SubmitConsent7Page;
