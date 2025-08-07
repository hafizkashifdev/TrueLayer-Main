import { LegacyPaymentApiResponse502ProviderErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse502ProviderErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 502(Provider error)`}
      src={LegacyPaymentApiResponse502ProviderErrorImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse502ProviderErrorPage;
