import { SubmitProviderSelectionHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitProviderSelectionHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit provider selection_ Headers`}
      src={SubmitProviderSelectionHeadersImage}
      backRoute="/payments-submit-provider-selection"
    />
  );
};

export default SubmitProviderSelectionHeadersPage;
