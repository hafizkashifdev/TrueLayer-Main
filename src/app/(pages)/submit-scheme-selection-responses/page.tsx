import { SubmitSchemeSelectionResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitSchemeSelectionResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit scheme selection_Responses`}
      src={SubmitSchemeSelectionResponsesImage}
      backRoute="/payments-submit-scheme-selection"
    />
  );
};

export default SubmitSchemeSelectionResponsesPage;
