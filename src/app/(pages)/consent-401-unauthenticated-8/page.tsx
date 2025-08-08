import { Consent401Unauthenticated8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Consent401Unauthenticated8Page = () => {
  return (
    <CommonPage
      pageTitle={` 401 unauthenticated`}
      src={Consent401Unauthenticated8Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default Consent401Unauthenticated8Page;
