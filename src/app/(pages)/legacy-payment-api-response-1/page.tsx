import { LegacyPaymentApiResponse1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse1Page = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={LegacyPaymentApiResponse1Image}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse1Page;
