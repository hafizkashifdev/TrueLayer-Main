import { LegacyPaymentApiResponse3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse3Page = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={LegacyPaymentApiResponse3Image}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse3Page;
