import { SubmitConcurrencyConflict16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitConcurrencyConflict16Page = () => {
  return (
    <CommonPage
      pageTitle={` CONCURRENCY CONFLICT `}
      src={SubmitConcurrencyConflict16Image}
      backRoute="/mandates-submit-provider-selection"
    />
  );
};

export default SubmitConcurrencyConflict16Page;
