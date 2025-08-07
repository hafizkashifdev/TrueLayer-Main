import { LegacyPaymentApiResponse403UnauthorizedImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaymentApiResponse403UnauthorizedPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Response 403(Unauthorized)`}
      src={LegacyPaymentApiResponse403UnauthorizedImage1}
      backRoute="/legacy-payment-api"
    />
  );
};

export default LegacyPaymentApiResponse403UnauthorizedPage1;
