import { ConsentConsent1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConsentPathParams2Page = () => {
  return (
    <CommonPage
      pageTitle={` Path Params `}
      src={ConsentConsent1Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default ConsentPathParams2Page;
