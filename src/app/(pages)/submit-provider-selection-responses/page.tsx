import { SubmitProviderSelectionResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitProviderSelectionResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit provider selection_Responses`}
      src={SubmitProviderSelectionResponsesImage}
      backRoute="/payments-submit-provider-selection"
    />
  );
};

export default SubmitProviderSelectionResponsesPage;
