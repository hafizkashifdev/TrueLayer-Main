import { SubmitFormResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmitFormResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit form_ Responses_403 Forbidden`}
      src={SubmitFormResponses403ForbiddenImage}
      backRoute="/payments-submit-form"
    />
  );
};

export default SubmitFormResponses403ForbiddenPage;
