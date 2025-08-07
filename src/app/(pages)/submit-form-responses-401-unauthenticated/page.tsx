import { SubmitFormResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_ Responses_401 Unauthenticated`}
      src={SubmitFormResponses401UnauthenticatedImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormResponses401UnauthenticatedPage;
