import { SubmitFailed9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFailed9Page = () => {
  return (
    <CommonPage
      pageTitle={` Failed `}
      src={SubmitFailed9Image}
      backRoute="/mandates-submit-provider-selection"
    />
  );
};

export default SubmitFailed9Page;
