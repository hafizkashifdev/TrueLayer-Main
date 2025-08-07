import { Consent403Forbidden9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent403Forbidden9Page = () => {
  return (
    <CommonPage
      pageTitle={` 403 Forbidden`}
      src={Consent403Forbidden9Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent403Forbidden9Page;
