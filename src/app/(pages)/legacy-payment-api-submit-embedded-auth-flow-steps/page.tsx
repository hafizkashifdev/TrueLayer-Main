import { LegacyPaymentApiSubmitEmbeddedAuthFlowStepsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiSubmitEmbeddedAuthFlowStepsPage = () => {
  return (
    <CommonPage
      pageTitle={`Submit embedded auth flow steps`}
      src={LegacyPaymentApiSubmitEmbeddedAuthFlowStepsImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiSubmitEmbeddedAuthFlowStepsPage;
