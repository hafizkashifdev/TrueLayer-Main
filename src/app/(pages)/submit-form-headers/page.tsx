import { SubmitFormHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_ Headers`}
      src={SubmitFormHeadersImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormHeadersPage;
