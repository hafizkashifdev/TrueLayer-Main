import { LegacyPaymentApiResponse502ProviderError1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse502ProviderError1Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 502(Provider error)`}
      src={LegacyPaymentApiResponse502ProviderError1Image}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse502ProviderError1Page;
