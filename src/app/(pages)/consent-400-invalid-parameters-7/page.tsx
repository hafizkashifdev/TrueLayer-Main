import { Consent400InvalidParameters7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent400InvalidParameters7Page = () => {
  return (
    <CommonPage
      pageTitle={`400 Invalid Parameters `}
      src={Consent400InvalidParameters7Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent400InvalidParameters7Page;
