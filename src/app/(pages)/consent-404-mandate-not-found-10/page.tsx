import { Consent404MandateNotFound10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent404MandateNotFound10Page = () => {
  return (
    <CommonPage
      pageTitle={`404  Mandate Not Found `}
      src={Consent404MandateNotFound10Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent404MandateNotFound10Page;
