import { SubmitInvalidState11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitInvalidState11Page = () => {
  return (
    <CommonPage
      pageTitle={` Invalid State `}
      src={SubmitInvalidState11Image}
      backRoute="/mandates-submit-provider-selection"
    />
  );
};

export default SubmitInvalidState11Page;
