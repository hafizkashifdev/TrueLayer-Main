import { SubmitSchemeSelectionHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitSchemeSelectionHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit scheme selection_ Headers`}
      src={SubmitSchemeSelectionHeadersImage}
      backRoute="/payments-submit-scheme-selection"
    />
  );
};

export default SubmitSchemeSelectionHeadersPage;
