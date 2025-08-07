import { Consent409Conflict11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent409Conflict11Page = () => {
  return (
    <CommonPage
      pageTitle={` 409  Conflict `}
      src={Consent409Conflict11Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent409Conflict11Page;
