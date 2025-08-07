import { StartConsent9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartConsent9Page = () => {
  return (
    <CommonPage
      pageTitle={`Consent `}
      src={StartConsent9Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartConsent9Page;
