import { SubmitFormResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_Responses`}
      src={SubmitFormResponsesImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormResponsesPage;
