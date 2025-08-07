import { SubmitFormResponses404PaymentNotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormResponses404PaymentNotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_ Responses 404 Payment Not Found`}
      src={SubmitFormResponses404PaymentNotFoundImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormResponses404PaymentNotFoundPage;
