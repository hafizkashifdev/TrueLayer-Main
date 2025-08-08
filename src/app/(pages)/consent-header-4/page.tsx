import { ConsentConsent1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConsentHeader4Page = () => {
  return (
    <CommonPage
      pageTitle={`Header `}
      src={ConsentConsent1Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default ConsentHeader4Page;
