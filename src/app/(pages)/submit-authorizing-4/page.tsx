import { SubmitAuthorizing4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitAuthorizing4Page = () => {
  return (
    <CommonPage
      pageTitle={`Authorizing`}
      src={SubmitAuthorizing4Image}
      backRoute="/mandates-submit-provider-selection"
    />
  );
};

export default SubmitAuthorizing4Page;
