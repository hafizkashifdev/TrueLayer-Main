import { LegacyPaymentApiResponse400InvalidRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse400InvalidRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Invalid request)`}
      src={LegacyPaymentApiResponse400InvalidRequestImage}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse400InvalidRequestPage;
