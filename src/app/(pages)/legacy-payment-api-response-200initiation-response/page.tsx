import { LegacyPaymentApiResponse200InitiationResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse200InitiationResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response 200(Initiation response)`}
      src={LegacyPaymentApiResponse200InitiationResponseImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse200InitiationResponsePage;
