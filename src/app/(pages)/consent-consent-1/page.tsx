import { ConsentConsent1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConsentConsent1Page = () => {
  return (
    <CommonPage
      pageTitle={`consent`}
      src={ConsentConsent1Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default ConsentConsent1Page;
