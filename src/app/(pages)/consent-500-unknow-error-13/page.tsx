import { Consent500UnknowError13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent500UnknowError13Page = () => {
  return (
    <CommonPage
      pageTitle={`500 Unknow Error`}
      src={Consent500UnknowError13Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent500UnknowError13Page;
