import { SubmitFormResponses200PaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormResponses200PaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_ Responses_200 Payment`}
      src={SubmitFormResponses200PaymentImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormResponses200PaymentPage;
