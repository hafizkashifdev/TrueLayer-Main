import { LegacyPaymentApiGetAPaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiGetAPaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Get a payment`}
      src={LegacyPaymentApiGetAPaymentImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiGetAPaymentPage;
