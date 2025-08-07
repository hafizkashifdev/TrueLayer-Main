import { LegacyPaymentApiResponse200EmbeddedAuthFlowStepSubmissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse200EmbeddedAuthFlowStepSubmissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 200(Embedded auth flow step submission)`}
      src={LegacyPaymentApiResponse200EmbeddedAuthFlowStepSubmissionImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse200EmbeddedAuthFlowStepSubmissionPage;
