import { LegacyPaymentApiResponse200ListOfProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse200ListOfProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 200(List of providers) `}
      src={LegacyPaymentApiResponse200ListOfProvidersImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse200ListOfProvidersPage;
