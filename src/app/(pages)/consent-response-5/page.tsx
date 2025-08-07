import { ConsentResponse5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConsentResponse5Page = () => {
  return (
    <CommonPage
      pageTitle={` Response`}
      src={ConsentResponse5Image}
      backRoute="/mandates-submit-consent"
    />
  );
};

export default ConsentResponse5Page;
