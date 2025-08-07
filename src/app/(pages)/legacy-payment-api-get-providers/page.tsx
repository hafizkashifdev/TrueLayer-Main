import { LegacyPaymentApiGetProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiGetProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`Get providers`}
      src={LegacyPaymentApiGetProvidersImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiGetProvidersPage;
