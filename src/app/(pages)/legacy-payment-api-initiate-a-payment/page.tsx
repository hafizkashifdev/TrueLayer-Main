import { LegacyPaymentApiInitiateAPaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiInitiateAPaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Initiate a payment`}
      src={LegacyPaymentApiInitiateAPaymentImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiInitiateAPaymentPage;
