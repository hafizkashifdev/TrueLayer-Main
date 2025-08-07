import { LegacyPaymentApiResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={LegacyPaymentApiResponseImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponsePage;
